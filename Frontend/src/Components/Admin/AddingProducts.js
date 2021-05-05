import axios from 'axios'
import React, { useEffect, useState,useStyles } from 'react'
import { Link } from 'react-router-dom'
import './products.css'


const AddingProducts = ({items,onChange}) => {
    const [products,setProducts]=useState([])
    const [price,setPrice]=useState('')
    const [unit,setUnit]= useState('')
    const [searchWord,setSearchWord]=useState('');
    const [filterData,setFilterData]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/getproducts').then((res)=>setProducts(res.data))
        axios.get('http://localhost:5000/getproducts').then((res)=>setFilterData(res.data))
        // console.log(filterData)
        // console.log(products)
    },[])
    useEffect(()=>{
        console.log(searchWord)
        if(searchWord.length>0){
          const filter= products.filter(item=>{
            return Object.keys(item).some(key=>{
              return item[key].toString().toLowerCase().includes(searchWord)
            })
          })
          setFilterData(filter)
          console.log(filterData)
        }
    },[searchWord])
    const search=(e)=>{
         setSearchWord(e.target.value.toLowerCase().trim()) 
    }
    
    return (
        <div>
            <div style={{textAlign:'center'}}>
                <Link to='/admin/addproducts'style={{margin:'20px',cursor: 'pointer',fontSize: '14px',color: 'rgb(255, 255, 255)',background: 'rgb(243, 198, 98)',padding: '8px 20px',borderRadius: '30px',fontWeight: 'bold'}}>Create New Product</Link>
                <h4><input type="text" name="search" placeholder="Search.. &#128270; " onChange={search} className='input_text_container'></input></h4>
           </div>
           <div className='cards' >  
           {/* style={{display:'grid',gridTemplateColumns:'repeat(2, 2fr)',marginLeft:'5%'}} */}
            {
                filterData.map((data,i)=>{
                    const add=()=>{
                        var item={
                            name:data.name,
                            image:data.image,
                            unit:unit,
                            price:price
                        }
                        onChange([...items,item])
                        console.log(items )
                    }
                   
                    return(
                        <div key={i} style={{width:'500px'}}>
                        <div className='col' style={{}}>
                        <div style={{boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px',display:'flex',flexWrap:'wrap',height:'200px',borderRadius:'10px',margin:'10px',overflow:'hidden'}}>
                            <div >
                            <img src={data.image} style={{width:'200px',height:'200px',overflow:'hidden',objectFit:'cover'}}/>
                            </div>
                            <div style={{display:'inline-block',textAlign:'center'}}>                            
                            <h4>{data.name}</h4>
                                <h4>Unit:<input type='text' style={{borderRadius:'10px',width:'15vh',padding:'5px',margin:'5px'}} onChange={(e)=>{setUnit(e.target.value)}}/></h4>
                                <h4>Price:<input type='text' style={{borderRadius:'10px',width:'15vh',padding:'5px',margin:'5px'}} onChange={(e)=>{setPrice(e.target.value)}}/></h4>
                                <button onClick={add} style={{margin:'10px',cursor: 'pointer',fontSize: '14px',color: 'rgb(255, 255, 255)',background: 'rgb(255, 102, 102)',padding: '8px 20px',borderRadius: '30px',fontWeight: 'bold'}}>Add</button>
                            </div>
                            </div>
                        </div>
                        </div>
                        
                    )
                })
            }
            </div>
        </div>
    )
}

export default AddingProducts
