import React from "react";
import ReactDOM from 'react-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import "./EndOfDay.css";
import Output, {addMessage} from './Output'

class Materials extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      month: "01",
      day: "20",
      year: "2017",
      material: "Velcro",
      delivered: "304",
      deliveredLost: "227"
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
    var product= "Material: " + this.state.material;
    var mDelivered= "Delivered:" + this.state.delivered + ". Lost: " + this.state.deliveredLost;
    var message= title +"\n"+ date + "\n" + product+"\n"+mDelivered;
    var show = "Material|" + this.state.material + "|" + "D:" + this.state.delivered + "-" + this.state.deliveredLost;
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
      return (<option key={i} value={item.id}>{item.name}</option>)
    }, this)

    return(

      <div>
        <h2 class="end">Deliveries</h2>

        <form class="inline-date">
          <label>Date: </label>
          <input type="type"
            name="month"
            value={this.name}
            placeholder="MM" maxlength="2" size="2"
            onChange={this.handleChange}/>
          <input type="type"
            name="day"
            value={this.name}
            placeholder="DD" maxlength="2" size="2"
            onChange={this.handleChange}/>
          <input type="type"
            name="year"
            value={this.name}
            placeholder="YYYY" maxlength="4" size="2"
            onChange={this.handleChange}/>
        </form>

        <form class="form-inline">
          <label for="materials">Delivered: </label>
          <select id="materials"
            name="material"
            value={this.name}
            onChange={this.handleChange}>{materialsList}</select>
        </form>

        <form class="form-inline">
          <label for="delivered">Delivered: </label>
          <input id="delivered" type="text"
            name="delivered"
            value={this.name}
            defualtValue="" maxlength="5" size="8"
            onChange={this.handleChange}/>
          <label for="deliveriesLost">Scrap: </label>
          <input id="deliveriesLost" type="text"
            name="deliveredLost"
            value={this.name}
            defualtValue="" maxlength="5" size="8"
            onChange={this.handleChange}/>
        </form>

        <button onClick={this.submit}>Add</button>


      </div>



    );
  }
}

export default Materials
