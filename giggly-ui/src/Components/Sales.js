import React from "react"
import "./Sales.css"



function Sales() {

    const products = [
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

    let productsList = products.length > 0 && products.map((item, i) => {
        return (<option key={i} value={item.id}>{item.name}</option>)
    }, this)


    function addButton(){

        let newdiv;
        let newdiv1;

        newdiv = document.createElement('div');
        newdiv1 = document.createElement('div');

        newdiv.innerHTML = "Product Name: " +  "<select id='products'>{productsList}</select>";
        newdiv1.innerHTML = "Quantity: " + "<input type='text' name='myInputs[]'/>";

        document.getElementById("addMore").appendChild(newdiv).appendChild(newdiv1);

    }


    return(
        <div>

            <h2>Products Ordered:</h2>

                <div class="form_inline" id="addMore">
                    <label for="design">Product name: </label>
                    <select id="design">{productsList}</select>

                    <label>Quantity: </label>
                    <input/>
                </div>
                <button class="button_link" onClick= "addButton()">
                    Add another product
                </button>

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


export default Sales
