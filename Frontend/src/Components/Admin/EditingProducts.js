// import React, { useState } from 'react'

// const EditingProducts = ({item}) => {
//     const [unit,setUnit]=useState('');
//     const [price,setPrice]=useState('');
//     const [clicked,setClicked]=useState(false)
//     const add=()=>{

//     }
//     return (
//             <div  style={{width:'500px'}}>
//                         <div className='col' style={{}}>
//                         <div style={{boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px',display:'flex',flexWrap:'wrap',height:'200px',borderRadius:'10px',margin:'10px',overflow:'hidden'}}>
//                             <div >
//                             <img src={item.image} style={{width:'200px',height:'200px',overflow:'hidden',objectFit:'cover'}}/>
//                             </div>
//                             <div style={{display:'inline-block',textAlign:'center'}}>                            
//                             <h4>{item.name} <i className='fas fa-pen' onClick={()=>{setClicked(!clicked)}}/></h4>
//                                 <h4>Unit: <div>{item.unit}</div> <input id='uni' type='text' value={item.unit} style={{display:'none',borderRadius:'10px',width:'15vh',padding:'5px',margin:'5px'}} onChange={(e)=>{setUnit(e.target.value)}}/></h4>
//                                 <h4>Price:<input type='text' value={item.price} style={{borderRadius:'10px',width:'15vh',padding:'5px',margin:'5px'}} onChange={(e)=>{setPrice(e.target.value)}}/></h4>
//                                 <button onClick={add} style={{margin:'10px',cursor: 'pointer',fontSize: '14px',color: 'rgb(255, 255, 255)',background: 'rgb(255, 102, 102)',padding: '8px 20px',borderRadius: '30px',fontWeight: 'bold'}}>Add</button>
//                             </div>
//                             </div>
//                         </div>
//                         </div>
//     )
// }

// export default EditingProducts
