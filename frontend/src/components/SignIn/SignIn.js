import React, { Component } from 'react';
import './SignIn.css';


class SignIn extends Component {

  state = {
    isPasswordVisible: false

  }

  toggleIcon = () => {
    this.setState( prevState => ({
      isPasswordVisible: !prevState.isPasswordVisible
    }));
  }

  render() { //change this into form on a card
    return (
      <div class="loginCard">
        <h3 class="loginHeader">Log In</h3>
        <form className="form-signin">
          <div className="form-group row">
            <input type="email" id="inputSignInEmail" className="fullWidth form-control-lg" required="" autoFocus="" />
            <label for="inputSignInEmail">Email</label>
          </div>

          <div className="signInPassword form-group row">
            <input type={this.state.isPasswordVisible ? "text" : "password"} id="inputSignInPassword" className="fullWidth form-control-lg" required="" />
            <label for="inputsignUpPassword">Password</label>
            <span className={this.state.isPasswordVisible ? "fas fa-eye-slash fa-lg" : "fas fa-eye fa-lg"} onClick={ this.toggleIcon }></span>
          </div>
          <div className="forgotPassword form-group row">
            <a href="##########">I forgot my password</a>
          </div>
          <div class="row">
            <button className="signUpButton btn btn-lg btn-block" type="submit">Log In</button>
          </div>
          <div className="signInCard row">
          </div>
        </form>
      </div>
    );
  }

}

export default SignIn;