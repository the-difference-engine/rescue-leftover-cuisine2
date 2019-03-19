import React, { Component } from 'react';
import { createUser, loginUser } from '../../lib/apiClient';
import './SignUp.css';

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      isPasswordVisible: false,
      auth_token: "",
      isAuthorized: false
    }
  }

  toggleIcon = () => {
    this.setState( prevState => ({
      isPasswordVisible: !prevState.isPasswordVisible
    }));
  }

  handleChange = (event) => {
    this.setState({ [event.target.name] : event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log("it worked")
    createUser(this.state)
    .then(() => {loginUser(this.state)})
    .catch(error => {console.log(error.response.data)})
  }


  render() {
    return (
      <div className="loginCard">
        <h3 className="loginHeader">Create an Account</h3>
        <form className="form-signInUp" onSubmit={event => this.handleSubmit(event)}>
          <div className="form-group row">
              <div className="name col">
                <div className="name row">
                  <input type="text" id="inputFirstName" name="firstName" className="sign-in-input firstName col-md form-control-lg" placeholder="First" onFocus={(event) => (event.target.setAttribute("placeholder", ""))}
onBlur={(event) => (event.target.setAttribute("placeholder", "First"))} onChange={this.handleChange}/>
                  <label htmlFor="inputFirstName">First</label>
                </div>
              </div>
              <div className="col">
                <div className="name row">
                  <input type="text" id="inputLastName" name="lastName" className="sign-in-input col-md form-control-lg" placeholder="Last" onFocus={(event) => (event.target.setAttribute("placeholder", ""))}
onBlur={(event) => (event.target.setAttribute("placeholder", "Last"))} onChange={this.handleChange}/>
                  <label htmlFor="inputLastName">Last</label>
                </div>
              </div>
          </div>

          <div className="form-group row">
            <input type="email" id="inputSignUpEmail" name="email" className="sign-in-input fullWidth form-control-lg" placeholder="Email" onFocus={(event) => (event.target.setAttribute("placeholder", ""))}
onBlur={(event) => (event.target.setAttribute("placeholder", "Email"))} onChange={this.handleChange}/>
            <label htmlFor="inputSignUpEmail">Email</label>
            </div>
          <div className="password form-group row">
            <input type={this.state.isPasswordVisible ? "text" : "password"} id="inputSignUpPassword" name="password" className="sign-in-input fullWidth form-control-lg" placeholder="Password" onFocus={(event) => (event.target.setAttribute("placeholder", ""))}
onBlur={(event) => (event.target.setAttribute("placeholder", "Password"))} onChange={this.handleChange}/>
            <label htmlFor="inputsignUpPassword">Password</label>
            <span className={this.state.isPasswordVisible ? "fas fa-eye-slash fa-lg" : "fas fa-eye fa-lg"} onClick={ this.toggleIcon }></span>
          </div>
          <div className="form-group row">
            <button className="signUpButton btn btn-lg btn-block" type="submit" >Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;