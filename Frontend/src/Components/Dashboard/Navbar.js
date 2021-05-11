import React, {useState} from 'react';
import axios from 'axios'
import Modal from 'react-modal';
import './Navbar.css';
import LocationForm from './LocationForm';

Modal.setAppElement('#root')
const Navbar = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [ loc, setLoc] = useState('Set Location')

    return (    
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img className="brand_img" src="https://resources.dunzo.com/web-assets/prod/_next/static/images/logo-4d2d81aefcf296bc100d9edc114c2ea5.png"/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" href="#" onClick={() => setModalIsOpen(true)}>
                                <i className="fas fa-map-marker-alt balloon"></i>&nbsp;&nbsp;{loc}&nbsp;<i className="fas fa-angle-down arrow"></i>
                                </a>
                                <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                                    <LocationForm changeLoc={loc => setLoc(loc)} onChange={() => null} />
                                </Modal>
                            </li>
                            <li className="nav-item gs">
                                <button className="btn btn-primary gs_btn" onClick={async() => {
                                    const result = await axios(`http://localhost:5000/getloc/?name=${loc}`)
                                    console.log(result.data[0]) 
                                    const available_services = result.data[0]
                                    await props.changeservices(JSON.parse(available_services.available_services))
                                    console.log(available_services.available_services)
                                    props.changeLoc(loc)}}>Get Services</button>
                            </li>
                            <li className="nav-item dfp">
                                <a className="nav-link active" href="#">Dunzo for Partners</a>
                            </li>
                            <li className="nav-item ndp">
                                <a className="nav-link" href="#">Need Delivery Partners?</a>
                            </li>
                            <li className="nav-item cart">
                                <a className="nav-link" href="#"><i className="fas fa-shopping-cart"></i></a>
                            </li>&nbsp;&nbsp;&nbsp;
                            <button type="button" className="btn btn-primary btn-sm sign_in_btn">Sign in</button>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

export default Navbar
