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
import Dashboard from '../Dashboard/Dashboard'
import Userdashboard from '../UserDashboard/Userdashboard'
import Final from '../Cart/Final'
import Partners from '../Dashboard/Partners'



const Routing = () => {
    return (
        <Router>
         
            <Switch>
                <Route path="/user/dashboard"><Userdashboard/></Route>
                
                <Route exact path="/admin"><Admin/></Route>
                <Route path="/admin/addservice"><CreatingServices/></Route>
                <Route path="/admin/addstore"><CreatingStore/></Route>
                <Route path="/admin/addlocation"><CreatingLocation/></Route>
                <Route path="/admin/addproducts"><CreatingProducts/></Route>
                <Route path="/admin/editservice"><EditingService/></Route>
                <Route path="/admin/editstore"><EditStore/></Route>
                <Route path="/Dashboard"><Dashboard/></Route>
                <Route path="/Cart"><Final/></Route>
                <Route path="/Partners"><Partners/></Route>
                <Route path="/admin/editidvstore/:_id" component={EditIdvStore}/>
            </Switch>
        </Router>
    )
}

export default Routing
