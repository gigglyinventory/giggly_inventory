import React from "react";
import ReactDOM from 'react-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import "./EndOfDay.css";
import Output, {addMessage} from './Output'

class Feet extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      month: "07",
      day: "17",
      year: "1998",
      print: "Camo",
      type: "2-Wheels",
      printing: "5",
      printingLost: "2",
      cutting: "6",
      cuttingLost: "1",
      wrap: "4",
      wrapLost: "0",
      packaging: "10",
      packagingLost: "5"
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
    var product= "Product: Vinyl: " + this.state.print + ". Walker: " + this.state.type;
    var mPrinting= "Printing: Completed: " + this.state.printing + ". Lost: " + this.state.printingLost;
    var mCutting= "Cutting: Completed: " + this.state.cutting + ". Lost: " + this.state.cuttingLost;
    var mWrap= "Wrap: Completed: " + this.state.wrap + ". Lost: " + this.state.wrapLost;
    var mPackaing= "Packaging: Completed: " + this.state.packaging + ". Lost: " + this.state.packagingLost;
    var message= title +"\n"+ date + "\n" + product+"\n"+mPrinting+"\n"+mCutting+"\n"+mWrap+"\n"+mPackaing;
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
      return (<option key={i} value={item.id}>{item.name}</option>)
    }, this)

    const vinyl = [
      {id: 'em', name: ''},
      {id: 'cm', name: 'Camo'},
      {id: 'fl', name: 'Flag'},
      {id: 'br', name: 'Bark'},
      {id: 'fl', name: 'Flower'},
      {id: 'wo', name: 'Wonder'}
    ];
    let vinylList = vinyl.length > 0 && vinyl.map((item, i) => {
      return (<option key={i} value={item.id}>{item.name}</option>)
    }, this)

    return(

      <div>
        <h2 class="end">Vinyl</h2>

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
          <label for="vinyl_pattern">Vinyls: </label>
          <select id="vinyl_pattern"
            name="print"
            value={this.name}
            onChange={this.handleChange}>{vinylList}</select>
          <label for="walker_type">Walker: </label>
          <select id="walker_type"
            name="type"
            value={this.name}
            onChange={this.handleChange}>{walkerList}</select>
        </form>

        <form class="form-inline">
          <label><b>Process</b></label>
          <label><b>Completed</b></label>
          <label><b>Lost</b></label>
        </form>

        <form class="form-inline">
          <label for="printing">Printing: </label>
          <input id="printing" type="text"
            name="printing"
            value={this.name}
            defualtValue="" maxlength="5" size="8"
            onChange={this.handleChange}/>
          <input id="printingLost" type="text"
            name="printingLost"
            value={this.name}
            defualtValue="" maxlength="5" size="8"
            onChange={this.handleChange}/>
        </form>

        <form class="form-inline">
          <label for="trim">Trim: </label>
          <input id="trim" type="text"
            name="cutting"
            value={this.name}
            defualtValue="" maxlength="5" size="8"
            onChange={this.handleChange}/>
          <input id="trimLost" type="text"
            name="cuttingLost"
            value={this.name}
            defualtValue="" maxlength="5" size="8"
            onChange={this.handleChange}/>
        </form>

        <form class="form-inline">
          <label for="wrap">Wrap: </label>
          <input id="wrap" type="text"
            name="wrap"
            value={this.name}
            defualtValue="" maxlength="5" size="8"
            onChange={this.handleChange}/>
          <input id="wrapLost" type="text"
            name="wrapLost"
            value={this.name}
            defualtValue="" maxlength="5" size="8"
            onChange={this.handleChange}/>
        </form>

        <form class="form-inline">
          <label for="packaging">Packaging: </label>
          <input id="packaging" type="text"
          name="packaging"
          value={this.name}
          defualtValue="" maxlength="5" size="8"
          onChange={this.handleChange}/>
          <input id="packagingLost" type="text"
          name="packagingLost"
          defualtValue="" maxlength="10" size="8"
          onChange={this.handleChange}/>
        </form>

        <button onClick={this.submit}>Add</button>
      </div>
    );
  }

}

export default Feet
