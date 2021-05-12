// import axios from 'axios';
// import React, { useState, useEffect } from 'react'
// import Cookie from "js-cookie";

// const UserMainPage = () => {
//     const [user, setUser] = useState({});

//     useEffect(() => {
//         axios.post("http://localhost:5000/auth/user", { data: {token:Cookie.get("jwt")}}).then(data=> {
//             console.log(data.data);
//             setUser(data.data);
//         })
//     }, [])
//     return (
//         <div>
//             <h1 style={{padding:"100px"}}>welcome {user.username}</h1>
//         </div>
//     )
// }

// export default UserMainPage
