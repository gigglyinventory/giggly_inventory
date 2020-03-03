import React from 'react';
import 'react-tabs/style/react-tabs.css';
import TabContent from "./Components/TabContent"

class App extends React.Component{
  constructor(){
    super()
  }
/*This is where it starts by calling TabContent.js in Components*/
  render(){
    return(
      <TabContent />
    );
  }
}



export default App;
