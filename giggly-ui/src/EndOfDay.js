import React from "react";
import ReactDOM from 'react-dom';
import "./EndOfDay.css"

function EndOfDay(){
    const location = [
      {id: 'em', name: ''},
      {id: 'l1', name: 'Location 1'},
      {id: 'l2', name: 'Location 2'}
    ];

    let locationList = location.length > 0 && location.map((item, i) => {
      return (<option key={i} value={item.id}>{item.name}</option>)
    }, this)

    const colors = [
      {id: 'em', name: ''},
      {id: 'rd', name: 'Red'},
      {id: 'bu', name: 'Blue'},
      {id: 'bk', name: 'Black'}
    ];
    let colorsList = colors.length > 0 && colors.map((item, i) => {
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
      <h2>Grill</h2>
      <label for="grill_color">Grill Colors: </label>
      <select id="grill_color">{colorsList}</select>
      <br />
      <br />
      <label for="enter_grill_amount">Amount: </label>
      <input id="enter_grill_amount" type="text" name="amount" defualtValue="" maxlength="10" />
      <br />
      <br />
      <label for="grill_scrap">Scrap: </label>
      <input id="grill_scrap" type="text" name="amount" defualtValue="" maxlength="10" />
      <br />
      <br />
      <label for="grill_location">Location: </label>
      <select id="grill_locaiton">{locationList}</select>
      <br />
      <br />
      <input type="submit" value="Add" />

      <h2>Feet</h2>
      <label for="puppy_color">Puppy Colors: </label>
      <select id="puppy_color">{colorsList}</select>
      <br />
      <br />
      <label for="enter_grill_amount">Amount: </label>
      <input id="enter_grill_amount" type="text" name="amount" defualtValue="" maxlength="10" />
      <br />
      <br />
      <label for="grill_scrap">Scrap: </label>
      <input id="grill_scrap" type="text" name="amount" defualtValue="" maxlength="10" />
      <br />
      <br />
      <label for="grill_location">Location: </label>
      <select id="grill_locaiton">{locationList}</select>
      <br />
      <br />
      <input type="submit" value="Add" />

      <h2>Vinyl</h2>
      <label for="vinyl_pattern">Vinyls: </label>
      <select id="vinyl_pattern">{vinylList}</select>
      <br />
      <br />
      <label for="enter_grill_amount">Amount: </label>
      <input id="enter_grill_amount" type="text" name="amount" defualtValue="" maxlength="10" />
      <br />
      <br />
      <label for="grill_scrap">Scrap: </label>
      <input id="grill_scrap" type="text" name="amount" defualtValue="" maxlength="10" />
      <br />
      <br />
      <label for="grill_location">Location: </label>
      <select id="grill_locaiton">{locationList}</select>
      <br />
      <br />
      <input type="submit" value="Add" />

    </div>
  )
}

export default EndOfDay
