import React from "react";
import "./InventoryTable.css";
import { Table } from 'reactstrap';


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
    {console.log('in render ', this.state)}
    const materials = this.state.materials.map((item, index) =>{
      return(
        <tr>
        <td key={index}>{item.MaterialName}</td>
          <td key={index}> {item.InStock}</td>
        </tr>
        )})
      const products = this.state.products.map((item, index) =>{
          return(
            <tr>
              <td key={index}> {item.ProductName}</td>
              <td key={index}> {item.ReadyShip}</td>
            </tr>
            )})


    return(
      <div>
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Products</th>
          <th>Ready to ship</th>
        </tr>
        </thead>
        <tbody>
        {products}
        </tbody>
      </Table>
      <br />
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Raw Materials</th>
          <th>In Stock</th>
        </tr>
        </thead>
        <tbody>
        {materials}
        </tbody>
      </Table>

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
