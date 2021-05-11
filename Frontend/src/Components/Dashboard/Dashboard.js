import React, {useState} from 'react';
import ServiceDisplay from './ServiceDisplay';
import Navbar from './Navbar';
import TopPicks from './TopPicks';
import PhoneApp from './PhoneApp';
import Footer from './Footer';
import './Dashboard.css';
import { Link } from 'react-router-dom';


const Dashboard = () => {
    const [ loc, setLoc] = useState('')
    const [availservices, setAvailservices] = useState([]) 

   const [clicked, setClicked] = useState(false);


    const close = e =>{
      e.preventDefault();
     
    }
    console.log(availservices)

  return (
    <div>
      <Navbar changeservices={availservices => setAvailservices(availservices)}  changeLoc={loc => setLoc(loc)} />
      <br/>
      


      <h1 style={{color:"red",margin:"auto",width:"100px",backgroundColor: "rgb(255, 255, 255)",
      height: "40px",fontWeight: "600",
      fontSize: "19px",
      letterSpacing: "0.2px",
      borderRadius: "4px",color: "rgb(234, 72, 66)",cursor:"pointer",border:"1px dashed #ccc",textAlign:"center",paddingTop:"10px"}} onClick={()=>{setClicked(!clicked)}}>Admin</h1>


      {clicked?<div>
        <div style={{marginLeft:'570px',padding:'25px 15px 15px 15px',display:'inline-block'}}>
      <Link to="/admin/editservice" style={{margin:'20px',cursor: 'pointer',fontSize: '14px',color: 'rgb(255, 255, 255)',background: 'rgb(0, 210, 144)',padding: '8px 20px',borderRadius: '30px',fontWeight: 'bold'}}><label>Edit Service</label></Link>
      </div>
      <div style={{marginLeft:'',padding:'15px',display:'inline-block'}}>
      <Link to="/admin" style={{margin:'20px',cursor: 'pointer',fontSize: '14px',color: 'rgb(255, 255, 255)',background: 'rgb(0, 210, 144)',padding: '8px 20px',borderRadius: '30px',fontWeight: 'bold'}}><label>Add service</label></Link>
      </div>
        </div>:' '}
      




      <h2 className="head_text">Essentials delivered to your doorstep</h2>
      <br/>
      {
      availservices.map((service,i) => {
        return(
          <div>
            <ServiceDisplay service={service} />
          </div>
        )
      })
      }
      <br/><br/><br/><br/>
      <h2 className="line_text">Top picks for you</h2>
      <div className="line_design">
        <div className="line1"></div>&nbsp;&nbsp;&nbsp;
        <div className="line2"></div>
      </div>
      <br/>
      <TopPicks/>
      <PhoneApp/>
      <Footer/>
    </div>
  )};

  export default Dashboard;
