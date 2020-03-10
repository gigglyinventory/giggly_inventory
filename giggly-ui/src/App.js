import React from 'react';
import TabContent from "./Components/TabContent"
import Login from "./Components/Login"
import InventoryTable from "./Components/InventoryTable"
import Sales from "./Components/Sales"
import Production from "./Components/Production"
import Admin from "./Components/Admin"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import EndOfDay from './Components/EndOfDay';
import 'bootstrap/dist/css/bootstrap.min.css';
let loginGate = require('./login-gate');
sessionStorage.setItem('loggedIn', 'false')
class App extends React.Component{
  constructor(){
    super()
    this.loggedIn = sessionStorage.getItem('loggedIn') === true;
  }
/*This is where it starts by calling TabContent.js in Components*/
  render(){
    if (!this.loggedIn){
      return(
        <Router>
        <div className="App">
            <TabContent />
            <Switch>
              {/*<Route path="/" exact component={Login}/>*/}
              <Route path="/InventoryTable" component={InventoryTable}/>
              <Route path="/Sales" component={Sales}/>
              <Route path="/Production" component={Production}/>
              <Route path="/EndOfDay" component={EndOfDay}/>
              <Route path="/Admin" component={Admin}/>
            </Switch>
          </div>
      </Router>
    );
    } else {
      return(
        //login page
        <Login/>
      );
    }
    
  }
}




export default App;
