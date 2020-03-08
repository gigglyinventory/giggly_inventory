import React from 'react';
import 'react-tabs/style/react-tabs.css';
import TabContent from "./Components/TabContent";
import Login from './Components/Login';
const isAuth = require('../../react-backend/middleware/login-gate');

class App extends React.Component{
  constructor(){
    super()
  }
/*This is where it starts by calling TabContent.js in Components*/
  render(){
    if (isAuth){
      return(
        <TabContent/>
      );
    } else {
      return(
        //login page
        <Login/>
      );
    }
    
  }
}
}



export default App;
