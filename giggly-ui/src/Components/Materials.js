import React from "react";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import "./EndOfDay.css";
import EndOfDay, {getDate} from './EndOfDay';
import {addMessage} from './Output'
import {Button} from "reactstrap";


class Materials extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      date: "",
      material: "",
      delivered: "0",
      deliveredLost: "0"
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
    var date = getDate();
    this.state.date = date;
    var product= "Material: " + this.state.material;
    var mDelivered= "Delivered:" + this.state.delivered + ". Lost: " + this.state.deliveredLost;
    var message= title +"\n"+ date + "\n" + product+"\n"+mDelivered;
    var show = "Material | " + this.state.material + " | " + "D:" + this.state.delivered + "-" + this.state.deliveredLost;
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

    const rawMaterials = [
      {id: '', name: 'Select'},
      {id: 'grd', name: 'Grill Plastic Red'},
      {id: 'gbu', name: 'Grill Plastic Blue'},
      {id: 'gbk', name: 'Grill Plastic Black'},
      {id: 'prd', name: 'Puppy Feet Red'},
      {id: 'pbu', name: 'Puppy Feet Blue'},
      {id: 'pbk', name: 'Puppy Feet Black'},
      {id: 'w2w', name: 'Walker 2-Wheels'},
      {id: 'w4w', name: 'Walker 4-heels'},
      {id: 'grm', name: 'Grommets'},
      {id: 'vlc', name: 'Velcro'},
      {id: 'stk', name: 'Grill Stickers'},
      {id: 'nbs', name: 'Noteboard Sticker'},
      {id: 'gbx', name: 'Grill Boxes'},
      {id: 'fcr', name: 'Feet Cores'},
      {id: 'fsw', name: 'Feet Screws'},
      {id: 'fbx', name: 'Feet Boxes'},
      {id: 'shp', name: 'Shipping Envelopes'},
      {id: 'pbg', name: 'Polybags'}
    ];

    let materialsList = rawMaterials.length > 0 && rawMaterials.map((item, i) => {
      return (<option key={i} value={item.name}>{item.name}</option>)
    }, this)

    const department = [
      {id: '', name: 'Select'},
      {id: 'one', name: 'Main'},
      {id: 'two', name: 'Vinyl'}
    ];

    let departmentList = department.length > 0 && department.map((item, i) => {
      return (<option key={i} value={item.name}>{item.name}</option>)
    }, this)

    return(

      <div>
        <h2 className="inventory">Deliveries</h2>
        <div className="form-inlineEnd">
        <input className="inputStyle" name= "date" value={getDate()}></input>
        </div>
        <div className="form-inlineEnd">
          <label for="materials">Raw materials: </label>
          <select id="materials"
            name="material"
            value={this.name}
            onChange={this.handleChange}>{materialsList}</select>
          <label for="departments">Location: </label>
          <select id="departments"
            name="department"
            value={this.name}
            onChange={this.handleChange}>{departmentList}</select>
        </div>

        <div className="form-inlineEnd">
          <label for="delivered">Delivered: </label>
          <input className="inputStyle" id="delivered" type="text"
            name="delivered"
            value={this.name}
            defualtValue="" maxlength="5" size="8"
            onChange={this.handleChange}/>
          <label for="deliveriesLost">Scrap: </label>
          <input className="inputStyle" id="deliveriesLost" type="text"
            name="deliveredLost"
            value={this.name}
            defualtValue="" maxlength="5" size="8"
            onChange={this.handleChange}/>
        </div>

        <Button onClick={this.submit}>Add</Button>


      </div>



    );
  }
}

export default Materials
