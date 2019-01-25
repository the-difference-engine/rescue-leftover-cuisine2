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
      <div>
        <form className="form-signin">
          <h3>Log In</h3>
          <br></br>
          <div className="form-label-group">
            <input type="email" id="inputEmail4" className="form-control-lg" placeholder="Email address" required="" autoFocus="" />
            <label htmlFor="inputEmail4">Email</label>
          </div>

          <div className="form-label-group">
            <input type={this.state.isPasswordVisible ? "text" : "password"} id="inputPassword3" className="form-control-lg" placeholder="Password" required="" />
            <label htmlFor="inputPassword3">Password</label>
            <span className={this.state.isPasswordVisible ? "fas fa-eye-slash fa-lg" : "fas fa-eye fa-lg"} onClick={ this.toggleIcon }></span>
          </div>
          <div className="form-group">
            <a href="www.google.com">I forgot my password</a>
          </div>
          <button className="btn btn-lg btn-block" type="submit">Log In</button>
        </form>
      </div>
    );
  }

}

export default SignIn;