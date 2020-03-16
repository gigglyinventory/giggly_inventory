import React from "react";
import ReactDOM from 'react-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import "./EndOfDay.css";
import {Button} from "reactstrap";
import EndOfDay, {getDate} from './EndOfDay';
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
      date: "",
<<<<<<< HEAD
      design: "Truck",
      color: "Black",
      belovac: "",
=======
      design: "",
      color: "",
      belovac: "0",
>>>>>>> gigglyinventory-master
      belovacLost: "0",
      guillotine: "0",
      guillotineLost: "0",
      rotozip: "0",
      rotozipLost: "0",
      sanding: "0",
      sandingLost: "0",
      velcro: "0",
      velcroLost: "0",
      stickers: "0",
      stickersLost: "0",
      packaging: "0",
      packagingLost: "0"
    };
    this.outputMessage ="Checking";
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
    this.sendToSummary = this.sendToSummary.bind(this);
  }

  sendToSummary(message){
    addMessage(message)
  }

  /*Function for when you add the information for the EndOfDay Grill information.
    you will get an alert with a summary then a confirmation popup to confirm.
    Will look into Modal for a possible replacement*/
  submit(event){
<<<<<<< HEAD
    //event.preventDefault()
=======
    event.preventDefault();
>>>>>>> gigglyinventory-master
    var title = "Summary"
    var date = getDate();
    this.state.date = date;
    var product= "Design: " + this.state.design + ". Color: " + this.state.color;
    var mBelovac= "Belovac: Completed: " + this.state.belovac + ". Lost: " + this.state.belovacLost;
    var mGuillotine= "Guillotine: Completed: " + this.state.guillotine + ". Lost: " + this.state.guillotineLost;
    var mRotozip= "RotoZip: Completed: " + this.state.rotozip + ". Lost: " + this.state.rotozipLost;
    var mSanding= "Sanding: Completed: " + this.state.sanding + ". Lost: " + this.state.sandingLost;
    var mVelcro= "Velcro: Completed: " + this.state.velcro + ". Lost: " + this.state.velcroLost;
    var mStickers= "Stickers: Completed: " + this.state.stickers + ". Lost: " + this.state.stickersLost;
<<<<<<< HEAD
    var mPackaging= "Packaging: Completed: " + this.state.packaging + ". Lost: " + this.state.packagingLost;
    var message= title +"\n"+ date + "\n" + product+"\n"+mBelovac+"\n"+mGuillotine+"\n"+mRotozip+"\n"+mSanding+"\n"+mVelcro+"\n"+mStickers+"\n"+mPackaging;
    var show = "Grill|" + this.state.design+ "|" + this.state.color + "|Bel:" + this.state.belovac +"-"+this.state.belovacLost+"|Gui:"+this.state.guillotine+"-"+this.state.guillotineLost+"|Rto:"+this.state.rotozip+"-"+this.state.rotozipLost+"|Snd:"+this.state.sanding+"-"+this.state.sandingLost+"|Vlc:"+this.state.velcro+"-"+this.state.velcroLost+"|Stk:"+this.state.stickers+"-"+this.statestickersLost+"|Pac:"+this.state.packaging+"-"+this.state.packagingLost;
=======
    var mPackaing= "Packaging: Completed: " + this.state.packaging + ". Lost: " + this.state.packagingLost;
    var message= title +"\n"+ date + "\n" + product+"\n"+mBelovac+"\n"+mGuillotine+"\n"+mRotozip+"\n"+mSanding+"\n"+mVelcro+"\n"+mStickers+"\n"+mPackaing;
    var show = "Grill | " + this.state.design+ " | " + this.state.color + " | Bel:" + this.state.belovac +"-"+this.state.belovacLost+" | Gui:"+this.state.guillotine+"-"+this.state.guillotineLost+" | Rto:"+this.state.rotozip+"-"+this.state.rotozipLost+" | Snd:"+this.state.sanding+"-"+this.state.sandingLost+" | Vlc:"+this.state.velcro+"-"+this.state.velcroLost+" | Stk:"+this.state.stickers+"-"+this.state.stickersLost+" | Pac:"+this.state.packaging+"-"+this.state.packagingLost;
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

  /*This function handles the change of values from inputs on the EndOfDay tab on the webpage*/
  handleChange(evt){
    const value = evt.target.value;
    this.setState({[evt.target.name]: value});
  }


render() {

  {/*Array of truck designs used in the drop down selects on webpage*/}
  const grillDesign = [
    {id: 'em', name: 'Select'},
    {id: 'tr', name: 'Truck'},
    {id: 'nb', name: 'Noteboard'}
  ];
  {/*Need this part for the actual select option*/}
  let grillDesignList = grillDesign.length > 0 && grillDesign.map((item, i) => {
    return (<option key={i} value={item.name}>{item.name}</option>)
  }, this)

  {/*Array of colors*/}
  const colors = [
    {id: 'em', name: 'Select'},
    {id: 'rd', name: 'Red'},
    {id: 'bu', name: 'Blue'},
    {id: 'bk', name: 'Black'}
  ];
  let colorsList = colors.length > 0 && colors.map((item, i) => {
    return (<option key={i} value={item.name}>{item.name}</option>)
  }, this)

  const globalDate = getDate();


  return (

<<<<<<< HEAD
    <div >
      <h2 className="inventory">Grill</h2>
      {/*I use forms for each row of inputs to unify the spacing and positions*/}

      <form method="POST" action="/endOfDay/update-grills" onSubmit={this.submit}>
        <div className="form-inlineEnd">
        <input className="inputStyle" name= "date" value={getDate()}></input>
        </div>
=======
    <div>
      <h2 class="end">Grill</h2>
      {/*I use forms for each row of inputs to unify the spacing and positions*/}

>>>>>>> gigglyinventory-master

      <form method="POST" action="/endOfDay/update-grills" onSubmit={this.submit}>
        <div class="form-inline">
          <input className="inputStyle" name= "date" value={getDate()}></input>
        </div>
        <div class="form-inline">
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
        </div>

        {/*Headers for the production steps*/}
<<<<<<< HEAD
        <div class="form-inlineEnd">
        <label style={{marginRight:"40px"}}></label>
          <label style={{marginRight:"70px"}}><b>Completed</b></label>
=======
        <div class="form-inline">
          <label><b>Process</b></label>
          <label><b>Completed</b></label>
>>>>>>> gigglyinventory-master
          <label><b>Lost</b></label>
        </div>

        {/*Below is the input fields for all the production steps for the Grills
          Each step is in a form that contains a label, completed, and lost*/}
          <div class="form-inline">
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
          </div>

          <div class="form-inline">
            <label for="grill_guil">Guillotine: </label>
            <input id="grill_guil" type="text"
              value={this.name}
              name="guillotine" defualtValue="" maxlength="10" size="8"
              onChange={this.handleChange}/>
            <input id="guil_lost" type="text"
              value={this.name}
              name="guillotineLost" defualtValue="" maxlength="10" size="8"
              onChange={this.handleChange}/>
          </div>


          <div class="form-inline">
            <label for="grill_zip">RotoZip: </label>
            <input id="grill_zip" type="text"
              value={this.name}
              name="rotozip" defualtValue="" maxlength="10" size="8"
              onChange={this.handleChange}/>
            <input id="zip_lost" type="text"
              value={this.name}
              name="rotozipLost" defualtValue="" maxlength="10" size="8"
              onChange={this.handleChange}/>
          </div>


          <div class="form-inline">
            <label for="grill_sand">Sanding: </label>
            <input id="grill_sand" type="text"
              value={this.name}
              name="sanding" defualtValue="" maxlength="10" size="8"
              onChange={this.handleChange}/>
            <input id="sand_lost" type="text"
              value={this.name}
              name="sandingLost" defualtValue="" maxlength="10" size="8"
              onChange={this.handleChange}/>
          </div>


          <div class="form-inline">
            <label for="grill_velcro">Velcro: </label>
            <input id="grill_velcro" type="text"
              value={this.name}
              name="velcro" defualtValue="" maxlength="10" size="8"
              onChange={this.handleChange}/>
            <input id="velcro_lost" type="text"
              value={this.name}
              name="velcroLost" defualtValue="" maxlength="10" size="8"
              onChange={this.handleChange}/>
          </div>


          <div class="form-inline">
            <label for="grill_stk">Stickers: </label>
            <input id="grill_stk" type="text"
              value={this.name}
              name="stickers" defualtValue="" maxlength="10" size="8"
              onChange={this.handleChange}/>
            <input id="stk_lost" type="text"
              value={this.name}
              name="stickersLost" defualtValue="" maxlength="10" size="8"
              onChange={this.handleChange}/>
          </div>


          <div class="form-inline">
            <label for="grill_pac">Packaging: </label>
            <input id="grill_pac" type="text"
            value={this.name}
            name="packaging" defualtValue="" maxlength="10" size="8"
            onChange={this.handleChange}/>
            <input id="pac_lost" type="text"
            value={this.name}
            name="packagingLost" defualtValue="" maxlength="10" size="8"
            onChange={this.handleChange}/>
          </div>


<<<<<<< HEAD
        {/*This Button takes all information inputed form the input fields and calls the alert*/}
        <div class ="form-inline">
        <Button type="submit">Add</Button>
        </div>

=======
        {/*This button takes all information inputed form the input fields and calls the alert*/}
          <div class="form-inline">
            <Button type="submit">Add</Button>
          </div>
>>>>>>> gigglyinventory-master
      </form>
    </div>
  );

}

}


export default Grills
