import React from "react";
import {Button} from "reactstrap";
import EndOfDay, {getDate} from './EndOfDay';
import "./EndOfDay.css"

var entries = [];

class Output extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      grill:{
        design:'',
        color:'',
        bel:'',
        belL:'',
        gul:'',
        gulL:'',
        rot:'',
        rotL:'',
        san:'',
        sanL:'',
        vlc:'',
        vlcL:'',
        stk:'',
        stkL:'',
        pac:'',
        pacL:''
      },
      feet:{
        color:'',
        del:'',
        delL:'',
        trm:'',
        trmL:'',
        srw:'',
        srwL:'',
        pac:'',
        pacL:''
      },
      skins:{
        design:'',
        type:'',
        prt:'',
        prtL:'',
        cut:'',
        cutL:'',
        pac:'',
        pacL:''
      },
      material:{
        item:'',
        dlv:'',
        dlvL:''
      }
    }
    this.changeStateFeet = this.changeStateFeet.bind(this);
    this.changeStateGrill = this.changeStateGrill.bind(this);
    this.changeStateSkins = this.changeStateSkins.bind(this);
    this.changeStateMaterials = this.changeStateMaterials.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.workSubmit = this.workSubmit.bind(this);
    this.clearHandler = this.clearHandler.bind(this);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  };

  forceUpdateHandler(){
    //alert("updating");
      this.workSubmit();
      this.forceUpdate();
  };
  clearHandler(){
    entries = [];
    this.forceUpdate();

  }

  changeStateGrill(element){

  };
  changeStateFeet(element){

  };

  changeStateSkins(element){
    var peices = element.split("|");
    var r = /[:-]+/;
    for(var i =0; i < peices.length; i++){
      var section = peices[i].split(r);
      if(section.length == 3){
        alert(section[0])
      }
    }


  };
  changeStateMaterials(element){

  };

  workSubmit(){
    for(var i = 0; i < entries.length; i++){
      var element = entries[i];
      var peices = element.split("|");

      if(peices[0] == "Grills"){
        this.changeStateGrill(element);
      }else if(peices[0] == "Feet"){
        this.changeStateFeet(element);
      }else if(peices[0] == "Skins"){
        this.changeStateSkins(element);
      }else if(peices[0] == "Materials"){
        this.changeStateMaterials(element);
      }
    }
  }

  handleSubmit = (event) =>{
    alert("Submit");
      this.workSubmit();
  }





  render(){
    return(
      //entries.push("tesing"),

      <div>
      <div>
        <Button onClick={this.forceUpdateHandler}>View</Button>
      </div>
      <div class="final-display">
          <ul class="elements">
            {entries.map((value, index) => {
              return <li key={index}>{value}</li>
            })}
          </ul>

      </div>
      <br />
      <Button onClick={this.clearHandler}>Clear</Button>

      <form method="POST" action="/endOfDay/rollback-All">
      <Button type="submit">Revert</Button>
      </form>
      </div>

    );
  }
}

export function addMessage(msg){
  var value = msg;

  entries.push(msg);
}

export default Output
