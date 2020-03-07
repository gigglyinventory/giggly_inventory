import React from "react"
import "./Production.css";
import { render } from "react-dom";

function Production(){
    
    const products = [
        {id: '0', name: 'Select'},
        {id: '1', name: 'Truck'},
        {id: '2', name: 'Noteboard'},
        {id: '3', name: 'Puppy Feet'},
        {id: '4', name: '2-wheel Camo'},
        {id: '5', name: '2-wheel Flag'},
        {id: '6', name: '2-wheel Flower'},
        {id: '7', name: '2-wheel Bark'},
        {id: '8', name: '2-wheel Wonder'},
        {id: '9', name: '4-wheel Camo'},
        {id: '10', name: '4-wheel Flag'},
        {id: '11', name: '4-wheel Flower'},
        {id: '12', name: '4-wheel Bark'},
        {id: '13', name: '4-wheel Wonder'}
      ];

    let productsList = products.length > 0 && products.map((item, i) => {
    return (<option key={i} value={item.id}>{item.name}</option>)
    }, this)

    const productions = [
        {id: '0', name: 'Select'},
        {id: '1', name: 'Belovac'},
        {id: '2', name: 'Guillotine'},
        {id: '3', name: 'Rotozip'},
        {id: '4', name: 'Sanding'},
        {id: '5', name: 'Velcro'},
        {id: '6', name: 'Stickers'},
        {id: '7', name: 'Trim'},
        {id: '8', name: 'Screw'},
        {id: '9', name: 'Wrap'},
        {id: '10', name: 'Blisterpack'},
        {id: '11', name: 'Grill package'},
        {id: '12', name: 'Walker Package'},
      ];

    let productionList = productions.length > 0 && productions.map((item, i) => {
    return (<option key={i} value={item.id}>{item.name}</option>)
    }, this)

    const colors = [
        {id: '0', name: 'Select'},
        {id: '1', name: 'Red'},
        {id: '2', name: 'Blue'},
        {id: '3', name: 'Black'}
      ];

    let colorsList = colors.length > 0 && colors.map((item, i) => {
    return (<option key={i} value={item.id}>{item.name}</option>)
    }, this)

        return(
        <div>
           <h2>Productions</h2>
            <div class="form_inline">
                <label for="products">Products: </label>
                <select class="fontSize" id="design">{productsList}</select>
            </div>

            <div class="form_inline">
                <label>Production Steps: </label>
                <select class="fontSize" id="design">{productionList}</select>
            </div>

            <div class="form_inline">
                <label for="color">Color: </label>
                <select class="fontSize" id="design">{colorsList}</select>
            </div>

            <button class="button">Retrieve</button>
        </div>
    )
}

export default Production