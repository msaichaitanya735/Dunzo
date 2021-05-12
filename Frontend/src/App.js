
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Routing from './Components/Admin/Routing';
import UserlsPage from './Components/UserLoginPage/UserlsPage'



function App() {
  return (
    <div className="App">
        <Routing/>
        <Router>
        <Route exact path="/" component={UserlsPage}/>
        <Route exact path="/login" component={UserlsPage}/>
       
        </Router>
        
    </div>
  );
}

export default App;
