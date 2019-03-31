import React, { Component } from 'react';
import { loginUser } from '../../lib/apiClient';
import './SignIn.css';


class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
    isPasswordVisible: false,
    email: "",
    password: "",
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
    this.setState({ [event.target.name] : event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault()
    loginUser(this.state)
    .then(response => { 
        sessionStorage.jwt = response.headers.authorization
      })
    .then(
      this.setState({ isAuthorized: true })
    )
    .catch(error => {console.log(error)})
  }

  render() { 
    return (
      <div className="rightLoginCard loginCard">
        <h3 className="loginHeader">Log In</h3>
        <form className="form-signInUp" onSubmit={ (event) => this.handleSubmit(event) }>
          <div className="form-group row">
            <input type="email" id="inputSignInEmail" className=" sign-in-input fullWidth form-control-lg" name="email" required="" autoFocus="" placeholder="Email" onFocus={(event) => (event.target.setAttribute("placeholder", ""))}
onBlur={(event) => (event.target.setAttribute("placeholder", "Email"))} onChange={ this.handleChange }/>
            <label htmlFor="inputSignInEmail">Email</label>
          </div>

          <div className="signInPassword form-group row">
            <input type={this.state.isPasswordVisible ? "text" : "password"} id="inputSignInPassword" className="sign-in-input fullWidth form-control-lg" name="password" required="" autoFocus="" placeholder="Password" onFocus={(event) => (event.target.setAttribute("placeholder", ""))}
onBlur={(event) => (event.target.setAttribute("placeholder", "Password"))} onChange={ this.handleChange } />
            <label htmlFor="inputsignUpPassword">Password</label>
            <span className={this.state.isPasswordVisible ? "fas fa-eye-slash fa-lg" : "fas fa-eye fa-lg"} onClick={ this.toggleIcon }></span>
          </div>
          <div className="forgotPassword form-group row">
            <a href="##########">I forgot my password</a>
          </div>
          <div className="row">
            <button className="signInButton signUpButton btn btn-lg btn-block" type="submit" data-container="body" data-toggle="tooltip" data-placement="bottom" data-content="You've logged in!">Log In</button>
          </div>

        </form>
      </div>
    );
  }

}

export default SignIn;