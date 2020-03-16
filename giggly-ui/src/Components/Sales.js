import React from "react"
import "./Sales.css"
import {Button} from "reactstrap";



class Sales extends React.Component{

    constructor(props){
        super(props);
         this.state = {
            productList: [],
        }
         this.products = [
            {id: '', name: 'Select'},
            {id: 'RedPaws', name: 'Paw Red'},
            {id: 'BluePaws', name: 'Paw Blue'},
            {id: 'BlackPaws', name: 'Paw Black'},
            {id: 'RedTruck', name: 'Truck Red'},
            {id: 'BlueTruck', name: 'Truck Blue'},
            {id: 'BlackTruck', name: 'Truck Black'},
            {id: 'RedNoteboard', name: 'Noteboard Red'},
            {id: 'BlueNoteboard', name: 'Noteboard Blue'},
            {id: 'BlackNoteboard', name: 'Noteboard Black'},
            {id: 'WalkerTwoWheelFlowerific', name: 'Sticker Packs'},
            {id: 'WalkerFourWheelFlowerific', name: '2-wheel Flowerific'},
            {id: 'WalkerTwoWheelMilitary', name: '2-wheel Military'},
            {id: 'WalkerTwoWheelPatriotic', name: '2-wheel Patriotic'},
            {id: 'WalkerTwoWheelWonderFall', name: '2-wheel WonderFall'},
            {id: 'WalkerTwoWheelBarktastic', name: '2-wheel Barktastic'},
            {id: 'WalkerFourWheelBarktastic', name: '4-wheel Barktastic'},
            {id: 'WalkerFourWheelFlowerific', name: '4-wheel Flowerific'},
            {id: 'WalkerFourWheelWonderFall', name: '4-wheel WonderFall'},
            {id: 'WalkerFourWheelMilitary', name: '4-wheel Military'}
        ];

        this.productsMenue = this.products.length > 0 && this.products.map((item, i) => {
            return (<option key={i} value={item.id}>{item.name}</option>)
        }, this)

    }

    addProduct(){
        this.setState({productList: [...this.state.productList, "" ]})
    }

    handleChange(e, index){
        this.state.productList[index] = e.target.value
        this.setState({productList: this.state.productList})
    }

    async handleSubmit(){
        try{
            console.log('Sales handleSubmit productList is', this.state.productList)
        let url = '/inventory/'
        let productList = this.state.productList
        let response = await fetch(url, 
            {method: 'POST',
            body: JSON.stringify({productList}),
            headers:{ 'Content-Type': 'application/json'}})
        let respnseJSON = await response.json()
        this.setState(respnseJSON)
        console.log('in handlesubmit the response is ',respnseJSON)
        } catch (error){
            console.log(error)
        }
    };

    render(){
        return(
            <div class="salesStyle">
                    <h2 className="inventory">Products Ordered</h2>
                    <form>
                    <div className="formatInline">
                        <label style={{fontSize: "20px"}}>Product: </label>
                        <select id="ProductName" name="name" onChange={(e) => this.setState({ ProductName: e.target.ProductName })}>{this.productsMenue}</select>
                        <label style={{fontSize: "20px"}}>Quantity: </label>
                        <input className="inputStyle" style={{marginLeft:"10px"}}/>
                    </div>
                            {
                                this.state.productList.map((prod, index) => {

                                    return(
                                        <div className="formatInline">

                                            <div key={index}>
                                                <label style={{marginLeft:"10px"}}>Product: </label>
                                                <select id="ProductName" onChange={(e) => this.setState({ ProductName: e.target.ProductName })}>{this.productsMenue}</select>
                                                <label>Quantity: </label>
                                                <input className="inputStyle" name="quantity" onChange={(e)=>this.handleChange(e, index)} value={prod}/>
                                            </div>
                                        </div>

                                    )
                                })
                            }
                        <Button onClick= {(e) => this.addProduct(e)}> Add Product </Button>

                    <div style={{marginTop:"30px"}}>
                    <h2 className="inventory">Customer Details</h2>
                    </div>
                    <div style={{fontSize: "19px"}}>
                        <label>Order date:</label>
                        <input class="calender" type="date" name="date"></input>
                    </div>

                    <div style={{fontSize: "20px"}}>
                        <label>Firstname: </label>
                        <input className="inputStyle" type="text" firstName="firstName"/>
                    </div>

                    <div style={{fontSize: "20px"}}>
                        <label>Lastname: </label>
                        <input className="inputStyle"/>
                    </div>

                    <div style={{fontSize: "20px"}}>
                        <label>Email: </label>
                        <input className="inputStyle"/>
                    </div>

                    <div style={{fontSize: "20px"}}>
                        <label>Address: </label>
                        <input className="inputStyle"/>
                    </div>

                    <div style={{fontSize: "20px"}}>
                        <label>City: </label>
                        <input className="inputStyle"/>
                    </div>

                    <div style={{fontSize: "20px"}}>
                        <label>Zip: </label>
                        <input className="inputStyle"/>
                    </div>

                    <div style={{fontSize: "20px"}}>
                        <label>State: </label>
                        <input className="inputStyle"/>
                    </div>

                    <Button onClick={this.handleSubmit}>
                        Submit
                    </Button>
                    </form>

            </div>
    )
  }
}

export default Sales
