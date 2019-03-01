import React, { Component } from 'react';
import './SignUp.css';

class SignUp extends Component {

  state = {
    isPasswordVisible: false

  }

  toggleIcon = () => {
    this.setState( prevState => ({
      isPasswordVisible: !prevState.isPasswordVisible
    }));
  }

  // displayIcon = () => {
  //   if (this.state.isPasswordVisible) {
  //     let passwordDiv = document.getElementById('inputPassword4');
  //     passwordDiv.className = "fas fa-eye-slash fa-lg"
  //     passwordDiv.type = ""
  //   }
  // }

  render() {
    return (
      <div class="loginCard">
        <h3 class="loginHeader">Create an Account</h3>
        <form className="form-signUp">
          <div className="form-group row">
              <div className="name col">
                <div className="name row">
                  <input type="text" id="inputFirstName" className="firstName col-md form-control-lg" required="" autoFocus=""/>
                  <label for="inputFirstName">First</label>
                </div>
              </div>
              <div className="col">
                <div className="name row">
                  <input type="text" id="inputLastName" className="col-md form-control-lg" required="" autoFocus="" />
                  <label for="inputLastName">Last</label>
                </div>
              </div>
          </div>

          <div className="form-group row">
            <input type="email" id="inputSignUpEmail" className="fullWidth form-control-lg" required="" autoFocus="" />
            <label for="inputSignUpEmail">Email</label>
            </div>
          <div className="password form-group row">
            <input type={this.state.isPasswordVisible ? "text" : "password"} id="inputSignUpPassword" className="fullWidth form-control-lg" required=""/>
            <label for="inputsignUpPassword">Password</label>
            <span className={this.state.isPasswordVisible ? "fas fa-eye-slash fa-lg" : "fas fa-eye fa-lg"} onClick={ this.toggleIcon }></span>
          </div>
          <div className="form-group row">
            <button className="signUpButton btn btn-lg btn-block" type="submit">Sign Up</button>
          </div>
        </form>
      </div>
      
    );
  }

}

export default SignUp;
