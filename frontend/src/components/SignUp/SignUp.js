import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
        email: "",
        password: "",
        password_confirmation: "",
        first_name: "",
        last_name: "",
        user_name: ""   
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
      this.setState({ [event.target.name]: event.target.value });
      console.log("handle change", event.target);
  }

  signUp = (event) => {
    axios.post('/users', {
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.password_confirmation,
        user_name: this.state.user_name,
        first_name: this.state.first_name,
        last_name: this.state.last_name
      }).then(response => {
      this.setState({ 
        email: "",
        password: "",
        password_confirmation: "",
        user_name: "",
        first_name: "",
        last_name: ""
      })
    })
    .catch(console.error)
  }

  render() {
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
                name="password"
                className="form-control" 
                onChange={this.handleInputChange}
                placeholder="Password"
              ></input>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input 
                type="password" 
                name="password_confirmation"
                className="form-control" 
                onChange={this.handleInputChange}
                placeholder="Password Confirmation"
              ></input>
            </div>
            <div className="form-group">
              <label>User Name</label>
              <input 
                type="text" 
                name="user_name"
                className="form-control" 
                onChange={this.handleInputChange}
                placeholder="User Name"
              ></input>
            </div>
            <div className="form-group">
              <label>First Name</label>
              <input 
                type="text" 
                name="first_name"
                className="form-control" 
                onChange={this.handleInputChange}
                placeholder="First Name"
              ></input>
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input 
                type="text" 
                name="last_name"
                className="form-control" 
                onChange={this.handleInputChange}
                placeholder="Last Name"
              ></input>
            </div>
            <div className="form-group text-center">
              <button className="btn btn-primary" onClick={this.signUp}>Sign Up</button>
            </div>
        </div>
      );
    }
}

export default SignUp; 