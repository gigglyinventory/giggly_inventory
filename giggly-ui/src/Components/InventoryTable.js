import React from "react";
import "./InventoryTable.css";
import InventoryChild from './InventoryChild'

class InventoryTable extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        materials:[
          {
          inStock: '',
          materialName: '',
          }
        ],
        products:[
          {
          ReadyShip: '',
          productName: ''
          }
        ]
    } 
  }
  
  async componentDidMount() {
    try {
      let response = await fetch(`/inventory/get-inventory`);
      let {materials, products} = await response.json();
      this.setState({materials, products});
    } catch (error) {
      console.log(error);
    }
  }

  render(){
    //{console.log('in render ', this.state)}
    const materials = this.state.materials.map((item, index) =>{
      return(
        <div>
          <ul>
          {/*<Item key={index} item={item}/>*/}
            <li>{`${item.materialName} in stock: ${item.inStock}`} </li>
          </ul>
        </div>
        )})
      const products = this.state.products.map((item, index) =>{
          return(
            <div>
              <ul>
              {/*<Item key={index} item={item}/>*/}
              <li key={index}>{`${item.ProductName}   Ready to ship:   ${item.ReadyShip}`} </li>
              </ul>
            </div>
            )})


    return(
      <div>
      <h1>Products Inventory</h1>
        {products}
      <h1>Raw Materials</h1>
        {materials}
      </div>
    ) 
  }
}

  //   <div>
  //   {this.state.materials.map((item) =>
  //     <div>
  //     <h5>{item.materialName}</h5>
  //     <h5>{item.inStock}</h5>
  //     </div>)}
  // </div>

    // )
    



export default InventoryTable
