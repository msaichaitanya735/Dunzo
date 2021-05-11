import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Modal from 'react-modal';
import './Modal.css'

const UserAddress = () => {
    const [user, setUser] = useState({});
    const [checked,setChecked]=useState(false)
    const [isModalOpen,setIsModalOpen]=useState(false)
    const [add1,setAdd1]=useState('');
    const [add2,setAdd2]=useState('');
    const [add3,setAdd3]=useState('');
    const [add4,setAdd4]=useState('');
    const [add5,setAdd5]=useState('');
    const [locations,setLocations]=useState([])
    const [temp,setTemp]=useState('')
    localStorage.setItem('name','chaitanya')
    useEffect(()=>{
        setTimeout(()=>{
            setChecked('1')
        },5000)  
    },[],[checked])
    useEffect(()=>{
        if(!(user.username)){
            setTimeout(()=>{
                const name = localStorage.getItem('name')
                axios.get(`http://localhost:5000/getuser?name=${name}`).then((res)=>{
                    setUser(res.data[0])
                    setTemp(res.data[0].addresses)
                })
                console.log('user.username')
                console.log(user.addresses)
            },1000)   
        }
    },[checked])
    const toggleState = e => {
        setIsModalOpen(!isModalOpen)
        console.log(isModalOpen)
      };
      const save=()=>{
          if(user.addresses){
            var deliverylocations=JSON.parse(user.addresses)
          }
          else
          var deliverylocations=[];
          
        const address ={
           add1:add1,
           add2:add2,
           add3:add3, 
           add4:add4,
           add5:add5,   
        }
        deliverylocations=[...deliverylocations,(address)]
        const finaladdress={
            address:JSON.stringify(deliverylocations)
        }
        console.log(JSON.stringify(deliverylocations))
        axios.put(`http://localhost:5000/addaddress/?id=${user._id}`,finaladdress).then((res)=>console.log('profile updated'))
    }  

    return (
        <div>
              <div className="dash-board-display">
              <div onClick={toggleState} style={{cursor:'pointer', display:'flex',justifyContent:'center',alignItems:'center',border:' green 1px dashed',width:'35%',height:'100px',color:'green',textAlign:'center',verticalAlign:'middle'}}>
                  Add New Address
              </div>
             
                    {isModalOpen&&(
                    <Modal
                        isOpen={isModalOpen}
                        onClose={toggleState}
                        className="Modal"
                    >  
                    <div className="modal-content">
                    <div className="box-dialog">
                                    <div className="box-header">
                                    <h4 className="box-title">Add a new location <label style={{marginLeft:'180px'}} onClick={toggleState}>
                                        x
                                    </label></h4>
                                    </div>
                                    
                                    <div className="box-content">
                                    <div style={{ marginTop:'100px',maxWidth: '500px',margin: 'auto',background: 'white',color:'black',padding: '10px'}}>
                                    <div className='row'>
                                        <div className='col'>
                                            <label>Flat, Floor, Building Name</label><br/>
                                            <input style={{textAlign:'center'}} placeholder={'eg 2nd floor office'} className="edit-input-box input" type="text" onChange={(e)=>
                                            {
                                            setAdd1(()=>e.target.value)
                                            }}/>
                                        </div>
                                        <div className='col'>
                                            <label>How to reach</label><br/>
                                            <input style={{textAlign:'center'}} placeholder={user.phonenumber} className="edit-input-box input" type="text" onChange={(e)=>
                                            {
                                                setAdd2(()=>e.target.value)
                                            }}/><br/>
                                        </div>
                                    </div>
                                    
                                    <label>Contact Person Name</label><br/>
                                    <input style={{textAlign:'center'}} placeholder={user.phonenumber} className="edit-input-box input" type="text" onChange={(e)=>
                                    {
                                        setAdd3(()=>e.target.value)
                                    }}/><br/>
                                    <label>Contact Detail</label><br/>
                                    <input style={{textAlign:'center'}} placeholder={user.email} className="edit-input-box input" type="text" onChange={(e)=>
                                    {
                                        setAdd4(()=>e.target.value)
                                    }}/><br/>
                                    <label>Save Adress As</label><br/>
                                    <input style={{textAlign:'center'}} placeholder={user.email} className="edit-input-box input" type="text" onChange={(e)=>
                                    {
                                        setAdd5(()=>e.target.value)
                                    }}/><br/>
                                    <button onClick={save} style={{marginLeft:'320px',cursor: 'pointer',fontSize: '14px',color: 'rgb(255, 255, 255)',background: 'rgb(0, 210, 144)',padding: '8px 20px',borderRadius: '30px',fontWeight: 'bold',width:'100px'}}>save</button>
                                    </div>
                                    </div>
                                    <div className="box-footer">
                                    <button  className="close" onClick={toggleState} style={{marginLeft:'330px',cursor: 'pointer',fontSize: '14px',color: 'rgb(255, 255, 255)',background: 'rgb(0, 210, 144)',padding: '8px 20px',borderRadius: '30px',fontWeight: 'bold',width:'100px'}}>
                                        Close
                                    </button>
                                    </div>
                                </div>
                    </div>
                    </Modal>
              
                    )}


                    <div>
                    {temp}
                   {/* {   
                    locations.map((address,i)=>{
                    <div style={{cursor:'pointer', display:'flex',justifyContent:'center',alignItems:'center',border:' green 1px solid',width:'35%',height:'100px',color:'green',textAlign:'center',verticalAlign:'middle'}}>
                    {address.add3}
                    {address.add4}
                    {address.add1}
                    {address.add2}
                    {address.add5}
                    </div>
                   })} */}
                   </div>
                   </div>
        </div>
    )
}

export default UserAddress
