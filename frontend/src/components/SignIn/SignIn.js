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
            <input type="email" id="inputEmail4" className="fullWidth form-control-lg" placeholder="Email" required="" autoFocus="" />
          </div>

          <div className="signInPassword form-group row">
            <input type={this.state.isPasswordVisible ? "text" : "password"} id="inputPassword3" className="fullWidth form-control-lg" placeholder="Password" required="" />
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