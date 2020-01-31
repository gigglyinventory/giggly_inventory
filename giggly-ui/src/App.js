import React from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import InventoryTable from "./InventoryTable"

import logo from './giggly_logo.PNG';
import './App.css';

function App() {
  return (
    <Tabs>
      <TabList>
        <Tab>Home</Tab>
        <Tab>Inventory</Tab>
        <Tab>End of Day</Tab>
      </TabList>

      <TabPanel>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="giggly_logo" />
          <p>
            Giggly Inventory
          </p>
          <a
            className="App-link"
            href="https://www.lifeimprovedmedical.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to Life Improved Medical
          </a>
        </header>
      </TabPanel>
      <TabPanel>
        <div>
          <InventoryTable />
        </div>
      </TabPanel>


    </Tabs>



  );
}

function newProduct(){

}

export default App;
