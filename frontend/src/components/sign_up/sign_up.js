import React, { Component } from 'react';
import './sign_up.css';


class SignUp extends Component {

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
      <div class="loginCard">
        <h3 class="loginHeader">Create an Account</h3>
        <form className="form-signUp">
          <div className="form-group row">
              <input type="text" id="inputFirstName" className="firstName col-md form-control-lg" placeholder="First" required="" autoFocus="" />
              <input type="text" id="inputLastName" className="col-md form-control-lg" placeholder="Last" required="" autoFocus="" />
          </div>

          <div className="form-group row">
            <input type="email" id="inputEmail14" className="fullWidth form-control-lg" placeholder="Email address" required="" autoFocus="" />
            <label htmlFor="inputEmail14"></label>
          </div>
          <div className="form-group row">
            <input type={this.state.isPasswordVisible ? "text" : "password"} id="inputPassword4" className="fullWidth form-control-lg" placeholder="Password" required="" />
            <label htmlFor="inputPassword4"></label>
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