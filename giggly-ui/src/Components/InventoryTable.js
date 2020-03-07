import React from "react";
import "./InventoryTable.css";
import InventoryChild from './InventoryChild'

class InventoryTable extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      inventory: {
        materials:[{
          inStock: '',
          materialName: '',
        }],
        products:[{
          readyShip: '',
          productName: ''
        }]
      }
    } 
  }
  
  async componentDidMount() {
    try {
      let response = await fetch(`/inventory/get-inventory`);
      let inventory = await response.json();
      this.setState({inventory});
      console.log(this.state);
    } catch (error) {
      console.log(error);
    }
  }

  render(){
    {/*Arrays to hold the different products, designs, colors and vinyls*/}
    const products = ["Grill","Feet","Vinyl"];
    const design = ["Truck", "Board"];
    const colors = ["Red","Blue","Black"];
    const vinyls = ["Camo", "Flag", "Flower", "Bark", "Wonder"];
    const walker = ["2-Wheels","4-Wheels"];
    return(
      <div>
        <InventoryChild inventory={this.state.inventory}/>
        {/*Nested bullet points seen on the InventoryTable page*/}
      </div>
    )
    }
}


export default InventoryTable
