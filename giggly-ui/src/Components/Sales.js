import React from "react"
import ReactDOM from 'react-dom';



class Sales extends React.Component{
    constructor(props){
        super(props);
    
         this.state = {
            productList: []
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


    render(){
        return(
            <div>
                <h2>Products Ordered:</h2>  
                    <label for="design">Product name: </label>
                        {
                            this.state.productList.map((prod, index) => {
                                return(
                                    <div key={index}>
                                        <select id="design">{this.productsMenue}</select>
                                        <label>Quantity: </label>
                                        <input onChange={(e)=>this.handleChange(e, index)} value={prod}/> 
                                    </div>
                                )   
                            })
                        }
                    <button onClick= {(e) => this.addProduct(e)}> Add Product </button>               
                <h2>Customer Details:</h2>

                    <label>Order Date:</label>
                    <input class="calender" type="date" name="order-date"></input>

                    <div class="form_inline">
                        <label>First name: </label>
                        <input/>
                    </div>

                    <div class="form_inline">
                        <label>Last name: </label>
                        <input/>
                    </div>

                    <div class="form_inline">
                        <label>Email: </label>
                        <input/>
                    </div>

                    <div class="form_inline">
                        <label>Address: </label>
                        <input/>
                    </div>

                    <div class="form_inline">
                        <label>City: </label>
                        <input/>
                    </div>

                    <div class="form_inline">
                        <label>Zip: </label>
                        <input/>
                    </div>

                    <div class="form_inline">
                        <label>State: </label>
                        <input/>
                    </div>

            </div>
            
    )
  }
}


export default Sales