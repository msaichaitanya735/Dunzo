import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="foot">
            <div className="footer_text">
            <p>You can’t stop time, but you can save it!</p>
            <p>Living in the city, there is never enough time to shop for groceries, pick-up supplies, grab food and wade through traffic on the way back home. How about we take care of all of the above for you? What if we can give you all that time back? Send packages across the city and get everything from food, groceries, medicines and pet supplies delivered right to your doorstep. From any store to your door, just make a list and we’ll make it disappear. Just Dunzo It!</p><br/>
            <hr/>
            </div>
            <div className="footer_list">
                <div className="image">
                    <img className="dunzo_img" src="https://resources.dunzo.com/web-assets/prod/_next/static/images/logo-footer-a7423f59ce95bf41719960ee8314ff2d.png"/>
                </div>
                <div className="dunzo">
                    <h5>DUNZO</h5><br/>
                    <p><a className="text_link" href="#">About</a></p>
                    <p><a className="text_link" href="#">Jobs</a></p>
                    <p><a className="text_link" href="#">Contact</a></p>
                    <p><a className="text_link" href="#">Terms & Conditions</a></p>
                    <p><a className="text_link" href="#">Privacy Policy</a></p>
                    <p><a className="text_link" href="#">Dunzo for Partner</a></p>
                    <p><a className="text_link" href="#">Dunzo for business</a></p>
                </div>
                <div className="serviceable_cities">
                    <h5>SERVICEABLE CITIES</h5><br/>
                    <p><a className="text_link" href="#">Bangalore</a></p>
                    <p><a className="text_link" href="#">Pune</a></p>
                    <p><a className="text_link" href="#">Gurgaon</a></p>
                    <p><a className="text_link" href="#">Hyderabad</a></p>
                    <p><a className="text_link" href="#">New Delhi</a></p>
                    <p><a className="text_link" href="#">Chennai</a></p>
                    <p><a className="text_link" href="#">Mumbai</a></p>
                </div>
                <div className="get_in_touch">
                    <h5>GET IN TOUCH</h5><br/>
                    <p><a className="text_link" href="#">Email</a></p>
                    <p><a className="text_link" href="#">Twitter</a></p>
                    <p><a className="text_link" href="#">Facebook</a></p>
                    <p><a className="text_link" href="#">Instagram</a></p>
                    <p><a className="text_link" href="#">Linkedin</a></p>
                </div>
                <div>
                    <img className="dunzo_man_img" src="https://resources.dunzo.com/web-assets/prod/_next/static/images/footer-mascot-37512998a23e1abed75aa6c883d8f0a1.png"/>
                </div>
            </div>
        </div>
    )
}

export default Footer;