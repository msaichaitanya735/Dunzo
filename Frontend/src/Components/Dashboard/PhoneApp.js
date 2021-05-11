import React from 'react'
import "./PhoneApp.css"

const PhoneApp = () => {
    return (
        <div className="phone_app_container">
            <img className="phone_img" src="https://resources.dunzo.com/web-assets/prod/_next/static/images/dunzo-app-be5ce8c58d3ad0b183757f34179879b4.png" />
            <div className="phone_app_detail">
            <p>All this from the convenience of your phone.</p>
            <p>Download the Dunzo mobile app.</p>
            <div className="google_apple_btn">
            <a href="#"><img src="https://resources.dunzo.com/web-assets/prod/_next/static/images/playstore-fe053d8036d653fed3955cd2c2a1e7e2.svg" /></a>&nbsp;&nbsp;
            <a href="#"><img src="https://resources.dunzo.com/web-assets/prod/_next/static/images/appstore-43cd8d3a00a6ed32c485951de9b3af63.svg" /></a>
            </div>
            </div>
        </div>
    )
}

export default PhoneApp;