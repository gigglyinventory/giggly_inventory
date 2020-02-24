import React from 'react';
import 'react-tabs/style/react-tabs.css';
import TabComponent from "./Components/tabComponent"
import './App.css';

class App extends React.Component{

    constructor(){
        super()
    }

    render() {
        return (
            <TabComponent />
        );
    }

}

export default App;