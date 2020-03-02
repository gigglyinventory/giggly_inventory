import React from "react";
import ReactDOM from 'react-dom';
import "./EndOfDay.css"

var entries = ["First step", "Second step"];

class Output extends React.Component{
  constructor(props){
    super(props);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  };

  forceUpdateHandler(){
      this.forceUpdate();
  };


  render(){
    return(
      //entries.push("tesing"),
      <div>
        <button onClick={
          this.forceUpdateHandler
        }>View</button>
        <ul class="elements">
          {entries.map((value, index) => {
            return <li key={index}>{value}</li>
          })}
        </ul>
      </div>
    );
  }
}

//ReactDOM.render(add, document.getElementById('root'));
export function addMessage(msg){
  var value = msg;

  entries.push(msg);

}
//module.exports = addMessage

export default Output
