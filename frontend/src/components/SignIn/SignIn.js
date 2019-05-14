/* global sessionStorage */
/* eslint no-undef: "error" */

import React, { Component } from 'react';
import { loginUser } from '../../lib/apiClient';
import './SignIn.css';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPasswordVisible: false,
      email: '',
      password: '',
      errorText: 'Please Vish is a programmer!',
      flags: false,
      err: ''
    };
  }

  toggleIcon = () => {
    this.setState(prevState => ({
      isPasswordVisible: !prevState.isPasswordVisible,
    }));
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event, changeAuthorizedState) => {
    event.preventDefault();
    loginUser(this.state)
      .then((response) => {
        sessionStorage.jwt = response.headers.authorization;
        changeAuthorizedState(response.data.id);

         this.setState({
              flags: false
          })


      })
      .catch((error) => {
        if (error.message.includes('401')) {

          this.setState({
              flags: true
          }, this.setState({
             err: 'Please make sure you have the correct email and password!'

          }))
          // const parentForm = document.getElementsByTagName('form')[1];
          // const errorDiv = document.createElement('p');
          // errorDiv.setAttribute('class', ' ');
          // errorDiv.innerHTML = 'Alright I figured out the Text, now what ?.';
          // //parentForm.innerHTML(errorDiv);
          // parentForm.insertAdjacentElement('afterend', errorDiv);
        }
        console.log(error);
      });
  }

 

  render() {
    const { changeAuthorizedState } = this.props;
    const { isPasswordVisible } = this.state;
  
    return (
      <div className="rightLoginCard loginCard">
        <h3 className="loginHeader">Log In</h3>
        <form className="form-signInUp" onSubmit={event => this.handleSubmit(event, changeAuthorizedState)}>
          <div className="form-group row">
            <input
              type="email"
              id="inputSignInEmail"
              className=" sign-in-input fullWidth form-control-lg"
              name="email"
              required=""
              placeholder="Email"
              onFocus={event => (event.target.setAttribute('placeholder', ''))}
              onBlur={event => (event.target.setAttribute('placeholder', 'Email'))}
              onChange={this.handleChange}
            />
            <label htmlFor="inputSignInEmail">Email</label>
          </div>

          <div className="signInPassword form-group row">
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              id="inputSignInPassword"
              className="sign-in-input fullWidth form-control-lg"
              name="password"
              required=""
              placeholder="Password"
              onFocus={event => (event.target.setAttribute('placeholder', ''))}
              onBlur={event => (event.target.setAttribute('placeholder', 'Password'))}
              onChange={this.handleChange}
              minLength="6"
            />
            <label htmlFor="inputsignUpPassword">Password</label>
            <span className={isPasswordVisible ? 'fas fa-eye-slash fa-lg' : 'fas fa-eye fa-lg'} onClick={this.toggleIcon} />
          </div>
          <div className="forgotPassword form-group row">
            <a href="##########">I forgot my password</a>
          </div>
          <div className="row">
            <button className="signInButton signUpButton btn btn-lg btn-block" type="submit" valid>Log In</button>
          </div>

        </form>
        <p>{this.state.err}</p>
          
      </div>

    );
  }
}

export default SignIn;
