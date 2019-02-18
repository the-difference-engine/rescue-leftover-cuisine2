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
        <h5 class="loginHeader">Log In</h5>
        <form className="form-signin">
          <div className="form-label-group">
            <input type="email" id="inputEmail4" className="form-control-lg" placeholder="Email address" required="" autoFocus="" />
            <label htmlFor="inputEmail4"></label>
          </div>

          <div className="form-label-group">
            <input type={this.state.isPasswordVisible ? "text" : "password"} id="inputPassword3" className="form-control-lg" placeholder="Password" required="" />
            <label htmlFor="inputPassword3"></label>
            <span className={this.state.isPasswordVisible ? "fas fa-eye-slash fa-lg" : "fas fa-eye fa-lg"} onClick={ this.toggleIcon }></span>
          </div>
          <div className="form-group">
            <a href="##########">I forgot my password</a>
          </div>
          <button className="btn btn-lg btn-block" type="submit">Log In</button>
        </form>
      </div>
    );
  }

}

export default SignIn;