import React from "react";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import "./EndOfDay.css";
import EndOfDay, {getDate} from './EndOfDay';
import Output, {addMessage} from './Output'
import {Button} from "reactstrap";

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
      velcro: "7",
      velcroLost: "4",
      stickers: "0",
      stickersLost: "3",
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
    var date = getDate();
    this.state.date = date;
    var product= "Product: Design: " + this.state.design + ". Color: " + this.state.color;
    var mBelovac= "Belovac: Completed: " + this.state.belovac + ". Lost: " + this.state.belovacLost;
    var mGuillotine= "Guillotine: Completed: " + this.state.guillotine + ". Lost: " + this.state.guillotineLost;
    var mRotozip= "RotoZip: Completed: " + this.state.rotozip + ". Lost: " + this.state.rotozipLost;
    var mSanding= "Sanding: Completed: " + this.state.sanding + ". Lost: " + this.state.sandingLost;
    var mVelcro= "Velcro: Completed: " + this.state.velcro + ". Lost: " + this.state.velcroLost;
    var mStickers= "Stickers: Completed: " + this.state.stickers + ". Lost: " + this.state.stickersLost;
    var mPackaing= "Packaging: Completed: " + this.state.packaging + ". Lost: " + this.state.packagingLost;
    var message= title +"\n"+ date + "\n" + product+"\n"+mBelovac+"\n"+mGuillotine+"\n"+mRotozip+"\n"+mSanding+"\n"+mVelcro+"\n"+mStickers+"\n"+mPackaing;
    var show = "Grill|" + this.state.design+ "|" + this.state.color + "|Bel:" + this.state.belovac +"-"+this.state.belovacLost+"|Gui:"+this.state.guillotine+"-"+this.state.guillotineLost+"|Rto:"+this.state.rotozip+"-"+this.state.rotozipLost+"|Snd:"+this.state.sanding+"-"+this.state.sandingLost+"|Vlc:"+this.state.velcro+"-"+this.state.velcroLost+"|Stk:"+this.state.stickers+"-"+this.statestickersLost+"|Pac:"+this.state.packaging+"-"+this.state.packagingLost;
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

    <div className="form-inlineEnd">
      <h2 className="inventory">Grill</h2>
      {/*I use forms for each row of inputs to unify the spacing and positions*/}

      <form method="POST" action="/endOfDay/update-grills">
        <input className="inputStyle" name= "date" value={getDate()}></input>

        <div className="form-inlineEnd">
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
        <div class="form-inlineEnd">
        <label style={{marginRight:"100px"}}></label>
          <label style={{marginRight:"150px"}}><b>Completed</b></label>
          <label><b>Lost</b></label>
        </div>


        {/*Below is the input fields for all the production steps for the Grills
          Each step is in a form that contains a label, completed, and lost*/}
          <div className="form-inlineEnd">
            <label for="grill_vac">Belovac: </label>
            <input className="inputStyle" id="grill_vac" type="text"
              name="belovac"
              value={this.name}
              defualtValue="" maxlength="5" size="8"
              onChange={this.handleChange}/>
            <input className="inputStyle" id="vac_lost" type="text"
              name="belovacLost"
              value={this.name}
              defualtValue="" maxlength="5" size="8"
              onChange={this.handleChange}/>
          </div>

          <div className="form-inlineEnd">
            <label for="grill_guil">Guillotine: </label>
            <input className="inputStyle" id="grill_guil" type="text"
              value={this.name}
              name="guillotine" defualtValue="" maxlength="10" size="8"
              onChange={this.handleChange}/>
            <input className="inputStyle" id="guil_lost" type="text"
              value={this.name}
              name="guillotineLost" defualtValue="" maxlength="10" size="8"
              onChange={this.handleChange}/>
          </div>


          <div className="form-inlineEnd">
            <label for="grill_zip">RotoZip: </label>
            <input className="inputStyle" id="grill_zip" type="text"
              value={this.name}
              name="rotozip" defualtValue="" maxlength="10" size="8"
              onChange={this.handleChange}/>
            <input className="inputStyle" id="zip_lost" type="text"
              value={this.name}
              name="rotozipLost" defualtValue="" maxlength="10" size="8"
              onChange={this.handleChange}/>
          </div>


          <div className="form-inlineEnd">
            <label for="grill_sand">Sanding: </label>
            <input className="inputStyle" id="grill_sand" type="text"
              value={this.name}
              name="sanding" defualtValue="" maxlength="10" size="8"
              onChange={this.handleChange}/>
            <input className="inputStyle" id="sand_lost" type="text"
              value={this.name}
              name="sandingLost" defualtValue="" maxlength="10" size="8"
              onChange={this.handleChange}/>
          </div>


          <div className="form-inlineEnd">
            <label for="grill_assem">Velcro: </label>
            <input className="inputStyle" id="grill_assem" type="text"
              value={this.name}
              name="velcro" defualtValue="" maxlength="10" size="8"
              onChange={this.handleChange}/>
            <input className="inputStyle" id="assem_lost" type="text"
              value={this.name}
              name="velcroLost" defualtValue="" maxlength="10" size="8"
              onChange={this.handleChange}/>
          </div>


          <div className="form-inlineEnd">
            <label for="grill_vin">Stickers: </label>
            <input className="inputStyle" id="grill_vin" type="text"
              value={this.name}
              name="stickers" defualtValue="" maxlength="10" size="8"
              onChange={this.handleChange}/>
            <input className="inputStyle" id="vin_lost" type="text"
              value={this.name}
              name="stickersLost" defualtValue="" maxlength="10" size="8"
              onChange={this.handleChange}/>
          </div>


          <div className="form-inlineEnd">
            <label for="grill_pac">Packaging: </label>
            <input className="inputStyle" id="grill_pac" type="text"
            value={this.name}
            name="packaging" defualtValue="" maxlength="10" size="8"
            onChange={this.handleChange}/>
            <input className="inputStyle" id="pac_lost" type="text"
            value={this.name}
            name="packagingLost" defualtValue="" maxlength="10" size="8"
            onChange={this.handleChange}/>
          </div>


        {/*This Button takes all information inputed form the input fields and calls the alert*/}
          <div className="form-inlineEnd">
            <Button type="submit" onClick={this.submit}>Add</Button>
          </div>
      </form>
    </div>
  );

}

}


export default Grills