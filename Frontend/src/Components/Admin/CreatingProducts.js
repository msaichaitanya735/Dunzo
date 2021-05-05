import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router';

const CreatingProducts = () => {
    const history=useHistory()
    const [id   ,setId   ]=useState('');
    const [name ,setName ]=useState('');
    const [type,setType]=useState('');
    const [image,setImage]=useState('');
    const [subcat,setSubcat]=useState('');
    const [desc,setDesc]=useState('');
    const submit=()=>{
        const newproduct={
            id   :id   ,
            name :name ,
            type:type,
            image:image,
            subcat:subcat,
            desc:desc,
        }
        axios.post('http://localhost:5000/addproduct',newproduct)
        history.goBack()
    }
    return (
        <div>
        <div style={{width:'99%',backgroundColor:'#171e30',height:'250px',marginTop:'50px',borderRadius:'10px',marginLeft:'10px',textAlign:'center'}}>
            <div className='container' style={{color:'white',padding:'100px'}}><h4 style={{fontSize:'40px',fontWeight:'300'}}>Creating a new product </h4>
        </div>
        </div>
        <div className='container' style={{marginTop:'10px',boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px' ,textAlign:'center'}}>
            <h4>Product ID:   </h4>  <input type='text' style={{borderRadius:'10px',width:'50vh',padding:'5px',margin:'5px'}} onChange={(e)=>{setId(e.target.value)}}/>
            <h4>Product Name: </h4>  <input type='text' style={{borderRadius:'10px',width:'50vh',padding:'5px',margin:'5px'}} onChange={(e)=>{setName(e.target.value)}}/> 
            <h4>Type :        </h4>  <input type='text' style={{borderRadius:'10px',width:'50vh',padding:'5px',margin:'5px'}} onChange={(e)=>{setType(e.target.value)}}/>   
            <h4>Sub category :</h4>  <input type='text' style={{borderRadius:'10px',width:'50vh',padding:'5px',margin:'5px'}} onChange={(e)=>{setSubcat(e.target.value)}}/>    
            <h4>Description:  </h4>  <input type='text' style={{borderRadius:'10px',width:'50vh',padding:'5px',margin:'5px'}} onChange={(e)=>{setDesc(e.target.value)}}/>
            <h4>Image URL:    </h4>  <input type='text' style={{borderRadius:'10px',width:'50vh',padding:'5px',margin:'5px'}} onChange={(e)=>{setImage(e.target.value)}}/><br/>
           <button onClick={submit} style={{ textAlign:'center', margin:'20px',cursor: 'pointer',fontSize: '14px',color: 'rgb(255, 255, 255)',background: 'rgb(0, 210, 144)',padding: '8px 20px',borderRadius: '30px',fontWeight: 'bold'}}>Submit</button>
        </div>
        </div>
    )
}

export default CreatingProducts
