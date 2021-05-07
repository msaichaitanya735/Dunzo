import React, { useEffect, useState } from 'react'
import {Link } from 'react-router-dom'
import axios from 'axios'
import AddingProducts from './AddingProducts';

const CreatingStore = (props) => {
    const [title,setTitle]=useState('');
    const [img_url,setImg_url]=useState('');
    const [desc,setDesc]=useState('');
    const [selectedLocations,setSelectedLocations]=useState([])
    const [availLocations,setAvailLocations]=useState([])
    const [checked,setChecked]=useState(false)
    const [locations,setLocations]=useState([]);
    const [items,setItems]=useState([])
    // const [service,setService]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/getlocation').then((res)=>setLocations(res.data))
    })
    // useEffect(()=>{
    //     console.log(title, img_url, desc)
    // },[title,img_url,desc])
    const submit=()=>{
        const newStore={
            title:title,
            img_url:img_url,
            category:localStorage.getItem('selectedservice'),
            description:desc,
            location:JSON.stringify(selectedLocations),
            items:JSON.stringify(items)
        }
        console.log(newStore)
        // axios.post('http://localhost:5000/addstore',newStore).then((res)=>console.log('done'))
        // var available_services=[]
        console.log(locations)
        console.log(availLocations)
        availLocations.forEach((loc)=>{
            // console.log(loc)
            //  available_services=[...available_services,loc]
            // console.log(JSON.stringify(available_services))
            var servi=[]
            if(loc.available_services){
             servi=[...(JSON.parse(loc.available_services))]
            }
            console.log(servi)
            if(!(servi.includes(localStorage.getItem('selectedservice')))){
            const servicelocation={
                available_service:JSON.stringify([...servi,localStorage.getItem('selectedservice')])
            }
            console.log(servicelocation)
            axios.put(`http://localhost:5000/getlocation/?_id=${loc._id}`,servicelocation).then((res)=>console.log('updated'))
        }
        })

    }
    return (
        <div style={{marginTop:'50px'}}>
        <div style={{width:'99%',backgroundColor:'#171e30',height:'250px',marginTop:'50px',borderRadius:'10px',marginLeft:'10px',textAlign:'center'}}>
            <div className='container' style={{color:'white',padding:'100px'}}><h4 style={{fontSize:'40px',fontWeight:'300'}}>Creating a store in {localStorage.getItem('selectedservice')}</h4>
        </div>
        </div>
        <div className='container' style={{marginTop:'10px',boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px',borderRadius:'20px'}}>
            <div style={{marginLeft:'20px'}}>
            <div style={{height:"10vh"}}></div>
            <h4>Store Title:  <input type= 'text' style={{borderRadius:'10px',width:'50vh',padding:'5px',margin:'5px'}} onChange={(e)=>{
                setTitle(e.target.value)
            }}/></h4>
            <h4>Image: <input type= 'text' style={{borderRadius:'10px',width:'50vh',padding:'5px',margin:'5px'}} onChange={(e)=>{
                setImg_url(e.target.value)
            }}/></h4>
            <h4>Description:  <input type= 'text' style={{borderRadius:'10px',width:'50vh',padding:'5px',margin:'5px'}} onChange={(e)=>{
                setDesc(e.target.value)
            }}/></h4>
            <div style={{display:'flex',justifyContent:'',flexWrap:'wrap',alignItems:'center'}}>
            <h4 style={{}}>Location : </h4> 
            <div style={{width:'100px'}}></div>
            <div style={{}}>
            {
                locations.map((details,i)=>{
                    return(
                        <div key={i}>
                        <input type='checkbox' id={details.location_name} value={details.location_name}  onChange={(e)=>{
                            if(selectedLocations.indexOf(e.target.value)===-1){

                            setSelectedLocations([...selectedLocations,e.target.value])
                            setAvailLocations([...availLocations,details])
                            }
                            else{
                                selectedLocations.splice(selectedLocations.indexOf(e.target.value),1)
                            }}}/>
                        <label >{details.location_name}</label>
                        </div>
                    )
                })
            }
            </div>
            </div>
            <Link to='/admin/addlocation' style={{flex:'0'}}><button style={{margin:'20px',cursor: 'pointer',fontSize: '14px',color: 'rgb(255, 255, 255)',background: 'rgb(242, 154, 108)',padding: '8px 20px',borderRadius: '30px',fontWeight: 'bold'}}>Create New Location</button></Link>
           
            
            </div>
            <AddingProducts items={items} onChange={setItems}/>
            <button onClick={submit} style={{marginLeft:'42%',cursor: 'pointer',fontSize: '14px',color: 'rgb(255, 255, 255)',background: 'rgb(0, 210, 144)',padding: '8px 20px',borderRadius: '30px',fontWeight: 'bold'}}>Submit</button>
        </div>
        </div>
    )
}

export default CreatingStore
