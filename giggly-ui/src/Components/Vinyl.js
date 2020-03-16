import React from "react";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import "./EndOfDay.css";
import {Button} from "reactstrap";
import EndOfDay, {getDate} from './EndOfDay';
import Output, {addMessage} from './Output'

class Vinyl extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      date: "",
      vinyl: "",
      delivered: "0",
      used: "0"
    };

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
    this.sendToSummary = this.sendToSummary.bind(this);
  }

  sendToSummary(message){
    addMessage(message)
  }

  submit(){
    var title = "Summary";
    var date = getDate();
    this.state.date = date;
    var product= "Vinyl: " + this.state.vinyl;
    var mDelivered= "Delivered:" + this.state.delivered + ". used: " + this.state.used;
    var message= title +"\n"+ date + "\n" + product+"\n"+mDelivered;
    var show = "Vinyl | " + this.state.material + " | " + "Del:" + this.state.delivered + "-" + this.state.used;
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

<<<<<<< HEAD
    const colors = [
      {id: 'em', name: 'Select'},
      {id: 'rd', name: 'Red'},
      {id: 'bu', name: 'Blue'},
      {id: 'bk', name: 'Black'}
=======
    const vinyls = [
      {id: '', name: ''},
      {id: 'gen', name: 'General'},
      {id: '105', name: '1105'},
      {id: '106', name: '1106'},
      {id: 'lam', name: 'Laminat'},
>>>>>>> gigglyinventory-master
    ];

    let vinylsList = vinyls.length > 0 && vinyls.map((item, i) => {
      return (<option key={i} value={item.name}>{item.name}</option>)
    }, this)

    const globalDate = getDate();

    return(

      <div>
        <h2 class="end">Vinyls</h2>
        <div class="form-inline">
          <input className="inputStyle" name= "date" value={getDate()}></input>
        </div>
        <div class="form-inline">

          <label for="materials">Vinyl Type: </label>
          <select id="materials"
            name="material"
            value={this.name}
            onChange={this.handleChange}>{vinylsList}</select>
          </div>

        <div class="form-inline">
          <label for="delivered">Delivered: </label>
          <input id="delivered" type="text"
            name="delivered"
            value={this.name}
            defualtValue="" maxlength="5" size="8"
            onChange={this.handleChange}/>
          <label for="used">Used: </label>
          <input id="used" type="text"
            name="used"
            value={this.name}
            defualtValue="" maxlength="5" size="8"
            onChange={this.handleChange}/>
        </div>

<<<<<<< HEAD
          <form method="POST" action="/endOfDay/update-feet">        
            <div class="form-inlineEnd">
              <label for="puppy_color">Colors: </label>
              <select id="puppy_color"
                name="design"
                value={this.name}
                onChange={this.handleChange}>{colorsList}</select>
            </div>

            <div class="form-inlineEnd">
              <label style={{marginRight:"40px"}}></label>
              <label style={{marginRight:"70px"}}><b>Completed</b></label>
              <label><b>Lost</b></label>
            </div>

            <div class="form-inlineEnd">
              <label for="feet_deliv">Delivered: </label>
              <input id="delivered" type="text"
                name="delivered"
                value={this.name}
                defualtValue="" maxlength="5" size="8"
                onChange={this.handleChange}
                className="inputStyle"/>
              <input id="deliveredLost" type="text"
                name="deliveredLost"
                value={this.name}
                defualtValue="" maxlength="5" size="8"
                onChange={this.handleChange}
                className="inputStyle"/>
            </div>

            <div class="form-inlineEnd">
              <label for="feet_trim">Trim: </label>
              <input id="trim" type="text"
                name="trim"
                value={this.name}
                defualtValue="" maxlength="5" size="8"
                onChange={this.handleChange}
                className="inputStyle"/>
              <input id="trimLost" type="text"
                name="trimLost"
                value={this.name}
                defualtValue="" maxlength="5" size="8"
                onChange={this.handleChange}
                className="inputStyle"/>
            </div>

            <div class="form-inlineEnd">
              <label for="feet_screw">Screw: </label>
              <input id="screw" type="text"
                name="screw"
                value={this.name}
                defualtValue="" maxlength="5" size="8"
                onChange={this.handleChange}
                className="inputStyle"/>
              <input id="screwLost" type="text"
                name="screwLost"
                value={this.name}
                defualtValue="" maxlength="5" size="8"
                onChange={this.handleChange}
                className="inputStyle"/>
            </div>

            <div class="form-inlineEnd">
              <label for="feet_pac">Packaging: </label>
              <input id="packaging" type="text"
              name="packaging"
              value={this.name}
              defualtValue="" maxlength="5" size="8"
              onChange={this.handleChange}
              className="inputStyle"/>
              <input id="packagingLost" type="text"
              name="packagingLost"
              defualtValue="" maxlength="10" size="8"
              onChange={this.handleChange}
              className="inputStyle"/>
            </div>
              <Button onClick={this.submit}>Add</Button>
        </form>

=======
        <Button onClick={this.submit}>Add</Button>
>>>>>>> gigglyinventory-master
      </div>
    );
  }
}

export default Vinyl
