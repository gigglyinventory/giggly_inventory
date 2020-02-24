import React from "react"
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import logo from "./giggly_logo.png";
import InventoryTable from "./InventoryTable";


function tabComponent(){
    return (
        <Tabs>
            <TabList>
                <Tab>Home</Tab>
                <Tab>Inventory</Tab>
                <Tab>Production</Tab>
                <Tab>Sales</Tab>
                <Tab>Deliveries</Tab>
                <Tab>End of Day</Tab>
                <Tab>Goals</Tab>
            </TabList>
            <TabPanel>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="giggly_logo" />
                    <p>
                        Giggly Inventory
                    </p>
                    <br/>
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

export default tabComponent