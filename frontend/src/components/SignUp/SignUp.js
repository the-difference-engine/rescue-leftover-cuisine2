import React, { Component } from 'react';
import './SignUp.css';


class SignUp extends Component {

  state = {
    isPasswordVisible: false,
    textPresent: false
  }

  toggleIcon = () => {
    this.setState( prevState => ({
      isPasswordVisible: !prevState.isPasswordVisible
    }));
  }

  // displayIcon = () => {
  //   if (this.state.isPasswordVisible) {
  //     let passwordDiv = document.getElementById('inputPassword4');
  //     passwordDiv.className = "fas fa-eye-slash fa-lg"
  //     passwordDiv.type = ""
  //   }
  // }
 
  // handleChange = (event) => {
  //     let info = event.target.value;
  //     if (info.length > 0) {
  //       this.setState({
  //         textPresent: true
  //       })
  //     }else {
  //       this.setState({
  //         textPresent: false
  //       })
  //     }
  // }

  togglePlaceholder = (placeholder) => {
    console.log(placeholder)
  
  }

  addPlaceholder = () => {
    "Email";
  }

  render() {
    return (
      <div className="loginCard">
        <h3 className="loginHeader">Create an Account</h3>
        <form className="form-signInUp">
          <div className="form-group row">
              <div className="name col">
                <div className="name row">
                  <input type="text" id="inputFirstName" className="firstName col-md form-control-lg" required="" autoFocus="" placeholder="First" onFocus={(event) => (event.target.setAttribute("placeholder", ""))}
onBlur={(event) => (event.target.setAttribute("placeholder", "First"))}/>
                  <label htmlFor="inputFirstName">First</label>
                </div>
              </div>
              <div className="col">
                <div className="name row">
                  <input type="text" id="inputLastName" className="col-md form-control-lg" required="" autoFocus="" placeholder="Last" onFocus={(event) => (event.target.setAttribute("placeholder", ""))}
onBlur={(event) => (event.target.setAttribute("placeholder", "Last"))}/>
                  <label htmlFor="inputLastName">Last</label>
                </div>
              </div>
          </div>

          <div className="form-group row">
            <input type="email" id="inputSignUpEmail" className="fullWidth form-control-lg" required="" autoFocus="" placeholder="Email" onFocus={(event) => (event.target.setAttribute("placeholder", ""))}
onBlur={(event) => (event.target.setAttribute("placeholder", "Email")) }/>
            <label htmlFor="inputSignUpEmail">Email</label>
            </div>
          <div className="password form-group row">
            <input type={this.state.isPasswordVisible ? "text" : "password"} id="inputSignUpPassword" className="fullWidth form-control-lg" required="" placeholder="Password" onFocus={(event) => (event.target.setAttribute("placeholder", ""))}
onBlur={(event) => (event.target.setAttribute("placeholder", "Password"))}/>
            <label htmlFor="inputsignUpPassword">Password</label>
            <span className={this.state.isPasswordVisible ? "fas fa-eye-slash fa-lg" : "fas fa-eye fa-lg"} onClick={ this.toggleIcon }></span>
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