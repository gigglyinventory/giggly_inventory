import React from "react";
import "./InventoryTable.css";

class InventoryChild extends React.Component{
  constructor(props){
    super(props);
  }
  
//   async componentDidMount() {
//     try {
//       let response = await fetch(`/inventory/get-inventory`);
//       let inventroy = await response.json();
//       this.setState({inventroy});
//       console.log(this.state);
//     } catch (error) {
//       console.log(error);
//     }
//   }

  render(){
    return(
      <div class="across">

      <div class="column">
        <ul class="products"><h2 class="inventory">Grill</h2>
          <li>Truck
            <ul>
              <li>Red  {' '}{this.props.inventory[0].ProductName}</li>
              <li>Red {this.props.inventory[0].ProductID}</li>
              <li>Red <text> {this.props.inventory[0].MaterialName}</text></li>
              <li>Red {this.props.inventory[0].MaterialID}</li>

              <li>Blue</li>
              <li>Black</li>
            </ul>
          </li>
          <li>Noteboard
            <ul>
              <li>Red</li>
              <li>Blue</li>
              <li>Black</li>
            </ul>
          </li>
        </ul>

        <ul class="products"><h2 class="inventory">Feet</h2>
          <li>Puppy Feet
            <ul>
              <li>Red</li>
              <li>Blue</li>
              <li>Black</li>
            </ul>
          </li>

        </ul>
      </div>

      <div class="column">
        <ul class="products"><h2 class="inventory">Vinyl</h2>
          <li>2-Wheels
            <ul>
              <li>Camo</li>
              <li>Flag</li>
              <li>Flower</li>
              <li>Bark</li>
              <li>Wonder</li>
            </ul>
          </li>
          <li>4-Wheels
            <ul>
              <li>Camo</li>
              <li>Flag</li>
              <li>Flower</li>
              <li>Bark</li>
              <li>Wonder</li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="column">
        <ul class="products"><h2 class="inventory">Raw Materials</h2>
          <li>Grill
            <ul>
              <li>Red Plastic</li>
              <li>Blue Plastic</li>
              <li>Black Plastic</li>
              <li>Velcro</li>
              <li>Grill Stickers</li>
              <li>Noteboard Stickers</li>
              <li>Boxes</li>
            </ul>
          </li>
          <li>Feet
            <ul>
              <li>Red Feet</li>
              <li>Blue Feet</li>
              <li>Black Feet</li>
              <li>Cores</li>
              <li>Grommets</li>
              <li>Boxes</li>
            </ul>
          </li>
          <li>Vinyl
            <ul>
              <li>Vinyl</li>
              <li>2-Wheels</li>
              <li>4-Wheels</li>
              <li>Polybags</li>
              <li>Boxes</li>
            </ul>
          </li>
          <li>Ship Envelopes</li>
        </ul>
      </div>
        {/*Nested bullet points seen on the InventoryTable page*/}
      </div>
    )
    }
  }


export default InventoryChild
