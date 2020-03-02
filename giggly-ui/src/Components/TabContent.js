import React from "react";
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import InventoryTable from "./InventoryTable"
import EndOfDay from "./EndOfDay"
import Login from "./Login"


function TabContent(){
  return (

    /*Imported from react-tabs this gives the tabs at the top of the webpage*/
    <Tabs>
      <TabList>
        <Tab>Login</Tab>
        <Tab>Inventory</Tab>
        <Tab>Sales</Tab>
        <Tab>Production</Tab>
        <Tab>End of Day</Tab>
        <Tab>Admin</Tab>
      </TabList>
      {/*React auto lines up the tabs with the tabpanels. In each tabpanel is a
        webpage calling the webpages on .js file*/}
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

      {/*Have no sales, production, or admin tab. Need database to get info from
        sales and production will be a simple list with a filter*/}
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
