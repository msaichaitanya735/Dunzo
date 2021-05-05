import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";



const CreatingServices = () => {
    const [title,setTitle]=useState('');
    const [img,setImg]= useState('');
    const [desc,setDesc]=useState('');
    const history = useHistory();


    const submit=()=>{
        const newService={
            service_title:title,
            img_url:img,
            description:desc 
        }
        console.log(newService)
        axios.post('http://localhost:5000/addservice',newService)
        history.push('/admin')
    }
    return (
        <div className='container' style={{flexWrap:'wrap',width:'70vh',height:'50vh',boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px'}}>
            <div style={{height:'10vh'}}></div>
            <div>
            <label>Service Title:</label>
            <input type='text' id='title' onChange={(e)=>setTitle(e.target.value)}/><br/>
            </div>
            <div>
            <label>Image:</label>
            <input type='text'id='img' onChange={(e)=>setImg(e.target.value)}/>
            </div>
            <label>Description</label>
            <input type='text' id='description' onChange={(e)=>setDesc(e.target.value)}/>
            <button onClick={submit}> Submit </button>
        </div>
    )
}

export default CreatingServices
