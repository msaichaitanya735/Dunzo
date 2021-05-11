import React from 'react';
import axios from 'axios';
import  { useState, useEffect } from 'react'
// import Cookie from "js-cookie";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Link } from 'react-router-dom';
import './App.css'
import UserOrders from './UserOrders';
import UserAddress from './UserAddress';
import UserPayment from './UserPayment';
import Modal from 'react-modal';
import './Modal.css'
import About from './About';
import Cookie from "js-cookie";
import { useHistory } from 'react-router';
   


const Userdashboard = e => {
    const history=useHistory()

   
    const [user, setUser] = useState({});
    const [required, setRequired] = useState('order');
    const [checked,setChecked]=useState(false)
    const [isModalOpen,setIsModalOpen]=useState(false)
    const [newname, setNewname]=useState('');    
    const [newphone,setNewphone]=useState('');
    const [newemail,setNewemail]=useState('');
    
    const toggleState = e => {
        setIsModalOpen(!isModalOpen)
        console.log(isModalOpen)
      };
     const Logout = e => {
         e.preventDefault();
         history.push("/login");
     }

    useEffect(async()=>{
    
        setChecked('1')
    },[user])
    
    useEffect(async()=>{
       
      
  
        axios.post("http://localhost:5000/auth/user", { data: {token:Cookie.get("jwt")}}).then(data=> {
            console.log(data.data);
            setUser(data.data);
    
        })
        console.log(user)
        setNewname(user.username)
        setNewemail(user.email)
        setNewphone(user.phonenumber)
    },[checked])

    const save=()=>{
        const upuser ={
            username:newname,
            phonenumber:newphone,
            email:newemail
        }
        console.log(upuser)
        console.log(user.id)

        axios.put(`http://localhost:5000/updateuser/?id=${user.id}`,upuser).then((res)=>console.log('profile updated'))
        toggleState()
    }
    
    return (
        <div className="user-Dash-Board">
        
            <nav>
            <img src="https://resources.dunzo.com/web-assets/prod/_next/static/images/logo-4d2d81aefcf296bc100d9edc114c2ea5.png" alt=""/>
            
            </nav>
            <div className="dash-board-body">
            <div className="dash-board-body-nav">
                 <div>
                    <span>Hi! {user.username}</span><br/>
                    <span className="user-phonenumber"> {user.phonenumber}</span>
                    <span className="user-email">{user.email}</span>
                  </div>
                   <div>

                     <button className="edit" onClick={toggleState} >Edit Profile</button>
                    {isModalOpen&&(
                    <Modal
                        isOpen={isModalOpen}
                        onClose={toggleState}
                        className="Modal"
                    >  
                    <div className="modal-content">
                    <div className="box-dialog">
                                    <div className="box-header">
                                    <h4 className="box-title" style={{textAlign:'center'}}>Edit Profile <label style={{marginLeft:'180px'}} onClick={toggleState}>
                                        x
                                    </label>    </h4>
                                    </div>
                                    <div className="box-content">
                                    <div style={{ marginTop:'100px',maxWidth: '500px',margin: 'auto',background: 'white',color:'black',padding: '10px'}}>
                                    <label>User Name</label><br/>
                                    <input style={{textAlign:'center'}} placeholder={user.username} className="edit-input-box input" type="text" onChange={(e)=>
                                    {
                                        setNewname(()=>e.target.value)
                                        console.log(newname)
                                    }}/><br/>
                                    <label>Phone Number</label><br/>
                                    <input style={{textAlign:'center'}} placeholder={user.phonenumber} className="edit-input-box input" type="text" onChange={(e)=>
                                    {
                                        setNewphone(()=>e.target.value)
                                        console.log(newphone)
                                    }}/><br/>
                                    <label>Email ID</label><br/>
                                    <input style={{textAlign:'center'}} placeholder={user.email} className="edit-input-box input" type="text" onChange={(e)=>
                                    {
                                        setNewemail(()=>e.target.value)
                                        console.log(newemail)
                                    }}/><br/>
                                    <button onClick={save} style={{marginLeft:'330px',cursor: 'pointer',fontSize: '14px',color: 'rgb(255, 255, 255)',background: 'rgb(0, 210, 144)',padding: '8px 20px',borderRadius: '30px',fontWeight: 'bold',width:'100px'}}>save</button>
                                    </div>
                                    </div>
                                    <div className="box-footer">
                                    <button  className="close" onClick={toggleState} style={{marginLeft:'-2000px',cursor: 'pointer',fontSize: '14px',color: 'rgb(255, 255, 255)',background: 'rgb(0, 210, 144)',padding: '8px 20px',borderRadius: '30px',fontWeight: 'bold',width:'100px'}}>
                                        Close
                                    </button>
                                    </div>
                                </div>
                    </div>
                    </Modal>
                )}     
                 
                 <button className="logout" onClick={Logout}>Logout</button>
            </div>                  
            </div>
          
           <div className="division-body"></div>
           <Router>
           <div className="dash-board-innerBody">
                   <div className="dash-board-details">
                       <Link to='/user/dashboard/orders'><button value="orders">Order List</button><br/>                           </Link>
                       <Link to='/user/dashboard/address'><button value="addresses" >Addresses</button><br/></Link>
                       <Link to='/user/dashboard/manage-payments'><button value="manage-payments" >Manage Payments</button><br/></Link>
                       {/* <Link to='/user/dashboard/dunzo-cash'><button value="dunzo-cash">Dunzo Cash</button><br/></Link> */}
                       <Link to='/user/dashboard/dunzo-support'><button value="dunzo-support">Support</button><br/></Link>
                       <Link to='/user/dashboard/about'><button value="about">About</button></Link>

                   </div>

                   <Switch>
                       <Route path = '/user/dashboard/orders'><UserOrders/></Route>
                       <Route path = '/user/dashboard/address'><UserAddress/></Route>
                       <Route path = '/user/dashboard/manage-payments'><UserPayment/></Route>
                       <Route path= '/user/dashboard/about'><About/></Route>
                   </Switch>

           </div>
           </Router>
            </div>
        </div>
   
    )
}



export default Userdashboard
