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
      validationErrorText: '',
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
      })
      .catch((error) => {
        if (error.message.includes('401')) {
          this.setState({

            validationErrorText: 'Please make sure you have the correct email and password!',

          });
        }
      });
  }

  render() {
    const { changeAuthorizedState } = this.props;

    const { validationErrorText, isPasswordVisible } = this.state;

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

        <p className="errorValidation">{validationErrorText}</p>

      </div>
    );
  }
}

export default SignIn;
