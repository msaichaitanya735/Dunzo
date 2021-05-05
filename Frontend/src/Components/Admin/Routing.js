import React from 'react'
import {BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom'
import Admin from './Admin'
import CreatingLocation from './CreatingLocation'
import CreatingProducts from './CreatingProducts'
import CreatingServices from './CreatingServices'
import CreatingStore from './CreatingStore'
import EditIdvStore from './EditIdvStore'
import EditingService from './EditingService'
import EditStore from './EditStore'


const Routing = () => {
    return (
        <Router>
            <div style={{backgroundColor:'white', width:'100%',boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',height:'50px',marginTop:'-2px',position:'fixed',top:'0',zIndex:'5'}}>
            <div style={{marginTop:'2px',display:'flex',justifyContent:'flex-end'}}>
            <div style={{marginLeft:'',padding:'15px',display:'inline-block'}}>
            <Link to="/admin/editservice" style={{margin:'20px',cursor: 'pointer',fontSize: '14px',color: 'rgb(255, 255, 255)',background: 'rgb(0, 210, 144)',padding: '8px 20px',borderRadius: '30px',fontWeight: 'bold'}}><label>Edit Service</label></Link>
            </div>
            <div style={{marginLeft:'',padding:'15px',display:'inline-block'}}>
            <Link to="/admin" style={{margin:'20px',cursor: 'pointer',fontSize: '14px',color: 'rgb(255, 255, 255)',background: 'rgb(0, 210, 144)',padding: '8px 20px',borderRadius: '30px',fontWeight: 'bold'}}><label>Add service</label></Link>
            </div>
            
            </div>
            </div>
            <Switch>
                <Route exact path="/admin"><Admin/></Route>
                <Route path="/admin/addservice"><CreatingServices/></Route>
                <Route path="/admin/addstore"><CreatingStore/></Route>
                <Route path="/admin/addlocation"><CreatingLocation/></Route>
                <Route path="/admin/addproducts"><CreatingProducts/></Route>
                <Route path="/admin/editservice"><EditingService/></Route>
                <Route path="/admin/editstore"><EditStore/></Route>
                <Route path="/admin/editidvstore/:_id" component={EditIdvStore}/>
            </Switch>
        </Router>
    )
}

export default Routing
