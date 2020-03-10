import React from "react";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import "./EndOfDay.css";
import EndOfDay, {getDate} from './EndOfDay';
import Output, {addMessage} from './Output'

class Vinyl extends React.Component{
  constructor(props){
    super(props);
    this.state = {
<<<<<<< HEAD
      date: "",
      vinyl: "Velcro",
      delivered: "304",
      used: "227"
=======
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
>>>>>>> 26b68e1866ffc0c947c75891b7acafa698aba27d
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
<<<<<<< HEAD
    var date = getDate();
    this.state.date = date;
    var product= "Vinyl: " + this.state.vinyl;
    var mDelivered= "Delivered:" + this.state.delivered + ". used: " + this.state.used;
    var message= title +"\n"+ date + "\n" + product+"\n"+mDelivered;
    var show = "Vinyl|" + this.state.material + "|" + "Del:" + this.state.delivered + "-" + this.state.used;
=======
    var date = "Date: " + this.state.month +"/"+ this.state.day +"/"+ this.state.year;
    var product= "Product: Design: " + this.state.design + ". Color: " + this.state.color;
    var mDelivered= "Delivered: Completed: " + this.state.delivered + ". Lost: " + this.state.deliveredLost;
    var mTrim= "Trim: Completed: " + this.state.trim + ". Lost: " + this.state.trimLost;
    var mScrew= "Screw: Completed: " + this.state.screw + ". Lost: " + this.state.screwLost;
    var mPackaing= "Packaging: Completed: " + this.state.packaging + ". Lost: " + this.state.packagingLost;
    var message= title +"\n"+ date + "\n" + product+"\n"+mDelivered+"\n"+mTrim+"\n"+mScrew+"\n"+mPackaing;
    var show = "Puppy|" + this.state.color+ "|D:"+ this.state.delivered+ "-" + this.state.deliveredLost + "|T:" + this.state.trim + "-" + this.state.trimLost + "|S:" + this.state.screw + "-" + this.state.screwLost + "|P:" + this.state.packaging + "-" + this.state.packagingLost;
>>>>>>> 26b68e1866ffc0c947c75891b7acafa698aba27d
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
    const vinyls = [
      {id: '', name: ''},
      {id: 'gen', name: 'General'},
      {id: '105', name: '1105'},
      {id: '106', name: '1106'},
      {id: 'lam', name: 'Laminat'},
    ];

    let vinylsList = vinyls.length > 0 && vinyls.map((item, i) => {
      return (<option key={i} value={item.name}>{item.name}</option>)
    }, this)

=======
    const colors = [
      {id: 'em', name: ''},
      {id: 'rd', name: 'Red'},
      {id: 'bu', name: 'Blue'},
      {id: 'bk', name: 'Black'}
    ];
    let colorsList = colors.length > 0 && colors.map((item, i) => {
      return (<option key={i} value={item.id}>{item.name}</option>)
    }, this)
>>>>>>> 26b68e1866ffc0c947c75891b7acafa698aba27d

    return(

      <div>
<<<<<<< HEAD
        <h2 class="end">Vinyls</h2>

        <div class="form-inline">
          <label for="materials">Vinyl Type: </label>
          <select id="materials"
            name="material"
            value={this.name}
            onChange={this.handleChange}>{vinylsList}</select>
          </div>

        <div class="form-inline">
          <label for="delivered">Delivered: </label>
=======
        <h2 className="inventory">Feet</h2>

        

        <div class="form-inlineEnd">
          <label for="puppy_color">Colors: </label>
          <select id="puppy_color"
            name="design"
            value={this.name}
            onChange={this.handleChange}>{colorsList}</select>
        </div>

        <div class="form-inlineEnd">
        <label style={{marginRight:"30px"}}><b></b></label>
          <label style={{marginRight:"20px"}}><b>Completed</b></label>
          <label><b>Lost</b></label>
        </div>

        <div class="form-inlineEnd">
          <label for="feet_deliv">Delivered: </label>
>>>>>>> 26b68e1866ffc0c947c75891b7acafa698aba27d
          <input id="delivered" type="text"
            name="delivered"
            value={this.name}
            defualtValue="" maxlength="5" size="8"
            onChange={this.handleChange}/>
<<<<<<< HEAD
          <label for="used">Used: </label>
          <input id="used" type="text"
            name="used"
=======
          <input id="deliveredLost" type="text"
            name="deliveredLost"
>>>>>>> 26b68e1866ffc0c947c75891b7acafa698aba27d
            value={this.name}
            defualtValue="" maxlength="5" size="8"
            onChange={this.handleChange}/>
        </div>

<<<<<<< HEAD
        <button onClick={this.submit}>Add</button>
=======
        <div class="form-inlineEnd">
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

        <div class="form-inlineEnd">
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

        <div class="form-inlineEnd">
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


>>>>>>> 26b68e1866ffc0c947c75891b7acafa698aba27d
      </div>
    );
  }
}

export default Vinyl
