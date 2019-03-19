import React, { Component } from 'react';
import './SignUp.css';

class SignUp extends Component {
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
      <div className="leftLoginCard loginCard">
        <h3 className="loginHeader">Create an Account</h3>
        <form className="form-signInUp">
          <div className="form-group row">
            <div className="name col">
              <div className="name row">
                <label htmlFor="inputFirstName">
                  <input
                    type="text"
                    id="inputFirstName"
                    className="sign-in-input firstName col-md form-control-lg"
                    required=""
                    autoFocus=""
                    placeholder="First"
                    onFocus={event => (event.target.setAttribute('placeholder', ''))}
                    onBlur={event => (event.target.setAttribute('placeholder', 'First'))}
                  />
                  First
                </label>
              </div>
            </div>
            <div className="col">
              <div className="name row">
                <label htmlFor="inputLastName">
                  <input
                    type="text"
                    id="inputLastName"
                    className="sign-in-input col-md form-control-lg"
                    required=""
                    autoFocus=""
                    placeholder="Last"
                    onFocus={event => (event.target.setAttribute('placeholder', ''))}
                    onBlur={event => (event.target.setAttribute('placeholder', 'Last'))}
                  />
                  Last
                </label>
              </div>
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="inputSignUpEmail">
              <input
                type="email"
                id="inputSignUpEmail"
                className="sign-in-input fullWidth form-control-lg"
                required=""
                autoFocus=""
                placeholder="Email"
                onFocus={event => (event.target.setAttribute('placeholder', ''))}
                onBlur={event => (event.target.setAttribute('placeholder', 'Email'))}
              />
              Email
            </label>
          </div>
          <div className="password form-group row">
            <label htmlFor="inputsignUpPassword">
              <input
                type={isPasswordVisible ? 'text' : 'password'}
                id="inputSignUpPassword"
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
          <div className="form-group row">
            <button className="signUpButton btn btn-lg btn-block" type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
