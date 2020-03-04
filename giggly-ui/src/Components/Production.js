import React from "react"
import "./Production.css";

function Production(){

    const colors = [
        {id: 'em', name: ''},
        {id: 'rd', name: 'Red'},
        {id: 'bu', name: 'Blue'},
        {id: 'bk', name: 'Black'}
      ];

    let colorsList = colors.length > 0 && colors.map((item, i) => {
    return (<option key={i} value={item.id}>{item.name}</option>)
    }, this)

    const status = [
        {id: 'em', name: ''},
        {id: 'wa', name: 'Waiting'},
        {id: 'lo', name: 'Lost'}
      ];

    let statuslist = status.length > 0 && status.map((item, i) => {
    return (<option key={i} value={item.id}>{item.name}</option>)
    }, this)

    const design = [
        {id: 'em', name: ''},
        {id: 'tr', name: 'Truck'},
        {id: 'nb', name: 'Noteboard'},
      ];

    let designList = design.length > 0 && design.map((item, i) => {
    return (<option key={i} value={item.id}>{item.name}</option>)
    }, this)

    const design2 = [
        {id: 'em', name: ''},
        {id: 'wo', name: 'Paw'},
    ];

    let design2List = design2.length > 0 && design2.map((item, i) => {
    return (<option key={i} value={item.id}>{item.name}</option>)
    }, this)

    const walkertype = [
        {id: 'em', name: ''},
        {id: 'tw', name: '2-wheel'},
        {id: 'fo', name: '4-wheel'},
    ];

    let walkertypeList = walkertype.length > 0 && walkertype.map((item, i) => {
    return (<option key={i} value={item.id}>{item.name}</option>)
    }, this)

    const wrapdesign = [
        {id: 'em', name: ''},
        {id: 'wo', name: 'Wonderfall'},
        {id: 'ba', name: 'Barktastic'},
        {id: 'pa', name: 'Patriotic'},
        {id: 'fl', name: 'Flowerific'},
        {id: 'mi', name: 'Military'},
    ];

    let wrapdesignList = wrapdesign.length > 0 && wrapdesign.map((item, i) => {
    return (<option key={i} value={item.id}>{item.name}</option>)
    }, this)

    return(
        <div>
        
            <h2 class="end">Belovac</h2> 

            <div class="left-margin">
                <label for="colour">Colors: </label>
                <select id="colour">{colorsList}</select>
            </div>

            <div class="left-margin">
                <label for="status">Status: </label>
                <select id="status">{statuslist}</select>
            </div>

            <button>Retrieve</button>

            <h2 class="end">Cutting</h2> 
            <h3 class="left-margin"> Guillotine</h3> 
            <div class="left-margin">
                <label for="design">Design: </label>
                <select id="design">{designList}</select>
            </div>

            <div class="left-margin">
                <label for="colour">Colors: </label>
                <select id="colour">{colorsList}</select>
            </div>

            <div class="left-margin">
                <label for="status">Status: </label>
                <select id="status">{statuslist}</select>
            </div>

            <button>Retrieve</button>


            <h3 class="left-margin"> Rotozip</h3> 
            <div class="left-margin">
                <label for="design">Design: </label>
                <select id="design">{designList}</select>
            </div>

            <div class="left-margin">
                <label for="colour">Colors: </label>
                <select id="colour">{colorsList}</select>
            </div>

            <div class="left-margin">
                <label for="status">Status: </label>
                <select id="status">{statuslist}</select>
            </div>

            <button>Retrieve</button>

            <h3 class="left-margin"> Sanding</h3>
            <div class="left-margin">
                <label for="design">Design: </label>
                <select id="design">{designList}</select>
            </div>

            <div class="left-margin">
                <label for="colour">Colors: </label>
                <select id="colour">{colorsList}</select>
            </div>

            <div class="left-margin">
                <label for="status">Status: </label>
                <select id="status">{statuslist}</select>
            </div>

            <button>Retrieve</button>




            <h2 class="end">Assembly</h2> 
            <h3 class="left-margin"> Velcro</h3>

            <div class="left-margin">
                <label for="design">Design: </label>
                <select id="design">{designList}</select>
            </div>

            <div class="left-margin">
                <label for="colour">Colors: </label>
                <select id="colour">{colorsList}</select>
            </div>

            <div class="left-margin">
                <label for="status">Status: </label>
                <select id="status">{statuslist}</select>
            </div>

            <button>Retrieve</button>


            <h3 class="left-margin"> Stickers</h3>

            <div class="left-margin">
                <label for="design">Design: </label>
                <select id="design">{designList}</select>
            </div>

            <div class="left-margin">
                <label for="colour">Colors: </label>
                <select id="colour">{colorsList}</select>
            </div>

            <div class="left-margin">
                <label for="status">Status: </label>
                <select id="status">{statuslist}</select>
            </div>

            <button>Retrieve</button>

            <h3 class="left-margin"> Trim</h3>
            <div class="left-margin">
                <label for="design">Design: </label>
                <select id="design">{design2List}</select>
            </div>

            <div class="left-margin">
                <label for="colour">Colors: </label>
                <select id="colour">{colorsList}</select>
            </div>

            <div class="left-margin">
                <label for="status">Status: </label>
                <select id="status">{statuslist}</select>
            </div>

            <button>Retrieve</button>

            <h3 class="left-margin"> Screw</h3>
            <div class="left-margin">
                <label for="design">Design: </label>
                <select id="design">{design2List}</select>
            </div>
            <div class="left-margin">
                <label for="colour">Colors: </label>
                <select id="colour">{colorsList}</select>
            </div>

            <div class="left-margin">
                <label for="status">Status: </label>
                <select id="status">{statuslist}</select>
            </div>

            <button>Retrieve</button>

            <h3 class="left-margin"> Wrap</h3>
            <div class="left-margin">
                <label for="walkertype">Walker Type: </label>
                <select id="walkertype">{walkertypeList}</select>
            </div>

            <div class="left-margin">
                <label for="design">Design: </label>
                <select id="design">{wrapdesignList}</select>
            </div>

            <div class="left-margin">
                <label for="colour">Colors: </label>
                <select id="colour">{colorsList}</select>
            </div>

            <div class="left-margin">
                <label for="status">Status: </label>
                <select id="status">{statuslist}</select>
            </div>

            <button>Retrieve</button>






            <h2 class="end">Shipping</h2> 
            <h3 class="left-margin"> Blisterpack</h3>
            <form class="left-margin">
                <label for="design">Design: </label>
                <select id="design">{design2List}</select>
            </form>

            <form class="left-margin">
                <label for="colour">Colors: </label>
                <select id="colour">{colorsList}</select>
            </form>

            <form class="left-margin">
                <label for="status">Status: </label>
                <select id="status">{statuslist}</select>
            </form>

            <button>Retrieve</button>

            <h3 class="left-margin"> Grill Package</h3>
            <form class="left-margin">
                <label for="design">Design: </label>
                <select id="design">{designList}</select>
            </form>

            <form class="left-margin">
                <label for="colour">Colors: </label>
                <select id="colour">{colorsList}</select>
            </form>

            <form class="left-margin">
                <label for="status">Status: </label>
                <select id="status">{statuslist}</select>
            </form>

            <button>Retrieve</button>

            <h3 class="left-margin"> Walker Package</h3>
            <form class="left-margin">
                <label for="walkertype">Walker Type: </label>
                <select id="walkertype">{walkertypeList}</select>
            </form>

            <form class="left-margin">
                <label for="design">Design: </label>
                <select id="design">{wrapdesignList}</select>
            </form>

            <form class="left-margin">
                <label for="colour">Colors: </label>
                <select id="colour">{colorsList}</select>
            </form>

            <form class="left-margin">
                <label for="status">Status: </label>
                <select id="status">{statuslist}</select>
            </form>

            <button>Retrieve</button>


        </div>
    )
}

export default Production