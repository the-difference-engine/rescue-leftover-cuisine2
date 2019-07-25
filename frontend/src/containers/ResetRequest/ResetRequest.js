import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { requestPasswordReset } from '../../lib/apiClient';
import './ResetRequest.css';

class ResetRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      errorMessage: '',
      successMessage: '',
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email } = this.state;
    requestPasswordReset(email)
      .then(
        this.setState({
          successMessage: 'Check your email for instructions on resetting your password.',
        }),
      )
      .catch(() => this.setState({ errorMessage: 'Oops something went wrong! Please try again.' }));
  };

  render() {
    const { errorMessage, successMessage } = this.state;
    return (
      <div className="leftLoginCard loginCard">
        <h3 className="loginHeader">Enter Email To Reset Your Password</h3>
        <form className="form-signInUp" onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <div className="name col">
              <div className="name row">
                <input
                  type="text"
                  id="inputEmail"
                  name="email"
                  className="sign-in-input firstName col-md form-control-lg"
                  placeholder="Email Address"
                  required
                  onFocus={event => event.target.setAttribute('placeholder', '')}
                  onBlur={event => event.target.setAttribute('placeholder', 'Email Address')}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>

          <div>{errorMessage}</div>

          <div className="form-group row btn-wrapper">
            <button className="submit-btn btn btn-lg" type="submit">
              Submit
            </button>
          </div>
        </form>
        <div>{successMessage}</div>
      </div>
    );
  }
}

export default withRouter(ResetRequest);
