import React, { Component } from 'react';
import { createUser } from '../../lib/apiClient';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      isAuthorized: false,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

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
          parentForm.insertAdjacentElement('beforeend', errorDiv);
        }
      });
  };

  render() {
    const { changeCreatedState } = this.props;

    return (
      <div className="leftLoginCard loginCard">
        <h3 className="loginHeader">Enter Email To Reset Your Password</h3>
        <form
          className="form-signInUp"
          onSubmit={event => this.handleSubmit(event, changeCreatedState)}
        >
          <div className="form-group row">
            <div className="name col">
              <div className="name row">
                <input
                  type="text"
                  id="inputEmail"
                  name="email"
                  className="sign-in-input firstName col-md form-control-lg"
                  placeholder="Email address"
                  required
                  onFocus={event => event.target.setAttribute('placeholder', '')}
                  onBlur={event => event.target.setAttribute('placeholder', 'First')}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>

          <div className="form-group row">
            <button className="signUpButton btn btn-lg btn-block" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
