import React from "react";
import ReactDOM from 'react-dom';
import "./EndOfDay.css"

var entries = new Array;

class Output extends React.Component{
  constructor(props){
    super(props);

  }



  render(){

    return(
      <div>
        <ul>Testing
          {entries.map((value, index) => {
            return <li key={index}>{value}</li>
          })}
        </ul>
      </div>
    );
  }
}

export function addMessage(msg){
  alert("Ta da: " + msg)
  entries.push(msg);
}
//module.exports = addMessage

export default Output
