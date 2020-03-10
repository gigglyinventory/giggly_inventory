import React from "react";
import ReactDOM from "react-dom";
import logo from './giggly_logo.PNG';
import "./App.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    {/*Variables to hide the password*/}
    this.state = {
      hidden: true,
      password: ""
    };
    {/*Declares the functions below and helps access the variables above*/}
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }

  componentDidMount() {
    if (this.props.password) {
      this.setState({ password: this.props.password });
    }
  }

  render() {
    return (
      <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="giggly_logo" />
        <form method="POST" action="/login/post-login">
          <label for="username">Username </label>
          <br />
          <input
            id="enter_username"
            type="text"
            name="username"
            defualtValue=""
            class="credentials"
            maxlength="20"
            placeholder="Username"
            />
          <br />
          <label for="password">Password </label>
          <br />
          <input
            id="enter_password"
            type={this.state.hidden ? "password" : "text"}
            name="password"
            value={this.state.password}
            class="credentials"
            maxlength="20"
            placeholder="Password"
            onChange={this.handlePasswordChange}
          />
          <br />
          <button type="submit" class="button">Login</button>
          <br />
          <input type="checkbox" onClick={this.toggleShow} />Show Password
        </form>
        {/*This is the link for the main store website*/}
        <a
          className="App-link"
          href="https://www.lifeimprovedmedical.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Life Improved Medical.com
        </a>
      </header>
      </div>
    );
  }
}

export default Login;
