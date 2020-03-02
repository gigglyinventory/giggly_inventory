import React from "react";
import ReactDOM from 'react-dom';
import "./EndOfDay.css"

var entries = ["First step", "Second step"];

class Output extends React.Component{
  constructor(props){
    super(props);

  }

  render(){

    return(
      //entries.push("tesing"),
      display()

    );
  }
}

function display(){
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

export function addMessage(msg){
  var value = msg;

  entries.push("getting here");
  console.log(entries);
  return(
    alert("Ta da: " + msg)
  );
}
//module.exports = addMessage

export default Output
