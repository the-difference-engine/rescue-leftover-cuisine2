/* eslint no-undef: "error" */

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
      response: [],
      suspendedUserList: [],
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

    const { history, setJwt } = this.props;

    loginUser(this.state)
      .then((response) => {
        setJwt(response.headers.authorization);
        history.push('/');
      })
      .catch((error) => {
        this.setState({
          validationErrorText: error.response.data.errors[0].message,
        });
      });
  };

  render() {
    const { validationErrorText, isPasswordVisible } = this.state;

    return (
      <div className="rightLoginCard loginCard">
        <h3 className="loginHeader">Log In</h3>
        <form className="form-signInUp" onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <input
              type="email"
              id="inputSignInEmail"
              className=" sign-in-input fullWidth form-control-lg"
              name="email"
              required
              placeholder="Email"
              onFocus={event => event.target.setAttribute('placeholder', '')}
              onBlur={event => event.target.setAttribute('placeholder', 'Email')}
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
              required
              placeholder="Password"
              onFocus={event => event.target.setAttribute('placeholder', '')}
              onBlur={event => event.target.setAttribute('placeholder', 'Password')}
              onChange={this.handleChange}
              minLength="6"
            />
            <label htmlFor="inputsignUpPassword">Password</label>
            <span
              className={isPasswordVisible ? 'fas fa-eye-slash fa-lg' : 'fas fa-eye fa-lg'}
              onClick={this.toggleIcon}
            />
          </div>
          <div className="forgotPassword form-group row">
            <a href="/resetrequest">I forgot my password</a>
          </div>
          <div className="row">
            <button className="signInButton signUpButton btn btn-lg btn-block" type="button" onClick={this.handleSubmit} valid="true">
              Log In
            </button>
          </div>
        </form>

        <p className="errorValidation">{validationErrorText}</p>
      </div>
    );
  }
}

export default withRouter(SignIn);
