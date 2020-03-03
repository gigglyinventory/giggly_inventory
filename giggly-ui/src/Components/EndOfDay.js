import React from "react";
import ReactDOM from 'react-dom';
import Grills from "./Grills"
import Feet from "./Feet"
import Vinyl from "./Vinyl"
import Output from "./Output"
import Materials from "./Materials"
import "./EndOfDay.css"

{/*Will be moving the bulk of of EndOfDay to their own .js file.
  will be creating Deliveries.js, Feet.js, Vinyls.js.
  Plans for Sales.js but don't know how to implement yet*/}

function EndOfDay(){
  {/*List of all raw materials for deliveries section.
    Will move to Deliveries.js*/}


    {/*These are arrays for the drop down selections for designs/colors/vinyls*/}





  return(
    <div>
      <div class="top">
        <div class="sections">
          <div>
            <Grills />
          </div>
          <div>
            <Feet />
          </div>

          {/*Will place in a dive then make it function just like Grills.js*/}
          <div>
            <Vinyl />
          </div>
          <div>
            <Materials />
          </div>
        </div>
        {/*Will be adding Deliveries and Sales div at the bottom and both Will
          reference a .js file for the functionality.*/}
        <div class="sections">
          <Output />
        </div>
      </div>

    </div>

  )
}

export default EndOfDay
