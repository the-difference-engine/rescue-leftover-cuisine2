//  global sessionStorage  eslint-disable-line no-undef
/* eslint no-undef: "error" */

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { resetPassword } from '../../lib/apiClient';
import './NewPassword.css';

class NewPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPasswordVisible: false,
      password: '',
      confirmPassword: '',
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

  handleSubmit = (event, changeCreatedState) => {
    event.preventDefault();
    const { history } = this.props;
    const { password, confirmPassword } = this.state;
    const { resetPasswordToken } = this.state;
    const queryString = `/login/?q=${resetPasswordToken}`;
    if (password !== confirmPassword) {
      alert("Passwords don't match"); // eslint-disable-line no-undef
    } else {
      resetPassword(this.state)
        .then((response) => {
          changeCreatedState(response.status);
          history.push(queryString);
        })
        .catch((error) => {
          console.log(error.message);
          // if (error.message.includes('422')) {
          //   const parentForm = document.getElementsByTagName('form')[0];
          //   const errorDiv = document.createElement('p');
          //   errorDiv.setAttribute('class', 'errorMessage reset-password');
          //   errorDiv.innerHTML = 'Please enter a valid password.';
          //   parentForm.insertAdjacentElement('beforeend', errorDiv);
          // }
        });
    }
  };

  render() {
    const { changeCreatedState } = this.props;
    const { isPasswordVisible } = this.state;

    return (
      <div className="newPasswordCard">
        <h3 className="newPasswordHeader">Reset Password</h3>
        <form
          className="form-newPassword"
          onSubmit={event => this.handleSubmit(event, changeCreatedState)}
        >
          <div className="form-group row">
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              id="inputSignInPassword"
              className=" newPassword-input fullWidth form-control-lg"
              name="password"
              required
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
              name="confirmPassword"
              required
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
            <button
              className="resetPasswordButton signUpButton btn btn-lg btn-block"
              type="submit"
              valid
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(NewPassword);
