import React, { Component } from 'react';
import './sign_in.css';

const UserSignIn = () => 

  <div>
    <h3>Log In</h3>
    <form className="form-signin">
      <div className="form-label-group">
        <input type="email" id="inputEmail4" className="form-control-lg" placeholder="Email address" required="" autoFocus="" />
        <label htmlFor="inputEmail4">Email</label>
      </div>

      <div className="form-label-group">
        <input type="password" id="inputPassword4" className="form-control-lg" placeholder="Password" required="" />
        <i className="glyphicon glyphicon-eye-open"></i>
        <label htmlFor="inputPassword4">Password</label>
      </div>
      <div className="checkbox mb-3">
        <a href="">I forgot my password</a>
      </div>
      <button className="btn btn-lg btn-block" type="submit">Sign Up</button>
    </form>
  </div>


class SignIn extends React.Component {

   togglePassword = () => {
    const x = document.getElementById("inputPassword4");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
   }
  
  render() {
    return (
      <UserSignIn />
    );
  }
}

export default SignIn;