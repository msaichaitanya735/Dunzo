import React from 'react'
import './Decider.css'

const Decider = (props) => {
    
    const city = props.selected

    if(city.includes('Bengaluru') || city.includes('Pune') || city.includes('Gurgaon') || city.includes('Hyderabad') || city.includes('New Delhi') || city.includes('Chennai') || city.includes('Mumbai') || city.includes('Delhi')){
    return (
        <div>
            <h2>Location is serviceable</h2>
            <h2>Welcome!&nbsp;&nbsp;<i className="far fa-smile-beam"></i></h2>
            <img className="welcome_img" src="https://pbs.twimg.com/media/DzMYMRhU0AAG7A8.jpg" />
            <button className="btn btn-primary update_loc_btn" onClick={() => props.changeLoc(props.special)}>Proceed</button>
        </div>
    )}

    return(
        <div className="default">
            <img src = "https://i.pinimg.com/originals/6a/33/63/6a3363e1454f7dae31c83c4b1d0bd981.png"/>
            <h2>Location is not serviceable.&nbsp;<i className="far fa-frown"></i></h2>&nbsp;
            <h2>We are working on expanding our coverage.</h2>
        </div>
    )
}

export default Decider;