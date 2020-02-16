import React from "react";
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import InventoryTable from "./InventoryTable"
import EndOfDay from "./EndOfDay"
import Login from "./Login"


function TabContent(){
  return (
    <Tabs>
      <TabList>
        <Tab>Login</Tab>
        <Tab>Inventory</Tab>
        <Tab>Sales</Tab>
        <Tab>Production</Tab>
        <Tab>End of Day</Tab>
        <Tab>Admin</Tab>
      </TabList>

      <TabPanel>
        <div>
          <Login />
        </div>

      </TabPanel>
      <TabPanel>
        <div>
          <InventoryTable />
        </div>
      </TabPanel>
      <TabPanel>
        <div>
          Sales Tab
        </div>
      </TabPanel>
      <TabPanel>
        <div>
          Production Tab
        </div>
      </TabPanel>
      <TabPanel>
        <div>
          <EndOfDay />
        </div>
      </TabPanel>
      <TabPanel>
        <div>
          Admin Tab
        </div>
      </TabPanel>



    </Tabs>
  );
}

export default TabContent
