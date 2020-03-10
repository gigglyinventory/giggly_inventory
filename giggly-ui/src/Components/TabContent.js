import React from "react";
import EndOfDay from "./EndOfDay"
import Login from "./Login"
import Admin from "./Admin"
import Sales from "./Sales"
import Production from "./Production"
import {Link} from "react-router-dom";

const Navbar = () => {

  const navStyle ={ 
    color: '#f2f2f2',
    textDecoration: 'none',
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold',
    fontSize: '25px'

  };

  return(
    <nav >
      <ul className= "nav-links">
        <Link style={navStyle} to="./">
        </Link>

        <Link style={navStyle} to="/InventoryTable">
          <li>Inventory</li>
        </Link>

        <Link style={navStyle} to="/Sales">
          <li>Sales</li>
        </Link>

        <Link style={navStyle} to="/Production">
          <li>Production</li>
        </Link>

        <Link style={navStyle} to="/EndOfDay">
          <li>EndOfDay</li>
        </Link>

        <Link style={navStyle} to="/Admin">
          <li>Admin</li>
        </Link>
      </ul>
    </nav>
    
  )
}
 

export default Navbar
