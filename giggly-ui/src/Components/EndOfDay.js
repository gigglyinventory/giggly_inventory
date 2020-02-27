import React from "react";
import ReactDOM from 'react-dom';
import Grills from "./Grills"
import Output from "./Output"
import "./EndOfDay.css"

{/*Will be moving the bulk of of EndOfDay to their own .js file.
  will be creating Deliveries.js, Feet.js, Vinyls.js.
  Plans for Sales.js but don't know how to implement yet*/}

function EndOfDay(){
  {/*List of all raw materials for deliveries section.
    Will move to Deliveries.js*/}
  const rawMaterials = [
    {id: '', name: ''},
    {id: 'vin', name: 'Vinyl'},
    {id: 'grd', name: 'Grill Plastic Red'},
    {id: 'gbu', name: 'Grill Plastic Blue'},
    {id: 'gbk', name: 'Grill Plastic Black'},
    {id: 'bob', name: 'Bobbers'},
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

    {/*These are arrays for the drop down selections for designs/colors/vinyls*/}

    {/*Will be moving to Vinyl.js*/}
    const walker = [
      {id: 'em', name: ''},
      {id: 'w2', name: '2-Wheels'},
      {id: 'w4', name: '4-Wheels'}
    ];

    let walkerList = walker.length > 0 && walker.map((item, i) => {
      return (<option key={i} value={item.id}>{item.name}</option>)
    }, this)

    {/*Color array used by both Puppy Feet and grills.
      Add a copy when create Feet.js*/}
    const colors = [
      {id: 'em', name: ''},
      {id: 'rd', name: 'Red'},
      {id: 'bu', name: 'Blue'},
      {id: 'bk', name: 'Black'}
    ];
    let colorsList = colors.length > 0 && colors.map((item, i) => {
      return (<option key={i} value={item.id}>{item.name}</option>)
    }, this)

    {/*Array of the different vinyl designs. will move to Vinyl.js*/}
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
    <div class="top">
      <div>
        <Grills />
        </div>
        {/*The div below is where i was going to try to display the input from EndOfDay
          Will try to add a Display.js for said function*/}
        <div>
          <Output />
        </div>

      {/*The dive below will be movied to Feet.js. Almost an exact copy of Grills.js*/}
      </div>
      <h2 class="end">Feet</h2>

      <form class="inline-date">
        <label>Date: </label>
        <input type="type" name="month" placeholder="MM" maxlength="2" size="2"/>
        <input type="type" name="day" placeholder="DD" maxlength="2" size="2"/>
        <input type="type" name="year" placeholder="YYYY" maxlength="4" size="2"/>
      </form>

      <form class="form-inline">
        <label for="puppy_color">Colors: </label>
        <select id="puppy_color">{colorsList}</select>
      </form>

      <form class="form-inline">
        <label><b>Process</b></label>
        <label><b>Completed</b></label>
        <label><b>Lost</b></label>
      </form>

      <form class="form-inline">
        <label for="feet_deliv">Delivered: </label>
        <input id="feet_deliv" type="text" name="amount" defualtValue="" maxlength="10" size="8"/>
        <input id="deliv_lost" type="text" name="amount" defualtValue="" maxlength="10" size="8"/>
      </form>

      <form class="form-inline">
        <label for="feet_trim">Trim: </label>
        <input id="feet_trim" type="text" name="amount" defualtValue="" maxlength="10" size="8"/>
        <input id="trim_lost" type="text" name="amount" defualtValue="" maxlength="10" size="8"/>
      </form>

      <form class="form-inline">
        <label for="feet_screw">Screw: </label>
        <input id="feet_screw" type="text" name="amount" defualtValue="" maxlength="10" size="8"/>
        <input id="screw_lost" type="text" name="amount" defualtValue="" maxlength="10" size="8"/>
      </form>

      <form class="form-inline">
        <label for="feet_pac">Packaging: </label>
        <input id="feet_pac" type="text" name="amount" defualtValue="" maxlength="10" size="8"/>
        <input id="trim_pac_lost" type="text" name="amount" defualtValue="" maxlength="10" size="8"/>
      </form>

      <input type="submit" value="Add" />

      {/*Will place in a dive then make it function just like Grills.js*/}

      <h2 class="end">Vinyl</h2>

      <form class="inline-date">
        <label>Date: </label>
        <input type="type" name="month" placeholder="MM" maxlength="2" size="2"/>
        <input type="type" name="day" placeholder="DD" maxlength="2" size="2"/>
        <input type="type" name="year" placeholder="YYYY" maxlength="4" size="2"/>
      </form>

      <form class="form-inline">
        <label for="vinyl_pattern">Vinyls: </label>
        <select id="vinyl_pattern">{vinylList}</select>
        <label for="walker_type">Walker: </label>
        <select id="walker_type">{walkerList}</select>
      </form>

      <form class="form-inline">
        <label><b>Process</b></label>
        <label><b>Completed</b></label>
        <label><b>Lost</b></label>
      </form>

      <form class="form-inline">
        <label for="canvas_print">Printing: </label>
        <input id="canvas_print" type="text" name="amount" defualtValue="" maxlength="10" size="8"/>
        <input id="print_lost" type="text" name="amount" defualtValue="" maxlength="10" size="8"/>
      </form>

      <form class="form-inline">
        <label for="canvas_cut">Cutting: </label>
        <input id="canvas_cut" type="text" name="amount" defualtValue="" maxlength="10" size="8"/>
        <input id="cut_lost" type="text" name="amount" defualtValue="" maxlength="10" size="8"/>
      </form>

      <form class="form-inline">
        <label for="vinyl_wrap">Wrap: </label>
        <input id="vinyl_wrap" type="text" name="amount" defualtValue="" maxlength="10" size="8"/>
        <input id="wrap_lost" type="text" name="amount" defualtValue="" maxlength="10" size="8"/>
      </form>

      <form class="form-inline">
        <label for="vinyl_pac">Packaging: </label>
        <input id="vinyl_pac" type="text" name="amount" defualtValue="" maxlength="10" size="8"/>
        <input id="vinyl_pac_lost" type="text" name="amount" defualtValue="" maxlength="10" size="8"/>
      </form>

      <input type="submit" value="Add" />
      {/*Will be adding Deliveries and Sales div at the bottom and both Will
        reference a .js file for the functionality.*/}
      <div>
        hey
      </div>
    </div>

  )
}

export default EndOfDay
