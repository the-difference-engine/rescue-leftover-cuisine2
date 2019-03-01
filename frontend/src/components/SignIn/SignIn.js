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

  render() { 
    return (
      <div className="loginCard">
        <h3 className="loginHeader">Log In</h3>
        <form className="form-signInUp">
          <div className="form-group row">
            <input type="email" id="inputSignInEmail" className="fullWidth form-control-lg" required="" autoFocus="" />
            <label htmlFor="inputSignInEmail">Email</label>
          </div>

          <div className="signInPassword form-group row">
            <input type={this.state.isPasswordVisible ? "text" : "password"} id="inputSignInPassword" className="fullWidth form-control-lg" required="" />
            <label htmlFor="inputsignUpPassword">Password</label>
            <span className={this.state.isPasswordVisible ? "fas fa-eye-slash fa-lg" : "fas fa-eye fa-lg"} onClick={ this.toggleIcon }></span>
          </div>
          <div className="forgotPassword form-group row">
            <a href="##########">I forgot my password</a>
          </div>
          <div className="row">
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