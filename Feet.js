import React from "react";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import "./EndOfDay.css";
import EndOfDay, {getDate} from './EndOfDay';
import {Button} from "reactstrap"
import Output, {addMessage} from './Output'

class Feet extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      month: "07",
      day: "17",
      year: "1998",
      design: "Puppy",
      color: "Black",
      delivered: "5",
      deliveredLost: "2",
      trim: "6",
      trimLost: "1",
      screw: "4",
      screwLost: "0",
      packaging: "10",
      packagingLost: "5"
    };

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
    this.sendToSummary = this.sendToSummary.bind(this);
  }

  sendToSummary(message){
    alert(message)
    addMessage(message)
  }

  submit(){
    var title = "Summary"
    var date = "Date: " + this.state.month +"/"+ this.state.day +"/"+ this.state.year;
    var product= "Product: Design: " + this.state.design + ". Color: " + this.state.color;
    var mDelivered= "Delivered: Completed: " + this.state.delivered + ". Lost: " + this.state.deliveredLost;
    var mTrim= "Trim: Completed: " + this.state.trim + ". Lost: " + this.state.trimLost;
    var mScrew= "Screw: Completed: " + this.state.screw + ". Lost: " + this.state.screwLost;
    var mPackaing= "Packaging: Completed: " + this.state.packaging + ". Lost: " + this.state.packagingLost;
    var message= title +"\n"+ date + "\n" + product+"\n"+mDelivered+"\n"+mTrim+"\n"+mScrew+"\n"+mPackaing;
    var show = "Puppy|" + this.state.color+ "|D:"+ this.state.delivered+ "-" + this.state.deliveredLost + "|T:" + this.state.trim + "-" + this.state.trimLost + "|S:" + this.state.screw + "-" + this.state.screwLost + "|P:" + this.state.packaging + "-" + this.state.packagingLost;
    {/*This shows the alert with the summary*/}
    alert(message)
    {/*If click confirm add to database, click deny will not*/}
    {/*Will try to send data to the Output function here when confirm is selected*/}
    confirmAlert({
      title: 'Confirm Add',
      message: 'Do you want to add to inventory',
      buttons: [{label: 'Confim', onClick: () => this.sendToSummary(show)
      },{label: 'Deny'}]
    })
  }

  handleChange(evt){
    const value = evt.target.value;
    this.setState({[evt.target.name]: value});
  }

  render(){

    const colors = [
      {id: 'em', name: ''},
      {id: 'rd', name: 'Red'},
      {id: 'bu', name: 'Blue'},
      {id: 'bk', name: 'Black'}
    ];
    let colorsList = colors.length > 0 && colors.map((item, i) => {
      return (<option key={i} value={item.id}>{item.name}</option>)
    }, this)

    return(

      <div>
        <h2 className="inventory">Feet</h2>
        <form method="POST" action="/endOfDay/update-feet">
          <div className="form-inlineEnd">
            <input className="inputStyle" name= "date" value={getDate()}></input>
          </div>

          <div className="form-inlineEnd">
            <label for="puppy_color">Colors: </label>
            <select id="puppy_color"
              name="design"
              value={this.name}
              onChange={this.handleChange}>{colorsList}</select>
          </div>

          <div class="form-inlineEnd">
          <label style={{marginRight:"100px"}}></label>
            <label style={{marginRight:"150px"}}><b>Completed</b></label>
            <label><b>Lost</b></label>
          </div>
  
          <div className="form-inlineEnd">
            <label for="feet_deliv">Delivered: </label>
            <input className="inputStyle" id="delivered" type="text"
              name="delivered"
              value={this.name}
              defualtValue="" maxlength="5" size="8"
              onChange={this.handleChange}/>
            <input className="inputStyle" id="deliveredLost" type="text"
              name="deliveredLost"
              value={this.name}
              defualtValue="" maxlength="5" size="8"
              onChange={this.handleChange}/>
          </div>

          <div className="form-inlineEnd">
            <label for="feet_trim">Trim: </label>
            <input className="inputStyle" id="trim" type="text"
              name="trim"
              value={this.name}
              defualtValue="" maxlength="5" size="8"
              onChange={this.handleChange}/>
            <input className="inputStyle" id="trimLost" type="text"
              name="trimLost"
              value={this.name}
              defualtValue="" maxlength="5" size="8"
              onChange={this.handleChange}/>
          </div>

          <div className="form-inlineEnd">
            <label for="feet_screw">Screw: </label>
            <input className="inputStyle" id="screw" type="text"
              name="screw"
              value={this.name}
              defualtValue="" maxlength="5" size="8"
              onChange={this.handleChange}/>
            <input className="inputStyle" id="screwLost" type="text"
              name="screwLost"
              value={this.name}
              defualtValue="" maxlength="5" size="8"
              onChange={this.handleChange}/>
          </div>

          <div className="form-inlineEnd">
            <label for="feet_pac">Packaging: </label>
            <input className="inputStyle" id="packaging" type="text"
            name="packaging"
            value={this.name}
            defualtValue="" maxlength="5" size="8"
            onChange={this.handleChange}/>
            <input className="inputStyle" id="packagingLost" type="text"
            name="packagingLost"
            defualtValue="" maxlength="10" size="8"
            onChange={this.handleChange}/>
          </div>
          <div className="form-inlineEnd">
            <Button type="submit" onClick={this.submit}>Add</Button>
          </div>
        </form>

      </div>
    );
  }
}

export default Feet