import React, {useState} from 'react';
import ServiceDisplay from './ServiceDisplay';
import Navbar from './Navbar';
import TopPicks from './TopPicks';
import PhoneApp from './PhoneApp';
import Footer from './Footer';
import './Dashboard.css';


const Dashboard = () => {
    const [ loc, setLoc] = useState('')
    const [availservices, setAvailservices] = useState([]) 
    
    console.log(availservices)

  return (
    <div>
      <Navbar changeservices={availservices => setAvailservices(availservices)}  changeLoc={loc => setLoc(loc)} />
      <br/>
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
