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
            {id: '', name: ''},
            {id: 'pr', name: 'Paw Red'},
            {id: 'pb', name: 'Paw Blue'},
            {id: 'pbl', name: 'Paw Black'},
            {id: 'tr', name: 'Truck Red'},
            {id: 'tb', name: 'Truck Blue'},
            {id: 'tbl', name: 'Truck Black'},
            {id: 'nr', name: 'Noteboard Red'},
            {id: 'nb', name: 'Noteboard Blue'},
            {id: 'nbl', name: 'Noteboard Black'},
            {id: 'sp', name: 'Sticker Packs'},
            {id: 'fl2', name: '2-wheel Flowerific'},
            {id: 'mi2', name: '2-wheel Military'},
            {id: 'pa2', name: '2-wheel Patriotic'},
            {id: 'wf2', name: '2-wheel WonderFall'},
            {id: 'b2', name: '2-wheel Barktastic'},
            {id: 'b4', name: '4-wheel Barktastic'},
            {id: 'fl4', name: '4-wheel Flowerific'},
            {id: 'wf4', name: '4-wheel WonderFall'},
            {id: 'mi2', name: '4-wheel Military'}
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

    handleSubmit(){
        this.forceUpdate();
    };

    render(){
        return(
            <div className="salesStyle">
                    <h2 className="inventory">Products Ordered</h2>
                    <div className="formatInline">
                        <label style={{fontSize: "20px"}}>Product: </label>
                        <select id="design">{this.productsMenue}</select>
                        <label style={{fontSize: "20px"}}>Quantity: </label>
                        <input className="inputStyle" style={{marginLeft:"10px"}}/>
                    </div>
                            {
                                this.state.productList.map((prod, index) => {

                                    return(
                                        <div className="formatInline">

                                            <div key={index}>
                                                <label style={{marginLeft:"10px"}}>Product: </label>
                                                <select id="design">{this.productsMenue}</select>
                                                <label>Quantity: </label>
                                                <input className="inputStyle" onChange={(e)=>this.handleChange(e, index)} value={prod}/>
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
                        <input className="calender" type="date" name="order-date"></input>
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

                    <Button>
                        Submit
                    </Button>

            </div>
    )
  }
}

export default Sales
