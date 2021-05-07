import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom'
import axios from 'axios'


const Admin = () => {
    const [services,setServices]=useState([]);
    const [selectedservice,setSelectedserrvice]=useState('')
    useEffect(()=>{
        axios.get('http://localhost:5000/getservices').then((res)=>setServices(res.data))
        // axios.get(`http://localhost:5000/getloc/?name=Kolkata`).then((res)=>console.log(res.data));
    })
    const changed=(e)=>{
        setSelectedserrvice(e.target.value)        
    }

    return (
        <div>
        <div style={{width:'99%',backgroundColor:'#171e30',height:'250px',marginTop:'50px',borderRadius:'10px',marginLeft:'10px',textAlign:'center'}}>
            <div className='container' style={{color:'white',padding:'100px'}}><h4 style={{fontSize:'40px',fontWeight:'300'}}>Choose the type of Service</h4>
        </div>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
       <div className='' style={{ borderRadius:'30px',textAlign:'center'}}>
           {
               services.map((details,i)=>{return(
                   <div>
                   <Link to='/admin/addstore'><div key={i} style={{height:'40px',width:'500px',margin:'20px',boxShadow: ' rgba(0, 0, 0, 0.24) 0px 3px 8px', borderRadius:'20px'}} onClick={()=>{localStorage.setItem('selectedservice',details.service_title)}}>
                   {/* <input type="radio" id={details.service_title} name="service" value={details.service_title} onChange={(e)=>changed(e)}/> */}
                    {/* <label >{details.service_title}</label> */}
                    <h4 style={{alignItems:'center',padding:'10px'}}>{details.service_title}  </h4>
                   </div>
                   </Link>
                   </div>
               )})
           }
           <Link to={{pathname:"/admin/addstore",
               state:{selectedservice:selectedservice} }} style={{display:selectedservice?'':'none'}} ><label style={{margin:'20px',cursor: 'pointer',fontSize: '14px',color: 'rgb(255, 255, 255)',background: 'rgb(0, 210, 144)',padding: '8px 20px',borderRadius: '30px',fontWeight: 'bold'}}>Next</label></Link>
            <Link to ="/admin/addservice" style={{margin:'20px',cursor: 'pointer',fontSize: '14px',color: 'rgb(255, 255, 255)',background: 'rgb(0, 210, 144)',padding: '8px 20px',borderRadius: '30px',fontWeight: 'bold'}}>Create a New Service</Link> 
       </div>
       </div>
       </div>
    )
}

export default Admin
