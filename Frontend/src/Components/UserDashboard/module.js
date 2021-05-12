// import React,{useState} from 'react'
// import Modal from 'react-modal'
// import { useHistory } from "react-router-dom";


// const Module=()=>{
//     const history = useHistory();
//     const [modalShow,setModalShow]=useState(true)
//     return(
//         <Modal style={{
//             overlay: {
//               position: 'fixed',
//               top: 0,
//               left: 0,
//               right: 0,
//               bottom: 0,
//               backgroundColor: 'rgba(255, 255, 255, 0.75)'
//             },
//             content: {
//     top: '35%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     width: '30%',
//     transform: 'translate(-40%, -10%)',
//   },
//           }}
//             isOpen={modalShow}
//             aria={{
//                 labelledby: "heading",
//                 describedby: "full_description"
//             }}>
//             <h1 id="heading">Edit Profile</h1>
//             <div id="full_description">
//             hello
//                 <button onClick={()=>{
                    
//                     setModalShow(false)
//                     history.push('/user/dashboard')
//                     }} style={{color:'white',marginTop:"10px",marginLeft:"46%"}}>Close</button>
          
//             </div>
//             </Modal>
//     ) 
// }
// export default Module