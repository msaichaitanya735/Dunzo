import React, { useState,useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const EditingService = () => {
    const [services,setServices]=useState([]);
    const [selectedservice,setSelectedserrvice]=useState('')
    useEffect(()=>{
        axios.get('http://localhost:5000/getservices').then((res)=>setServices(res.data))
    })
    const changed=(e)=>{
        setSelectedserrvice(e.target.value)        
    }

    return (
        <div>
        <div style={{width:'99%',backgroundColor:'rgb(239, 127, 67)',height:'250px',marginTop:'50px',borderRadius:'10px',marginLeft:'10px',textAlign:'center'}}>
            <div className='container' style={{color:'black',padding:'100px'}}><h4 style={{fontSize:'40px',fontWeight:'350'}}>Choose the type of Service</h4>
        </div>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
       <div className='' style={{ borderRadius:'30px',textAlign:'center'}}>
           {
               services.map((details,i)=>{return(
                   <div>
                   <Link to='/admin/editstore'><div key={i} style={{height:'40px',width:'500px',margin:'20px',boxShadow: ' rgba(0, 0, 0, 0.24) 0px 3px 8px', borderRadius:'20px'}} onClick={()=>{localStorage.setItem('selectedservice',details.service_title)}}>
                   {/* <input type="radio" id={details.service_title} name="service" value={details.service_title} onChange={(e)=>changed(e)}/> */}
                    {/* <label >{details.service_title}</label> */}
                    <h4 style={{alignItems:'center',padding:'10px'}}>{details.service_title}  </h4>
                   </div>
                   </Link>
                   </div>
               )})
           }
          
       </div>
       </div>
       </div>
    )
}

export default EditingService
