import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AddingProducts from './AddingProducts';
import { useHistory } from 'react-router';


const EditIdvStore = (props) => {
    const history=useHistory()
    const [title,setTitle]=useState('');
    const [img_url,setImg_url]=useState('');
    const [desc,setDesc]=useState('');
    const [category,setCategory]=useState('');
    const [selectedLocations,setSelectedLocations]=useState([])
    const [checked,setChecked]=useState(false)
    const [location,setLocation]=useState([]);
    const [locations,setLocations]=useState([]);
    const [items,setItems]=useState([])
    const [store,setStore]=useState('')
    const [unit,setUnit]=useState('')
    const [price,setPrice]=useState('')
    const [clicked,setClicked]=useState(false)
    const [tempunit,setTempunit]=useState('');
    const [tempprice,setTempprice]=useState('');
    const [newitems,setNewitems]=useState([]);
    useEffect(()=>{
        setTimeout(()=>{
            setChecked('1')
        },500)    
    },[])
    useEffect(()=>{
        console.log(props.match.params)
        axios.get('http://localhost:5000/getidvstore/',{
            params:{_id:props.match.params._id}
        }).then((res)=>{
            setStore(res.data[0])
            console.log(store,'done')
        })
        axios.get('http://localhost:5000/getlocation').then((res)=>setLocations(res.data))
        setTitle(store.title)
        setImg_url(store.img_url)
        setDesc(store.description)
        setCategory(store.category)
        setTimeout(()=>{
            const jsonitems = JSON.parse(store.items)
            setItems((jsonitems))
            console.log(items)
        },500) 
        if(location){
            setLocation((store.location))
        }
        console.log(desc)
        console.log(title,img_url,desc,items)
    },[checked])
    const submit=()=>{
        console.log(newitems)
        var nava = [...items,...newitems];
        console.log(nava)
        setItems(nava)
        console.log(items)
        console.log(title,img_url,desc,category,location,selectedLocations,items)
        const newStore={
            title:title,
            img_url:img_url,
            category:category,
            description:desc,
            location:JSON.stringify(selectedLocations),
            items:JSON.stringify(nava)
        }
        console.log(newStore)
        axios.put(`http://localhost:5000/getidvstore?_id=${store._id}`,newStore)
        history.goBack()
        
    }
    return (
        <div style={{marginTop:'50px'}}>
            <div>
        <div style={{width:'99%',backgroundColor:'rgb(239, 127, 67)',height:'250px',marginTop:'50px',borderRadius:'10px',marginLeft:'10px',textAlign:'center'}}>
            <div className='container' style={{color:'black',padding:'100px'}}><h4 style={{fontSize:'40px',fontWeight:'300'}}>Editing the store </h4>
        </div>
        </div>
        <div className='container' style={{marginTop:'10px',boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px' ,textAlign:'center'}}>
            <h4>Title: </h4>      <input type='text' value={title} style={{borderRadius:'10px',width:'50vh',padding:'5px',margin:'5px'     ,textAlign:'center'}}      onChange={(e)=>{setTitle(e.target.value)}}/>
            <h4>Image </h4>       <input type='text' value={img_url} style={{borderRadius:'10px',width:'50vh',padding:'5px',margin:'5px'   ,textAlign:'center'}} onChange={(e)=>{setImg_url(e.target.value)}}/> 
            <h4>Category :</h4>   <input type='text' value={category} style={{borderRadius:'10px',width:'50vh',padding:'5px',margin:'5px'  ,textAlign:'center'}} onChange={(e)=>{setCategory(e.target.value)}}/>   
            <h4>Description :</h4><input type='text' value={desc} style={{borderRadius:'10px',width:'50vh',padding:'5px',margin:'5px'      ,textAlign:'center'}} onChange={(e)=>{setDesc(e.target.value)}}/>    
            <h4>Location:  </h4>  
            {
                locations.map((details,i)=>{
                    return(
                        <div key={i}>
                        <input type='checkbox' id={details.location_name} value={details.location_name}  onChange={(e)=>{
                            if(selectedLocations.indexOf(e.target.value)===-1)
                            setSelectedLocations([...selectedLocations,e.target.value])
                            else{
                                selectedLocations.splice(selectedLocations.indexOf(e.target.value),1)
                            }}}/>
                        <label >{details.location_name}</label>
                        </div>
                    )
                })
            }<br/>
            <div className='cards' >  
            {
            items.map((item,i)=>{
                setTimeout(()=>{setUnit(item.unit)
                setPrice(item.price)},1000)
  
                return(
                    <div key={i} style={{width:'500px'}}>
                        <div className='col' style={{}}>
                        <div style={{boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px',display:'flex',flexWrap:'wrap',height:'200px',borderRadius:'10px',margin:'10px',overflow:'hidden'}}>
                            <div >
                            <img src={item.image} style={{width:'200px',height:'200px',overflow:'hidden',objectFit:'cover'}}/>
                            </div>
                            <div style={{display:'inline-block',textAlign:'center'}}>                            
                            <h4>{item.name} <i className='fas fa-pen' /></h4>
                                <h4>Unit: <input id='uni' type='text' placeholder={item.unit} style={{borderRadius:'10px',width:'15vh',padding:'5px',margin:'5px'}} onChange={(e)=>{
                                    setTempunit(e.target.value)
                                    setUnit(e.target.value)}}/></h4>
                                <h4>Price:<input type='text' placeholder={item.price} style={{borderRadius:'10px',width:'15vh',padding:'5px',margin:'5px'}} onChange={(e)=>{setTempprice(e.target.value)}}/></h4>
                                <button onClick={()=>{
                                    console.log(tempunit)
                                    var moditem = {
                                        name:item.name,
                                        image:item.image,
                                        unit:tempunit,
                                        price:tempprice 
                                    }
                                    console.log(moditem,i)
                                    console.log(items[i])
                                    items.splice(i,1,moditem)
                                    console.log(items)
                                }} style={{pointerEvents :(tempprice||tempunit)?'':'none',margin:'10px',cursor: 'pointer',fontSize: '14px',color: 'rgb(255, 255, 255)',background: 'rgb(255, 102, 102)',padding: '8px 20px',borderRadius: '30px',fontWeight: 'bold'}}>Modify</button>
                                <button onClick={()=>{
                                    items.splice(i,1)
                                }}style={{margin:'10px',cursor: 'pointer',fontSize: '14px',color: 'rgb(255, 255, 255)',background: 'rgb(255, 102, 102)',padding: '8px 20px',borderRadius: '30px',fontWeight: 'bold'}}>Delete</button>
                            </div>
                            </div>
                        </div>
                        </div>
                )
            })
        }
        </div>
        <button style={{textAlign:'center', margin:'20px',cursor: 'pointer',fontSize: '14px',color: 'rgb(255, 255, 255)',background: 'rgb(77, 184, 255)',padding: '8px 20px',borderRadius: '30px',fontWeight: 'bold'}} onClick={()=>{setClicked(!clicked)}}>Add Products</button>
        <div style={{marginTop:'50px'}}>
        {
            clicked?<AddingProducts items={newitems} onChange={setNewitems}/>:''
        }
        </div><br/>
           <button onClick={submit} style={{textAlign:'center', margin:'20px',cursor: 'pointer',fontSize: '14px',color: 'rgb(255, 255, 255)',background: 'rgb(0, 210, 144)',padding: '8px 20px',borderRadius: '30px',fontWeight: 'bold'}}>Submit</button>
        
        </div>
        </div>
        </div>
    )
}

export default EditIdvStore
