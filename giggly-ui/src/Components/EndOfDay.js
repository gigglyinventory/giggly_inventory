import React from "react";
import Grills from "./Grills"
import Feet from "./Feet"
import Skins from "./Skins"
import Output from "./Output"
import Materials from "./Materials"
import Vinyl from "./Vinyl"
import "./EndOfDay.css"

{/*Will be moving the bulk of of EndOfDay to their own .js file.
  will be creating Deliveries.js, Feet.js, Vinyls.js.
  Plans for Sales.js but don't know how to implement yet*/}
var date = "";

class EndOfDay extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      submitDate: ""
    };
    this.updateDate = this.updateDate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  updateDate(value){
    date = value;
  }
  handleChange(evt){
    const value = evt.target.value;

    this.setState({value});
    this.updateDate(value);
  }

  render(){
    return(
      <div className="endOfDayStyle">
        
        <div className="form-inlineEnd">
          <label>Date: </label>
          <input className="calender" type="date" name="submitDate" value={this.name} onChange={this.handleChange}></input>
        </div>

        <div className="top">
          <div className="sections">
            <div>
              <Grills />
            </div>
            <div>
              <Feet />
            </div>

            {/*Will place in a dive then make it function just like Grills.js*/}
            <div>
              <Skins />
            </div>
            <div>
              <Materials />
            </div>
            <div>
              <Vinyl />
            </div>
          </div>
          {/*Will be adding Deliveries and Sales div at the bottom and both Will
            reference a .js file for the functionality.*/}
          <div class="sections">
            <Output />
          </div>
        </div>

      </div>

    );
  }

}

export function getDate(){
  var getDate = date;
  return(getDate);
}

export default EndOfDay;
