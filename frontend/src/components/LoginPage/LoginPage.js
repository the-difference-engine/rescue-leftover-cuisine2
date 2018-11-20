import React, { Component } from 'react';
import axios from 'axios';

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {

        email: "",
        encrypted_password: "",
        auth_token: "",
        isAuthorized: false
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    //this.login = this.login.bind(this);
  }

  handleInputChange(event) {
      this.setState({ [event.target.name]: event.target.value });
      console.log("handle change", event.target);
  }

  
 /* login(event) {
    axios.post('api/v1/login', {
        email: this.state.email,
        encrypted_password: this.state.encrypted_password
      }).then(response => {
      this.setState({ 
        isAuthorized: true,
        email: response.data.email

      })
    })
    .catch(console.error)
  }
  */

  render() {

    if(!this.state.isAuthorized) {
      return (
        <div className="container card">
            <br></br>
            <div className="form-group">
              <label>Email address</label>
              <input 
                type="email" 
                className="form-control" 
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                placeholder="Email"
              ></input>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input 
                type="password" 
                name="encrypted_password"
                className="form-control" 
                onChange={this.handleInputChange}
                placeholder="Password"
              ></input>
            </div>
            <div className="form-group text-center">
              <button className="btn btn-primary" onClick={this.login}>Login</button>
            </div>
        </div>
      );
    }
    else {
      return (
        <div className="container card form-control">
          <h1>Hello{this.state.email}</h1>
        </div>
      );
    }
  }
}

export default LoginPage; 