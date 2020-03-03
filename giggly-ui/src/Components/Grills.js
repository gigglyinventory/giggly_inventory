import React from "react";
import ReactDOM from 'react-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import "./EndOfDay.css";
import Output, {addMessage} from './Output'
//import * as utils from './Output.js';
//import {addMessage} from './Output.js';
//const addMessage = require("./Output").addMessage;
/*Each member of the EndOfDay.js uses the EndOfDay.css for styling.*/



class Grills extends React.Component{
  constructor(props){
    super(props);

  /*Variables for the Grills.js input. have data hardcoded for time save*/
    this.state = {
      month: "04",
      day: "30",
      year: "1996",
      design: "Truck",
      color: "Black",
      belovac: "5",
      belovacLost: "2",
      guillotine: "6",
      guillotineLost: "1",
      rotozip: "4",
      rotozipLost: "0",
      sanding: "6",
      sandingLost: "3",
      assembly: "7",
      assemblyLost: "4",
      vinyl: "0",
      vinylLost: "3",
      packaging: "10",
      packagingLost: "5"
    };
    this.outputMessage ="Checking";
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
    this.sendToSummary = this.sendToSummary.bind(this);
  }

  sendToSummary(message){
    alert(message)
    addMessage(message)
  }

  /*Function for when you add the information for the EndOfDay Grill information.
    you will get an alert with a summary then a confirmation popup to confirm.
    Will look into Modal for a possible replacement*/
  submit(){
    var title = "Summary"
    var date = "Date: " + this.state.month +"/"+ this.state.day +"/"+ this.state.year;
    var product= "Product: Design: " + this.state.design + ". Color: " + this.state.color;
    var mBelovac= "Belovac: Completed: " + this.state.belovac + ". Lost: " + this.state.belovacLost;
    var mGuillotine= "Guillotine: Completed: " + this.state.guillotine + ". Lost: " + this.state.guillotineLost;
    var mRotozip= "RotoZip: Completed: " + this.state.rotozip + ". Lost: " + this.state.rotozipLost;
    var mSanding= "Sanding: Completed: " + this.state.sanding + ". Lost: " + this.state.sandingLost;
    var mAssembly= "Assembly: Completed: " + this.state.assembly + ". Lost: " + this.state.assemblyLost;
    var mVinyl= "Vinyl: Completed: " + this.state.vinyl + ". Lost: " + this.state.vinylLost;
    var mPackaing= "Packaging: Completed: " + this.state.packaging + ". Lost: " + this.state.packagingLost;
    var message= title +"\n"+ date + "\n" + product+"\n"+mBelovac+"\n"+mGuillotine+"\n"+mRotozip+"\n"+mSanding+"\n"+mAssembly+"\n"+mVinyl+"\n"+mPackaing;
    {/*This shows the alert with the summary*/}
    alert(message)
    {/*If click confirm add to database, click deny will not*/}
    {/*Will try to send data to the Output function here when confirm is selected*/}
    confirmAlert({
      title: 'Confirm Add',
      message: 'Do you want to add to inventory',
      buttons: [{label: 'Confim', onClick: () => this.sendToSummary(message)
      },{label: 'Deny'}]
    })
  }

  /*This function handles the change of values from inputs on the EndOfDay tab on the webpage*/
  handleChange(evt){
    const value = evt.target.value;
    this.setState({[evt.target.name]: value});
  }


render() {

  {/*Array of truck designs used in the drop down selects on webpage*/}
  const grillDesign = [
    {id: 'em', name: ''},
    {id: 'tr', name: 'Truck'},
    {id: 'nb', name: 'Noteboard'}
  ];
  {/*Need this part for the actual select option*/}
  let grillDesignList = grillDesign.length > 0 && grillDesign.map((item, i) => {
    return (<option key={i} value={item.name}>{item.name}</option>)
  }, this)

  {/*Array of colors*/}
  const colors = [
    {id: 'em', name: ''},
    {id: 'rd', name: 'Red'},
    {id: 'bu', name: 'Blue'},
    {id: 'bk', name: 'Black'}
  ];
  let colorsList = colors.length > 0 && colors.map((item, i) => {
    return (<option key={i} value={item.name}>{item.name}</option>)
  }, this)


  return (

    <div>
      <h2 class="end">Grill</h2>
      {/*I use forms for each row of inputs to unify the spacing and positions*/}
      <form method="POST" action="/endOfDay">
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

        <label for="grill_design">Design: </label>
        <select id="grill_design"
          name="design"
          value={this.name}
          onChange={this.handleChange}>{grillDesignList}</select>
        <label for="grill_color">Colors: </label>
        <select id="grill_color"
          name="color"
          value={this.name}
          onChange={this.handleChange}>{colorsList}</select>
      {/*Headers for the production steps*/}
        <label><b>Process</b></label>
        <label><b>Completed</b></label>
        <label><b>Lost</b></label>
      {/*Below is the input fields for all the production steps for the Grills
        Each step is in a form that contains a label, completed, and lost*/}
        <label for="grill_vac">Belovac: </label>
        <input id="grill_vac" type="text"
          name="belovac"
          value={this.name}
          defualtValue="" maxlength="5" size="8"
          onChange={this.handleChange}/>
        <input id="vac_lost" type="text"
          name="belovacLost"
          value={this.name}
          defualtValue="" maxlength="5" size="8"
          onChange={this.handleChange}/>

        <label for="grill_guil">Guillotine: </label>
        <input id="grill_guil" type="text"
          value={this.name}
          name="guillotine" defualtValue="" maxlength="10" size="8"
          onChange={this.handleChange}/>
        <input id="guil_lost" type="text"
          value={this.name}
          name="guillotineLost" defualtValue="" maxlength="10" size="8"
          onChange={this.handleChange}/>

        <label for="grill_zip">RotoZip: </label>
        <input id="grill_zip" type="text"
          value={this.name}
          name="rotozip" defualtValue="" maxlength="10" size="8"
          onChange={this.handleChange}/>
        <input id="zip_lost" type="text"
          value={this.name}
          name="rotozipLost" defualtValue="" maxlength="10" size="8"
          onChange={this.handleChange}/>

        <label for="grill_sand">Sanding: </label>
        <input id="grill_sand" type="text"
          value={this.name}
          name="sanding" defualtValue="" maxlength="10" size="8"
          onChange={this.handleChange}/>
        <input id="sand_lost" type="text"
          value={this.name}
          name="sandingLost" defualtValue="" maxlength="10" size="8"
          onChange={this.handleChange}/>

        <label for="grill_assem">Assembly: </label>
        <input id="grill_assem" type="text"
          value={this.name}
          name="assembly" defualtValue="" maxlength="10" size="8"
          onChange={this.handleChange}/>
        <input id="assem_lost" type="text"
          value={this.name}
          name="assemblyLost" defualtValue="" maxlength="10" size="8"
          onChange={this.handleChange}/>

        <label for="grill_vin">Vinyl: </label>
        <input id="grill_vin" type="text"
          value={this.name}
          name="vinyl" defualtValue="" maxlength="10" size="8"
          onChange={this.handleChange}/>
        <input id="vin_lost" type="text"
          value={this.name}
          name="vinylLost" defualtValue="" maxlength="10" size="8"
          onChange={this.handleChange}/>

        <label for="grill_pac">Packaging: </label>
        <input id="grill_pac" type="text"
        value={this.name}
        name="packaging" defualtValue="" maxlength="10" size="8"
        onChange={this.handleChange}/>
        <input id="pac_lost" type="text"
        value={this.name}
        name="packagingLost" defualtValue="" maxlength="10" size="8"
        onChange={this.handleChange}/>

      {/*This button takes all information inputed form the input fields and calls the alert*/}
      <button type="submit" onClick={this.submit}>Add</button>
      </form>
    </div>
  );

}

}


export default Grills
