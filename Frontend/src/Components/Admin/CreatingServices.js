import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";



const CreatingServices = () => {
    const [title,setTitle]=useState('');
    const [img,setImg]= useState('');
    const [desc,setDesc]=useState('');
    const history = useHistory();
    const [error,setError]=useState(0);


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
        <div>
            <div style={{width:'99%',backgroundColor:'#171e30',height:'250px',marginTop:'50px',borderRadius:'10px',marginLeft:'10px',textAlign:'center'}}>
            <div className='container' style={{color:'white',padding:'100px'}}><h4 style={{fontSize:'40px',fontWeight:'300'}}>Creating New Service </h4>
        </div>
        </div>
        <div className='container' style={{marginTop:'10px',boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px' ,textAlign:'center'}}>
            <h4>Service Title:   </h4>  <input type='text' style={{borderRadius:'10px',width:'50vh',padding:'5px',margin:'5px'}}  onChange={(e)=>{
                if (e.target.value === null || e.target.value === "") {
                setError(0);
                } else {
                var regExp = /^[a-zA-Z ]{5,30}$/;
                if (!regExp.test(e.target.value)) {
                setError(0);
      } else {
        setError(error+1);
      }
    }
                setTitle(e.target.value)
                }}/>
            <h4>Image: </h4>  <input type='text' style={{borderRadius:'10px',width:'50vh',padding:'5px',margin:'5px'}} onChange={(e)=>{
                if (e.target.value === null || e.target.value === "") {
                setError(0);
                } else {
                var regExp = /^[a-zA-Z ]{5,30}$/;
                if (!regExp.test(e.target.value)) {
                setError(0);
      } else {
        setError(error+1);
      }
    }
    setImg(e.target.value)}}/> 
            <h4>Description :        </h4>  <input type='text' style={{borderRadius:'10px',width:'50vh',padding:'5px',margin:'5px'}} onChange={(e)=>{setDesc(e.target.value)}}/>   
           <br/>
           <button onClick={submit} style={{ textAlign:'center', margin:'20px',cursor: 'pointer',fontSize: '14px',color: 'rgb(255, 255, 255)',background: 'rgb(0, 210, 144)',padding: '8px 20px',borderRadius: '30px',fontWeight: 'bold'}}>Submit</button>  
        </div>
        </div>
    )
}

export default CreatingServices
