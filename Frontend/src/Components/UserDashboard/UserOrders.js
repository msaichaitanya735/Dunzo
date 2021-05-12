import React,{useEffect,useState} from 'react'
import axios from 'axios'

const UserOrders = () => {
    const [user, setUser] = useState({});
    const [checked,setChecked]=useState(false)

    localStorage.setItem('name','chaitanya')
    useEffect(()=>{
        setTimeout(()=>{
            setChecked('1')
        },5000)  
    },[],[checked])
    // useEffect(async()=>{
    //     const name = localStorage.getItem('name')
    //     await axios.get(`http://localhost:5000/getuser?name=${name}`).then((res)=>setUser(()=>res.data[0]))
    //     console.log(user)
    // },[],[user.orders],)
    var x;
    useEffect(()=>{
        if(!(user.username)){
            setTimeout(()=>{
                const name = localStorage.getItem('name')
                axios.get(`http://localhost:5000/getuser?name=${name}`).then((res)=>{
                    setUser(res.data[0])
                })
                console.log('user.username')
            },1000)   
        }
    },[checked])
    
    
    return (
        <div>
                <div className="dash-board-display">
                   {
                   !(user.orders)?<div>
                      <img src="https://resources.dunzo.com/web-assets/prod/_next/static/images/delivery_bike-9ca8bf0483fbb3cf9af11fefb4d6272e.png" alt=""/>
                      <p>You dont have any active orders. Place your first order now!</p>
                      <div>{user.orders}</div>
                      </div>:<h1>Hey</h1>
                   }
                   </div>
        </div>
    )
}

export default UserOrders
