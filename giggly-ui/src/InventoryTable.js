import React from "react";
import ReactDOM from 'react-dom';

function InventoryTable(){

    const products = ["Grill","Feet","Vinyl"];

    const colors = ["Red","Blue","Black"];
    const vinyls = ["Camo", "Flag"];
    const walker = ["2","4"];
    const text = [];

    for(const [index, value] of products.entries()){
      text.push(<li key={index}>{value}</li>)
      for(const [index, value] of colors.entries()){
        text.push(<li key={index}>{value}</li>)
      }
    }

    //console.log(text);
    //document.write(text);
    return(
      <div>
        {text}
      </div>
    )
    /*
    <table id="inventory">
      <tr>
        <th width="25%">Product</th>
        <th width="25%">Design</th>
        <th width="25%">Amount</th>
        <th width="25%">In Production</th>
      </tr>
      <tr>
        <td rowspan="8">Grills</td>
        <td rowspan="4">Truck</td>
        <td>Total: 43</td>
        <td>Total: 29</td>
      </tr>
      <tr>
        <td>Red: 21</td>
        <td>Red: 9</td>
      </tr>
      <tr>
        <td>Blue: 13</td>
        <td>Blue: 11</td>
      </tr>
      <tr>
        <td>Black: 9</td>
        <td>Black: 9</td>
      </tr>
      <tr>
        <td rowspan="4">Board</td>
        <td>Total: 11</td>
        <td>Total: 13</td>
      </tr>
      <tr>
        <td>Red: 4</td>
        <td>Red: 5</td>
      </tr>
      <tr>
        <td>Blue: 2</td>
        <td>Blue: 3</td>
      </tr>
      <tr>
        <td>Black: 5</td>
        <td>Black: 5</td>
      </tr>
      <tr>
        <td rowspan="4">Feet</td>
        <td rowspan="4">Puppy</td>
        <td>Total: 43</td>
        <td>Total: 29</td>
      </tr>
      <tr>
        <td>Red: 21</td>
        <td>Red: 9</td>
      </tr>
      <tr>
        <td>Blue: 13</td>
        <td>Blue: 11</td>
      </tr>
      <tr>
        <td>Black: 9</td>
        <td>Black: 9</td>
      </tr>

    </table>*/

}

export default InventoryTable
