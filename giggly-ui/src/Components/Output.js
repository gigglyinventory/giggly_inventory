import React from "react";
import {Button} from "reactstrap";
import EndOfDay, {getDate} from './EndOfDay';
import "./EndOfDay.css"

var entries = [];

class Output extends React.Component{
  constructor(props){
    super(props);

    this.clearHandler = this.clearHandler.bind(this);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  };

  forceUpdateHandler(){
    //alert("updating");
      this.forceUpdate();
  };
  clearHandler(){
    entries = [];
    this.forceUpdate();

  }






  render(){
    return(
      //entries.push("tesing"),

      <div>
      <div>
        <Button onClick={this.forceUpdateHandler}>View</Button>
      </div>
      <div className="final-display">
          <ul className="elements">
            {entries.map((value, index) => {
              return <li key={index}>{value}</li>
            })}
          </ul>

      </div>
      <br />
      <Button onClick={this.clearHandler}>Clear</Button>

      <form method="POST" action="/endOfDay/rollback-All">
      <Button type="submit">Revert</Button>
      </form>
      </div>

    );
  }
}

export function addMessage(msg){
  var value = msg;

  entries.push(msg);
}

export default Output
