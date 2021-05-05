import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";


const CreatingLocation = () => {
    const history = useHistory()
    const[name,setName]=useState('');
    const[id,setId]=useState('');
    const[state,setState]=useState('');
    const[country,setCountry]=useState('');
    const[lat,setLat]=useState('');
    const[lng,setLng]=useState('');
    const submit=()=>{
        const tkr={
            lat:lat,
            lng:lng
        }
        const newlocation={
            location_name:name,
            location_id:  id,
            state:        state,
            country:      country, 
            map:JSON.stringify(tkr)
        }
        console.log(newlocation)
        axios.post('http://localhost:5000/addlocation',newlocation).then((res)=>console.log('done'))
        history.goBack()
    }
    return (
        <div>
         <div style={{width:'99%',backgroundColor:'#171e30',height:'250px',marginTop:'50px',borderRadius:'10px',marginLeft:'10px',textAlign:'center'}}>
            <div className='container' style={{color:'white',padding:'100px'}}><h4 style={{fontSize:'40px',fontWeight:'300'}}>Creating a new location </h4>
        </div>
        </div>
        <div className='container' style={{marginTop:'10px'}}>
            <h4>Location Name: <input type='text'style={{borderRadius:'10px',width:'50vh',padding:'5px',margin:'5px'}}  onChange={(e)=>{setName(e.target.value)}}/></h4>
            <h4>Location Id: <input type='text' style={{borderRadius:'10px',width:'50vh',padding:'5px',margin:'5px'}} onChange={(e)=>{setId(e.target.value)}}/> </h4>
            <h4>State: <input type='text'style={{borderRadius:'10px',width:'50vh',padding:'5px',margin:'5px'}}  onChange={(e)=>{setState(e.target.value)}}/>    </h4>  
            <h4>country: <input type='text' style={{borderRadius:'10px',width:'50vh',padding:'5px',margin:'5px'}} onChange={(e)=>{setCountry(e.target.value)}}/></h4>
            <h4>Latitude:<input type='text'  style={{borderRadius:'10px',width:'50vh',padding:'5px',margin:'5px'}} onChange={(e)=>{setLat(e.target.value)}}/>Longitude:<input type='text'  style={{borderRadius:'10px',width:'50vh',padding:'5px',margin:'5px'}} onChange={(e)=>{setLng(e.target.value)}}/></h4>
           <button style={{ textAlign:'center', margin:'20px',cursor: 'pointer',fontSize: '14px',color: 'rgb(255, 255, 255)',background: 'rgb(0, 210, 144)',padding: '8px 20px',borderRadius: '30px',fontWeight: 'bold'}} onClick={submit}>Submit</button>
        </div>
        </div>
    )
}

export default CreatingLocation
