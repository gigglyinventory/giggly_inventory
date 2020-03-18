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
      location: "",
      name: "",
      delivered: "",
      scrap: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
    this.sendToSummary = this.sendToSummary.bind(this);
  }

  async handleSubmit(){
    this.submit();
    try{
        let url ='/endOfDay/update-materials'
        let date = this.state.date;
        let location = this.state.location;
        let name = this.state.name;
        let gain = this.state.delivered;
        let loss = this.state.scrap;
        let response = await fetch(url,
        {method: 'POST',
          body: JSON.stringify({location: location,
          name: name,
          gain: gain,
          loss: loss
        }),
        headers:{ 'Content-Type': 'application/json'}})
        let respnseJSON = await response.json()
        this.setState(respnseJSON)
        console.log('in handlesubmit the response is ',respnseJSON)
    } catch(error){
      console.log(error)
    }
  }

  sendToSummary(message){
    addMessage(message)
  }

  submit(){
    var title = "Summary"
    var date = getDate();
    this.state.date = date;
    var location = "Location: " +  this.state.location;
    var product= "Material: " + this.state.name;
    var mDelivered= "Delivered:" + this.state.delivered + ". Lost: " + this.state.scrap;
    var message= title +"\n"+ date + "\n" + location + "\n" + product+"\n"+mDelivered;
    var show = "Material | " + this.state.name + " | " + "D:" + this.state.delivered + "-" + this.state.scrap;
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
      {id: '', name: ''},
      {id: 'vin', name: 'Vinyl'},
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
      {id: '', name: ''},
      {id: 'one', name: 'Main'},
      {id: 'two', name: 'Vinyl'}
    ];

    let departmentList = department.length > 0 && department.map((item, i) => {
      return (<option key={i} value={item.name}>{item.name}</option>)
    }, this)

    return(
      <form>

        <h2 className="inventory">Deliveries</h2>
        <div className="form-inlineEnd">
        <input className="inputStyle" name= "date" value={getDate()}></input>
        </div>
        <div className="form-inlineEnd">
          <label htmlFor="name">Delivered: </label>
          <select id="name"
            name="name"
            value={this.name}
            onChange={this.handleChange}>{materialsList}</select>
          <label htmlFor="location">Department: </label>
          <select id="location"
            name="location"
            value={this.name}
            onChange={this.handleChange}>{departmentList}</select>
        </div>

        <div className="form-inlineEnd">
          <label htmlFor="delivered">Delivered: </label>
          <input className="inputStyle" id="delivered" type="text"
            name="delivered"
            value={this.name}
            defaultValue="" maxLength="5" size="8"
            onChange={this.handleChange}/>
          <label htmlFor="scrap">Scrap: </label>
          <input className="inputStyle" id="scrap" type="text"
            name="scrap"
            value={this.name}
            defaultValue="" maxLength="5" size="8"
            onChange={this.handleChange}/>
        </div>
        <div>
        <Button onClick={this.handleSubmit}>Add</Button>
        </div>
      </form>



    );
  }
}

export default Materials
