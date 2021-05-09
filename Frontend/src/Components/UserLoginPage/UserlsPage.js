import React from 'react'
import axios from "axios";
import "./App.css";
import Cookie from "js-cookie";
import {Link} from "react-router-dom";
import slide1 from "./Assets/images/g1.PNG"
import slide2 from "./Assets/images/g2.PNG"
import slide3 from "./Assets/images/g3.PNG"

import { useState} from "react";

const UserlsPage = props => {
    const [userData, setUserData] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    const onClickHeader = () =>{
      setIsOpen(!isOpen)
    }
const handleChange = e =>{
  setUserData({...userData, [e.target.name]:e.target.value});
};
const handleLogin = async e => {
  e.preventDefault();
  const response = await axios.post("http://localhost:5000/auth/login", { data: userData});
  
  if (response.data.token) {
      Cookie.set("jwt",response.data.token);
      console.log(response.data.token)
      props.history.push("/user");
  }
  
  
}
const handleSignup = async e => {
  e.preventDefault();

  const response = await axios.post("http://localhost:5000/auth/signup", { data: userData});
  console.log(response.data)
  alert(response.data)
 
  
};
const generatePassword = e =>{
  e.preventDefault();
  let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQSTUVWXYZ!@#$%^&*()_+<>?:{}[]";
  let generatePassword = 16;
  let password = "";

  for (let i=0;i<generatePassword;i++){
    let randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber,randomNumber+1);
  }
  document.getElementById("password").value = password;
} 
    return (
        <div className="User-Login-Page">
        <marquee direction = "right"><img src="https://images.assettype.com/fortuneindia%2F2019-10%2Fa64a3bee-17dd-4619-b136-409a6216946f%2FDunzo___scooter.png?rect=44,0,823,463&w=1250&q=60" /></marquee>
        <div className="User-LS-Card">
               <div className="User-LS-Card-Inside">
                     <div className="User-LS-Logo">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Dunzo_Logo.svg/1200px-Dunzo_Logo.svg.png" alt=""/>
                     </div>
                     <div>
                     <form action=""   onChange={handleChange} className="form-r">
                    <div className="User-Login">
                     
                     <h1 style={{color:"#333"}}>Login</h1>
                     <div className="Login">
                     <input type="text" name="username"  required />
                     <span></span>
                     <label>Username</label>
                     </div>
                     <div className="Login">
                     <input type="password" name="password"  required />
                     <span></span>
                     <label>password</label>
                     </div>
                     <Link to="/fpass">
                     <div className="f-password"><p>Forgot Password?</p></div>
                     </Link>
                     <button className="login-btn" onClick={handleLogin}>Login</button>
                     <div className="signup-link">Not a member? <a href="#"  onClick={onClickHeader} >Signup</a> 
                     </div>
                     </div>

                 <div className={`User-SignUp ${isOpen ? '':'User-SignUp-Active'}`}>
                 
                 <h1 style={{color:"#333"}}>SignUp</h1>
                 <div className="signup">
                 <input type="text" name="username" required />
                 <span></span>
                 <label>Username</label>
                 </div>
                 <div className="signup">
                 <input type="password" name="password" required />
                 <span></span>
                 <label>password</label>
                 </div>
                 <div className=" cp-btn">
                 <input type="text" id="password" required />&nbsp;
                 <span onClick={generatePassword}>create password</span>
                 </div>
                 <div className="signup">
                 <input type="email" name="email" required />
                 <span></span>
                 <label>email</label>
                 </div>
                 <div className="signup">
                 <input type="phonenumber" name="phonenumber" required />
                 <span></span>
                 <label>phone number</label>
                 </div>
                 <button className="login-btn"  type="submit" onClick={handleSignup}>SignUp</button>
                 
                 <span className="login-link"> <a href="#" onClick={onClickHeader} >Login</a> </span>
                 
                 </div>
                 </form>
                 </div>
               </div>
               <div className="User-LS-img">
              
               <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src={slide1} className=" w-75" />
                      </div>
                      <div class="carousel-item">
                        <img src={slide2} className=" w-75" />
                      </div>
                      <div class="carousel-item">
                        <img src={slide3} className=" w-75" />
                      </div>
                    </div>
                    </div>
           </div>
          </div>
    
   
        </div>
    )
}

export default UserlsPage
