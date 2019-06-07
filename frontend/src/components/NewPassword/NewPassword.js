//  global sessionStorage  eslint-disable-line no-undef
/* eslint no-undef: "error" */

import React, { Component } from 'react';
import { loginUser } from '../../lib/apiClient';
import './NewPassword.css';

class NewPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPasswordVisible: false,
      password: '',
    };
  }

  toggleIcon = () => {
    this.setState(prevState => ({
      isPasswordVisible: !prevState.isPasswordVisible,
    }));
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    loginUser(this.state);
  };

  render() {
    const { changeAuthorizedState } = this.props;
    const { isPasswordVisible } = this.state;

    return (
      <div className="newPasswordCard">
        <h3 className="newPasswordHeader">Reset Password</h3>
        <form className="form-newPassword" onSubmit={event => this.handleSubmit(event, changeAuthorizedState)}>
          <div className="form-group row">
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              id="inputSignInPassword"
              className=" newPassword-input fullWidth form-control-lg"
              name="password"
              required=""
              placeholder="Password"
              onFocus={event => event.target.setAttribute('placeholder', '')}
              onBlur={event => event.target.setAttribute('placeholder', 'Password')}
              onChange={this.handleChange}
            />
            <label htmlFor="inputNewPassword">Password</label>
            <span
              className={isPasswordVisible ? 'fas fa-eye-slash fa-lg' : 'fas fa-eye fa-lg'}
              onClick={this.toggleIcon}
            />
          </div>

          <div className="passwordConfirm form-group row">
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              id="inputSignInPasswordConfirm"
              className="password-confirm-input fullWidth form-control-lg"
              name="password"
              required=""
              placeholder="Confirm Password"
              onFocus={event => event.target.setAttribute('placeholder', 'confirmPassword')}
              onBlur={event => event.target.setAttribute('placeholder', 'confrimPassword')}
              onChange={this.handleChange}
              minLength="6"
            />
            <label htmlFor="inputsignUpPassword">Password Confirmation</label>
            <span
              className={isPasswordVisible ? 'fas fa-eye-slash fa-lg' : 'fas fa-eye fa-lg'}
              onClick={this.toggleIcon}
            />
          </div>

          <div className="row">
            <button className="resetPasswordButton signUpButton btn btn-lg btn-block" type="submit" valid>
              Reset Password
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewPassword;
