import React, {useState,useEffect} from 'react';
import axios from 'axios';
import './ServiceDisplay.css';

const ServiceDisplay = (props) => {
    const [serviceloc, setServiceloc] = useState([])
    const [checked,setChecked]=useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            setChecked('1')
        },500)    
    },[])

    useEffect(async() => {
         axios(`http://localhost:5000/getlocservices/?title=${props.service}`)
        .then((res) => setServiceloc(() => res.data[0]))
    }, [checked])

    if(serviceloc){
    return (
        <div>
            <div className="g_container">
            <div className="services">
            <div className="card-body">
                <img src={serviceloc.img_url} className="card-img-top" alt="..."/>
                <p className="card-text">{serviceloc.description}</p>
            </div>
            </div>
            </div>
        </div>
    )}

    return(
        <div>
        </div>
    )
    
}

export default ServiceDisplay;
