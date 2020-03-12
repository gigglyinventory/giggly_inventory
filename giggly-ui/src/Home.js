import React from 'react';
import TabContent from "./Components/TabContent"
import Login from "./Components/Login"
import InventoryTable from "./Components/InventoryTable"
import Sales from "./Components/Sales"
import Production from "./Components/Production"
import Admin from "./Components/Admin"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import EndOfDay from './Components/EndOfDay';
import userSession from './userSession';

<Router>
    <div className="Home">
        <TabContent />
        <Switch>
            <Route path="/InventoryTable" component={InventoryTable}/>
            <Route path="/Sales" component={Sales}/>
            <Route path="/Production" component={Production}/>
            <Route path="/EndOfDay" component={EndOfDay}/>
            <Route path="/Admin" component={Admin}/>
        </Switch>
    </div>
</Router>
