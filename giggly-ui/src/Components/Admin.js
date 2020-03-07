import React from "react";
import "./EndOfDay.css";
//import {baseUrl} from '../../config.json';

class Admin extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      users: [{
        UserID: '',
        Password:'',
        UserEmail:'',
        UserFirstName:'',
        UserLastName:''
      }]
    } 
    //this.fetch = this.fetch.bind(this)

  }

//   handleClick() {
//     this.setState(prevState => {
//         return {
//             
//         }
//     })
// }

  async componentDidMount() {
    try {
      let response = await fetch(`/admin/get-users`);
      let users = await response.json();
      console.log(users);
      this.setState({users});
    } catch (error) {
      console.log(error);
    }
  }

  // async handleDelete(event){
  //   try{
  //       event.preventDefault();
  //       let username = document.getElementById('username1').value
  //       await fetch('/admin/delete-user', {
  //         method: 'POST',
  //         body: JSON.stringify({username: username})
  //       })
  //   }catch(error){
  //     console.log(error)
  //   }
  // }
//   <form onSubmit={this.handleDelete.bind(this)}>
//   <div class="enter_user">
//   <label>Username</label>
//   <input id="username1" name="username1"></input> <button type="submit">Delete</button>
//   </div>
// </form>
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
      <form method="POST" action="/admin/add-user">
        <div class="enter_user">
          <label>First Name</label>
          <input type="text" name="userFirstName"></input>
        </div>
        <div class="enter_user">
          <label>Last Name</label>
          <input type="text" name="userLastName"></input>
        </div>
        <div class="enter_user">
          <label>E-mail Address</label>
          <input type="text" name="email"></input>
        </div>
        <div class="enter_user">
          <label>Username</label>
          <input type="text" name="username"></input>
        </div>
        <div class="enter_user">
          <label>Enter Password</label>
          <input type="text" name="password"></input>
        </div>
        <div class="enter_user">
          <label>Re-Enter Password</label>
          <input type="text" name="passwordConf"></input>
        </div>
        <div class="enter_user">
          <label for="permissions">Permissions</label>
          <select id="permissions"
            name="design"
            value={this.name}
            onChange={this.handleChange}>{permissionsList}</select>
        </div>
        <div class="enter_user">
          <button type="submit">Sign-up</button>
        </div>
        </form>
        <br></br>
        <form method="POST" action="/admin/delete-user">
          <div class="enter_user">
          <label>Username</label>
          <input type="text" name="username"></input> <button type="submit">Delete</button>
          </div>
        </form>
        <form method="GET" action="/admin/get-users">
          <div class="enter_user">
          <h2>{this.state.users[0].UserFirstName}</h2> <h2>{this.state.users[0].UserLastName}</h2>
          <button type="submit">Display User List</button>
          </div>
        </form>
      </div>

    );
  }
}
//<!-- Should add a handleClick method to handle the button -->

export default Admin
