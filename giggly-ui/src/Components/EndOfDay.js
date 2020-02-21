import React from "react";
import ReactDOM from 'react-dom';
import "./EndOfDay.css"

function EndOfDay(){
  const grillDesign = [
    {id: 'em', name: ''},
    {id: 'tr', name: 'Truck'},
    {id: 'nb', name: 'Noteboard'}
  ];

  let grillDesignList = grillDesign.length > 0 && grillDesign.map((item, i) => {
    return (<option key={i} value={item.id}>{item.name}</option>)
  }, this)

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
      <form class="inline-date">
        <label>Date: </label>
        <input type="type" name="month" placeholder="MM" maxlength="2" size="2"/>
        <input type="type" name="day" placeholder="DD" maxlength="2" size="2"/>
        <input type="type" name="year" placeholder="YYYY" maxlength="4" size="2"/>
      </form>

      <form class="form-inline">
        <label for="grill_design">Design: </label>
        <select id="grill_design">{grillDesignList}</select>
        <label for="grill_color">Colors: </label>
        <select id="grill_color">{colorsList}</select>
      </form>

      <form class="form-inline">
        <label><b>Process</b></label>
        <label><b>Completed</b></label>
        <label><b>Lost</b></label>
      </form>

      <form class="form-inline">
        <label for="grill_vac">Belovac: </label>
        <input id="grill_vac" type="text" name="amount" defualtValue="" maxlength="5" size="8"/>
        <input id="vac_lost" type="text" name="amount" defualtValue="" maxlength="5" size="8"/>
      </form>

      <form class="form-inline">
        <label for="grill_guil">Guillotine: </label>
        <input id="grill_guil" type="text" name="amount" defualtValue="" maxlength="10" size="8"/>
        <input id="guil_lost" type="text" name="amount" defualtValue="" maxlength="10" size="8"/>
      </form>

      <form class="form-inline">
        <label for="grill_zip">RotoZip: </label>
        <input id="grill_zip" type="text" name="amount" defualtValue="" maxlength="10" size="8"/>
        <input id="zip_lost" type="text" name="amount" defualtValue="" maxlength="10" size="8"/>
      </form>

      <form class="form-inline">
        <label for="grill_sand">Sanding: </label>
        <input id="grill_sand" type="text" name="amount" defualtValue="" maxlength="10" size="8"/>
        <input id="sand_lost" type="text" name="amount" defualtValue="" maxlength="10" size="8"/>
      </form>

      <form class="form-inline">
        <label for="grill_assem">Assembly: </label>
        <input id="grill_assem" type="text" name="amount" defualtValue="" maxlength="10" size="8"/>
        <input id="assem_lost" type="text" name="amount" defualtValue="" maxlength="10" size="8"/>
      </form>

      <form class="form-inline">
        <label for="grill_vin">Vinyl: </label>
        <input id="grill_vin" type="text" name="amount" defualtValue="" maxlength="10" size="8"/>
        <input id="vvin_lost" type="text" name="amount" defualtValue="" maxlength="10" size="8"/>
      </form>

      <form class="form-inline">
        <label for="grill_pac">Packaging: </label>
        <input id="grill_pac" type="text" name="amount" defualtValue="" maxlength="10" size="8"/>
        {/*<label for="pac_lost">Lost: </label>*/}
        <input id="pac_lost" type="text" name="amount" defualtValue="" maxlength="10" size="8"/>
      </form>

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
