import React, { Component } from 'react';
import { createUser } from '../../lib/apiClient';
import './SignUp.css';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      isPasswordVisible: false,
      isAuthorized: false,
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

  handleSubmit = (event, changeCreatedState) => {
    event.preventDefault();
    createUser(this.state)
      .then((response) => {
        changeCreatedState(response.status);
      })
      .catch((error) => {
        if (error.message.includes('422')) {
          const parentForm = document.getElementsByTagName('form')[0];
          const errorDiv = document.createElement('p');
          errorDiv.setAttribute('class', 'errorMessage sign-up');
          errorDiv.innerHTML = 'A user with that email already exists! Try signing in.';
          parentForm.insertAdjacentElement('beforeend', errorDiv);
        }
        console.log(error.response.data);
      });
  }

  render() {
    const { changeCreatedState } = this.props;
    const { isPasswordVisible } = this.state;

    return (
      <div className="leftLoginCard loginCard">
        <h3 className="loginHeader">Create an Account</h3>
        <form className="form-signInUp" onSubmit={event => this.handleSubmit(event, changeCreatedState)}>
          <div className="form-group row">
            <div className="name col">
              <div className="name row">
                <input
                  type="text"
                  id="inputFirstName"
                  name="firstName"
                  className="sign-in-input firstName col-md form-control-lg"
                  placeholder="First"
                  required
                  onFocus={event => (event.target.setAttribute('placeholder', ''))}
                  onBlur={event => (event.target.setAttribute('placeholder', 'First'))}
                  onChange={this.handleChange}
                />
                <label htmlFor="inputFirstName">First Name</label>
              </div>
            </div>
            <div className="col">
              <div className="name row">
                <input
                  type="text"
                  id="inputLastName"
                  name="lastName"
                  className="sign-in-input col-md form-control-lg"
                  placeholder="Last"
                  required
                  onFocus={event => (event.target.setAttribute('placeholder', ''))}
                  onBlur={event => (event.target.setAttribute('placeholder', 'Last'))}
                  onChange={this.handleChange}
                />
                <label htmlFor="inputLastName">Last Name</label>
              </div>
            </div>
          </div>

          <div className="form-group row">
            <input
              type="email"
              id="inputSignUpEmail"
              name="email"
              className="sign-in-input fullWidth form-control-lg"
              placeholder="Email"
              required
              onFocus={event => (event.target.setAttribute('placeholder', ''))}
              onBlur={event => (event.target.setAttribute('placeholder', 'Email'))}
              onChange={this.handleChange}
            />
            <label htmlFor="inputSignUpEmail">Email</label>
          </div>
          <div className="password form-group row">
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              id="inputSignUpPassword"
              name="password"
              className="sign-in-input fullWidth form-control-lg"
              minLength="6"
              placeholder="Password"
              required
              onFocus={event => (event.target.setAttribute('placeholder', ''))}
              onBlur={event => (event.target.setAttribute('placeholder', 'Password'))}
              onChange={this.handleChange}
            />
            <label htmlFor="inputSignUpPassword">Password</label>
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
