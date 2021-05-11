import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Routing from './Components/Admin/Routing';
import UserlsPage from './Components/UserLoginPage/UserlsPage'
import UserMainPage from './Components/UserLoginPage/UserMainPage'
import Fpassword from './Components/UserLoginPage/forgotPassword'
import Dashboard from './Components/Dashboard/Dashboard'

function App() {
  return (
    <div className="App">
        <Routing/>
        <Router>
        <Route path="/login" component={UserlsPage}/>
        <Route path="/user" component={UserMainPage}/>
        <Route path="/fpass" component={Fpassword}/>
        </Router>
        <Dashboard/>
    </div>
  );
}

export default App;
