import React from "react";
import ReactDOM from 'react-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import "./EndOfDay.css";
import {Button} from "reactstrap";
import EndOfDay, {getDate} from './EndOfDay';
import Output, {addMessage} from './Output'

class Skins extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      date: "",
      print: "",
      type: "",
      printing: "0",
      printingLost: "0",
      cutting: "0",
      cuttingLost: "0",
      packaging: "0",
      packagingLost: "0"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
    this.sendToSummary = this.sendToSummary.bind(this);
  }

  async handleSubmit(){
    this.submit();
    try{
        let url ='/endOfDay/update-skins'
        let date = this.state.date;
        let print = this.state.print;
        let type = this.state.type;
        let printing = this.state.printing;
        let printingLost = this.state.printingLost;
        let cutting = this.state.cutting;
        let cuttingLost = this.state.cuttingLost;
        let packaging = this.state.packaging;
        let packagingLost = this.state.packagingLost;
        let response = await fetch(url,
        {method: 'POST',
          body: JSON.stringify({print: print,
          type: type,
          printing: printing,
          printingLost: printingLost,
          cutting: cutting,
          cuttingLost: cuttingLost,
          packaging: packaging,
          packagingLost: packagingLost
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
    var product= "Skin: " + this.state.print + ". Walker: " + this.state.type;
    var mPrinting= "Printing: Completed: " + this.state.printing + ". Lost: " + this.state.printingLost;
    var mCutting= "Cutting: Completed: " + this.state.cutting + ". Lost: " + this.state.cuttingLost;
    var mPackaing= "Packaging: Completed: " + this.state.packaging + ". Lost: " + this.state.packagingLost;
    var message= title +"\n"+ date + "\n" + product+"\n"+mPrinting+"\n"+mCutting+"\n"+mPackaing;
    var show = "Skin | " + this.state.print + " | " + this.state.type + " | Prt:" + this.state.printing + "-" + this.state.printingLost +" | Cut:" + this.state.cutting + "-" + this.state.cuttingLost + " | Pac:" + this.state.packaging + "-" + this.state.packagingLost;
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

    const walker = [
      {id: 'em', name: ''},
      {id: 'w2', name: '2-Wheels'},
      {id: 'w4', name: '4-Wheels'}
    ];

    let walkerList = walker.length > 0 && walker.map((item, i) => {
      return (<option key={i} value={item.name}>{item.name}</option>)
    }, this)

    const skin = [
      {id: 'em', name: ''},
      {id: 'cm', name: 'Camo'},
      {id: 'fl', name: 'Flag'},
      {id: 'br', name: 'Bark'},
      {id: 'fl', name: 'Flower'},
      {id: 'wo', name: 'Wonder'}
    ];
    let skinList = skin.length > 0 && skin.map((item, i) => {
      return (<option key={i} value={item.name}>{item.name}</option>)
    }, this)

    const globalDate = getDate();

    return(

      <form>
        <h2 className="invnetory">Skin</h2>
        <div className="form-inlineEnd">
          <input className="inputStyle" name= "date" value={getDate()}></input>
        </div>
        <div className="form-inlineEnd">
          <label htmlFor="skin_pattern">Skins: </label>
          <select id="skin_pattern"
            name="print"
            value={this.name}
            onChange={this.handleChange}>{skinList}</select>
          <label htmlFor="walker_type">Walker: </label>
          <select id="walker_type"
            name="type"
            value={this.name}
            onChange={this.handleChange}>{walkerList}</select>
        </div>

        <div class="form-inlineEnd">
        <label style={{marginRight:"40px"}}></label>
          <label style={{marginRight:"70px"}}><b>Completed</b></label>
          <label><b>Lost</b></label>
        </div>

        <div className="form-inlineEnd">
          <label htmlFor="printing">Printing: </label>
          <input className="inputStyle" id="printing" type="text"
            name="printing"
            value={this.name}
            defaultValue="" maxLength="5" size="8"
            onChange={this.handleChange}/>
          <input className="inputStyle" id="printingLost" type="text"
            name="printingLost"
            value={this.name}
            defaultValue="" maxLength="5" size="8"
            onChange={this.handleChange}/>
        </div>

        <div className="form-inlineEnd">
          <label htmlFor="trim">Assembly: </label>
          <input className="inputStyle" id="trim" type="text"
            name="cutting"
            value={this.name}
            defaultValue="" maxLength="5" size="8"
            onChange={this.handleChange}/>
          <input className="inputStyle" id="trimLost" type="text"
            name="cuttingLost"
            value={this.name}
            defaultValue="" maxLength="5" size="8"
            onChange={this.handleChange}/>
        </div>

        <div className="form-inlineEnd">
          <label htmlFor="packaging">Packaging: </label>
          <input className="inputStyle" id="packaging" type="text"
          name="packaging"
          value={this.name}
          defaultValue="" maxLength="5" size="8"
          onChange={this.handleChange}/>
          <input className="inputStyle" id="packagingLost" type="text"
          name="packagingLost"
          defaultValue="" maxLength="10" size="8"
          onChange={this.handleChange}/>
        </div>
        <div>
          <Button onClick={this.handleSubmit}>Add</Button>
        </div>


      </form>
    );
  }

}

export default Skins
