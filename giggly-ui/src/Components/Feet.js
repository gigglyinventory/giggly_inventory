import React from "react";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import "./EndOfDay.css";
import Output, {addMessage} from './Output';
import EndOfDay, {getDate} from './EndOfDay'

class Feet extends React.Component{
  constructor(props){
    super(props);
    this.state = {
<<<<<<< HEAD
      design: "",
      color: "",
      trim: "0",
      trimLost: "0",
      assembly: "0",
      assemblyLost: "0",
=======
      date: "",
      design: "",
      color: "",
      delivered: "0",
      deliveredLost: "0",
      trim: "0",
      trimLost: "0",
      screw: "0",
      screwLost: "0",
>>>>>>> gigglyinventory-master
      packaging: "0",
      packagingLost: "0"
    };

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
    this.sendToSummary = this.sendToSummary.bind(this);
  }

  sendToSummary(message){
    addMessage(message)
  }

  submit(event){
    event.preventDefault();
    var title = "Summary"
    var date = getDate();
<<<<<<< HEAD
    var mTrim= "Trim: Completed: " + this.state.trim + ". Lost: " + this.state.trimLost;
    var mAssembly= "assembly: Completed: " + this.state.assembly + ". Lost: " + this.state.assemblyLost;
    var mPackaging= "Packaging: Completed: " + this.state.packaging + ". Lost: " + this.state.packagingLost;
    var message= title +"\n"+ date + "\n"+mTrim+"\n"+mAssembly+"\n"+mPackaging;
    var show = "Puppy|" + this.state.color+ "|T:" + this.state.trim + "-" + this.state.trimLost + "|S:" + this.state.assembly + "-" + this.state.assemblyLost + "|P:" + this.state.packaging + "-" + this.state.packagingLost;
=======
    this.state.date = date;
    var product= "Color: " + this.state.color;
    var mDelivered= "Delivered: Completed: " + this.state.delivered + ". Lost: " + this.state.deliveredLost;
    var mTrim= "Trim: Completed: " + this.state.trim + ". Lost: " + this.state.trimLost;
    var mScrew= "Screw: Completed: " + this.state.screw + ". Lost: " + this.state.screwLost;
    var mPackaing= "Packaging: Completed: " + this.state.packaging + ". Lost: " + this.state.packagingLost;
    var message= title +"\n"+ date + "\n" + product+"\n"+mDelivered+"\n"+mTrim+"\n"+mScrew+"\n"+mPackaing;
    var show = "Feet | " + this.state.color+ " | Del:"+ this.state.delivered+ "-" + this.state.deliveredLost + " | Trm:" + this.state.trim + "-" + this.state.trimLost + " | Srw:" + this.state.screw + "-" + this.state.screwLost + " | Pac:" + this.state.packaging + "-" + this.state.packagingLost;
>>>>>>> gigglyinventory-master
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
      {id: 'em', name: 'Select'},
      {id: 'Red', name: 'Red'},
      {id: 'Blue', name: 'Blue'},
      {id: 'Black', name: 'Black'}
    ];
    let colorsList = colors.length > 0 && colors.map((item, i) => {
      return (<option key={i} value={item.name}>{item.name}</option>)
    }, this)

    const globalDate = getDate();

    return(

      <div>
<<<<<<< HEAD
        <h2 className="inventory">Feet</h2>
        <form method="POST" action="/endOfDay/update-feet">
          <div className="form-inlineEnd">
            <input className="inputStyle" name= "date" value={getDate()}></input>
          </div>

          <div className="form-inlineEnd">
            <label for="puppy_color">Colors: </label>
            <select id="puppy_color"
              name="color"
              value={this.name}
              onChange={this.handleChange}>{colorsList}</select>
          </div>

          <div class="form-inlineEnd">
          <label style={{marginRight:"40px"}}></label>
            <label style={{marginRight:"70px"}}><b>Completed</b></label>
            <label><b>Lost</b></label>
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
            <label for="feet_assembly">Assembly: </label>
            <input className="inputStyle" id="assembly" type="text"
              name="assembly"
              value={this.name}
              defualtValue="" maxlength="5" size="8"
              onChange={this.handleChange}/>
            <input className="inputStyle" id="assemblyLost" type="text"
              name="assemblyLost"
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
          <Button type="submit" onClick={this.submit}>Add</Button>
        </form>
=======
      <h2 class="end">Feet</h2>
      <form>
      <div class="form-inline">
        <input className="inputStyle" name= "date" value={getDate()}></input>
      </div>
      <div class="form-inline">
        <label for="puppy_color">Colors: </label>
        <select id="puppy_color"
          name="color"
          value={this.name}
          onChange={this.handleChange}>{colorsList}</select>
      </div>

      <div class="form-inline">
        <label><b>Process</b></label>
        <label><b>Completed</b></label>
        <label><b>Lost</b></label>
      </div>

      <div class="form-inline">
        <label for="feet_deliv">Delivered: </label>
        <input id="delivered" type="text"
          name="delivered"
          value={this.name}
          defualtValue="" maxlength="5" size="8"
          onChange={this.handleChange}/>
        <input id="deliveredLost" type="text"
          name="deliveredLost"
          value={this.name}
          defualtValue="" maxlength="5" size="8"
          onChange={this.handleChange}/>
      </div>

      <div class="form-inline">
        <label for="feet_trim">Trim: </label>
        <input id="trim" type="text"
          name="trim"
          value={this.name}
          defualtValue="" maxlength="5" size="8"
          onChange={this.handleChange}/>
        <input id="trimLost" type="text"
          name="trimLost"
          value={this.name}
          defualtValue="" maxlength="5" size="8"
          onChange={this.handleChange}/>
      </div>

      <div class="form-inline">
        <label for="feet_screw">Screw: </label>
        <input id="screw" type="text"
          name="screw"
          value={this.name}
          defualtValue="" maxlength="5" size="8"
          onChange={this.handleChange}/>
        <input id="screwLost" type="text"
          name="screwLost"
          value={this.name}
          defualtValue="" maxlength="5" size="8"
          onChange={this.handleChange}/>
      </div>

      <div class="form-inline">
        <label for="feet_pac">Packaging: </label>
        <input id="packaging" type="text"
        name="packaging"
        value={this.name}
        defualtValue="" maxlength="5" size="8"
        onChange={this.handleChange}/>
        <input id="packagingLost" type="text"
        name="packagingLost"
        defualtValue="" maxlength="10" size="8"
        onChange={this.handleChange}/>
      </div>
      <div class="form-inline">
        <button onClick={this.submit}>Add</button>
      </div>
      </form>




>>>>>>> gigglyinventory-master

      </div>
    );
  }

}

export default Feet
