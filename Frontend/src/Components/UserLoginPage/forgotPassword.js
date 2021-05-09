import React from 'react'
import forgot from './Assets/images/forgot.png'

const forgotPassword = () => {
    return (
        <div className="f-body">
            <div className="forgot-card">
                <div className="forgot-logo">
                <img src={forgot} alt=""/>
                </div>

                <div className="forgot-form">
                <h1>Forgot</h1>
                <h1>Password?</h1>
                <p>Enter the email id address associated with your account.</p><br/><br/><br/>
                <input type="email" placeholder="email" /><br/><br/>
                
                <button type="submit">NEXT</button>
                </div>
            </div>
            
        </div>
    )
}

export default forgotPassword