import React, { Component } from 'react';
import './SignIn.css';


class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPasswordVisible: false,
    };
  }

  toggleIcon = () => {
    this.setState(prevState => ({
      isPasswordVisible: !prevState.isPasswordVisible,
    }));
  }

  render() {
    const { isPasswordVisible } = this.state;
    return (
      <div className="rightLoginCard loginCard">
        <h3 className="loginHeader">Log In</h3>
        <form className="form-signInUp">
          <div className="form-group row">
            <label htmlFor="inputSignInEmail">
              <input
                type="email"
                id="inputSignInEmail"
                className=" sign-in-input fullWidth form-control-lg"
                required=""
                autoFocus=""
                placeholder="Email"
                onFocus={event => (event.target.setAttribute('placeholder', ''))}
                onBlur={event => (event.target.setAttribute('placeholder', 'Email'))}
              />
              Email
            </label>
          </div>

          <div className="signInPassword form-group row">
            <label htmlFor="inputsignUpPassword">
              <input
                type={isPasswordVisible ? 'text' : 'password'}
                id="inputSignInPassword"
                className="sign-in-input fullWidth form-control-lg"
                required=""
                placeholder="Password"
                onFocus={event => (event.target.setAttribute('placeholder', ''))}
                onBlur={event => (event.target.setAttribute('placeholder', 'Password'))}
              />
              Password
            </label>
            <span className={isPasswordVisible ? 'fas fa-eye-slash fa-lg' : 'fas fa-eye fa-lg'} onClick={this.toggleIcon} />
          </div>
          <div className="forgotPassword form-group row">
            <a href="##########">I forgot my password</a>
          </div>
          <div className="row">
            <button className="signInButton signUpButton btn btn-lg btn-block" type="submit">Log In</button>
          </div>

        </form>
      </div>
    );
  }
}

export default SignIn;
