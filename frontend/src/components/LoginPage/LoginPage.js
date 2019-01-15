import React, { Component } from 'react';
import "./LoginPage.css"
import LogoHeader from "./../LogoHeader/LogoHeader.js"
import SignUp from "./../sign_up/sign_up.js"
import SignIn from "./../sign_in/sign_in.js"

class LoginPage extends Component {

  handleInputChange(event) {
      this.setState({ [event.target.name]: event.target.value });
      console.log("handle change", event.target);
  }

  render() {
      return (
        <div className="wrapper">
          <LogoHeader />
          <div className="pageHeaderDiv">
          </div>
          <div className="cardWrapper">
            <SignUp />
            <SignIn />
          </div>
        </div>
      );
    }
}

export default LoginPage; 