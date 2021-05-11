import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Route } from 'react-router'
import {BrowserRouter as Router, Switch,Link } from 'react-router-dom'
import EditIdvStore from './EditIdvStore'
import './products.css'
const EditStore = () => {
    const [search,setSearch]=useState('')
    const [store,setStore]=useState([]);
    const [filter,setFilter]=useState([]);
    const [temp,setTemp]=useState('')
    useEffect(()=>{
      setTimeout(()=>{
        console.log('hello');
        setSearch((localStorage.getItem('selectedservice').toLowerCase().trim()))
      console.log(search)},1000)
    },[],[temp])
    

    useEffect(()=>{
        axios.get('http://localhost:5000/getstores').then((res)=>setStore(res.data))
        
        console.log(store)

        console.log(search)
        if(search.length>0){
            const filtered= store.filter(item=>{
              return Object.keys(item).some(key=>{
                return item[key].toString().toLowerCase().includes(search)
              })
            })
            setFilter(filtered)
            console.log(filter )
          }
    },[search])

    return (
        <div style={{marginTop:'50px'}}>
        <div style={{width:'99%',backgroundColor:'rgb(239, 127, 67)',height:'auto',marginTop:'50px',borderRadius:'10px',marginLeft:'10px',textAlign:'center',overflow:'hidden'}}>
            <div className='container' style={{color:'black',padding:'100px'}}><h4 style={{fontSize:'40px',fontWeight:'350'}}>Choose store from {localStorage.getItem('selectedservice')}</h4>
        </div>
        </div>
      <div className='container'>
           <div className='cards' >  
            {
              filter.map((stores,i)=>{
                const del=()=>{
                  axios.delete(`http://localhost:5000/getstore?_id=${stores}`)
                }

                return(
                  <div key={i} style={{width:'500px'}}>
                  <div >
                  <div style={{boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px',display:'flex',flexWrap:'wrap',height:'200px',borderRadius:'10px',margin:'10px',overflow:'hidden'}}>
                            <div >
                            <img src={stores.img_url} style={{width:'200px',height:'200px',overflow:'hidden',objectFit:'cover'}}/>
                            </div>
                            <div style={{display:'inline-block',textAlign:'center'}}>                            
                            <h4  style={{fontSize:'16 px'}}>{stores.title}</h4>
                                <h6>{stores.description}</h6>
                                <Link to={'/admin/editidvstore/'+stores._id}><button style={{margin:'10px',cursor: 'pointer',fontSize: '14px',color: 'rgb(255, 255, 255)',background: 'rgb(255, 102, 102)',padding: '8px 20px',borderRadius: '30px',fontWeight: 'bold'}}>Edit</button></Link>
                                <button onClick={()=>{
                                  console.log(stores._id)
                                  setTemp(stores._id)
                                  axios.delete(`http://localhost:5000/getstore?_id=${stores._id}`)
                                }} style={{margin:'10px',cursor: 'pointer',fontSize: '14px',color: 'rgb(255, 255, 255)',background: 'rgb(255, 102, 102)',padding: '8px 20px',borderRadius: '30px',fontWeight: 'bold'}}>Delete</button>
                            </div>
                            </div>
                  </div>
                  </div>
                )
              })
            }
        </div>
        </div>
        </div>
    )
}

export default EditStore
