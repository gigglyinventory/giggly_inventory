import React from "react";
import ReactDOM from 'react-dom';
import "./EndOfDay.css";

class Admin extends React.Component{
  constructor(props){
    super(props);
  }


  render(){

    const permissions = [
      {id: 'em', name: ''},
      {id: 'dm', name: 'Department Lead'},
      {id: 'ad', name: 'Administrator'}
    ];
    {/*Need this part for the actual select option*/}
    let permissionsList = permissions.length > 0 && permissions.map((item, i) => {
      return (<option key={i} value={item.name}>{item.name}</option>)
    }, this)

    return(
      <div>
        <form class="enter_user">
          <label>First Name</label>
          <input type="text"></input>
        </form>
        <form class="enter_user">
          <label>Last Name</label>
          <input type="text"></input>
        </form>
        <form class="enter_user">
          <label>E-mail Address</label>
          <input type="text"></input>
        </form>
        <form class="enter_user">
          <label>Username</label>
          <input type="text"></input>
        </form>
        <form class="enter_user">
          <label>Enter Password</label>
          <input type="text"></input>
        </form>
        <form class="enter_user">
          <label>Re-Enter Password</label>
          <input type="text"></input>
        </form>
        <form class="enter_user">
          <label for="permissions">Permissions</label>
          <select id="permissions"
            name="design"
            value={this.name}
            onChange={this.handleChange}>{permissionsList}</select>
        </form>
        <form class="enter_user">
          <button type="submit">Sign-up</button>
        </form>

      </div>

    );
  }
}

export default Admin
