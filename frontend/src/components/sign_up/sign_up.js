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
      <div>
        <form className="form-signUp">
          <h3>Create an Account</h3>
          <br></br>
          <div className="form-group">
            <div className="form-label-group">
              <input type="text" id="inputFirstName" className="form-control-lg" placeholder="First Name" required="" autoFocus="" />
              <label htmlFor="inputFirstName">First Name</label>
            </div>

            <div className="form-label-group">
              <input type="text" id="inputLastName" className="form-control-lg" placeholder="Last Name" required="" autoFocus="" />
              <label htmlFor="inputLastName">Last Name</label>
            </div>
          </div>

          <div className="form-label-group">
            <input type="email" id="inputEmail14" className="form-control-lg" placeholder="Email address" required="" autoFocus="" />
            <label htmlFor="inputEmail14">Email</label>
          </div>

          <div className="form-label-group">
            <input type={this.state.isPasswordVisible ? "text" : "password"} id="inputPassword4" className="form-control-lg" placeholder="Password" required="" />
            <label htmlFor="inputPassword4">Password</label>
            <span className={this.state.isPasswordVisible ? "fas fa-eye-slash fa-lg" : "fas fa-eye fa-lg"} onClick={ this.toggleIcon }></span>
          </div>
          <button className="btn btn-lg btn-block" type="submit">Sign Up</button>
        </form>
      </div>
    );
  }

}

export default SignUp;