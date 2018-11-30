import React, { Component } from 'react';
import axios from "axios";

class User extends Component {
  constructor(props) {
    console.log(props);
    super(props)
    this.state = {
    	user: [],
      email: "",
      user_name: "",
      first_name: "",
      last_name: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
      this.setState({ [event.target.name]: event.target.value });
      console.log("handle change", event.target);
  }

  componentDidMount() {
    axios.get('/users/' + this.props.match.params.id)
    .then(response => {
      this.setState({ 
        user: response.data,
        email: response.data.email,
        user_name: response.data.user_name,
        first_name: response.data.first_name,
        last_name: response.data.last_name
      })
      console.log("data", this.state.user);
    })
    .catch(console.error)
  }

  destroyUser = (event) => {
    console.log("deleting user");
    axios.delete('/users/' + this.state.user.id)
    .then(response => {
      this.setState({ user: "this user no longer exists"})
    })
    .catch(console.error)
  }

  updateUser = (event) => {
    console.log("updating user");
    axios.patch('/users/' + this.state.user.id, {
        email: this.state.email,
        user_name: this.state.user_name,
        first_name: this.state.first_name,
        last_name: this.state.last_name
      }).then(response => {
      this.setState({ 
        email: "",
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
        <div className="form-group">
          <label>Email address</label>
            <input 
                type="email" 
                className="form-control" 
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                placeholder="Email"
            >
            </input>
        </div>
        <div className="form-group">
          <label>User Name</label>
            <input 
                type="text" 
                className="form-control" 
                name="user_name"
                value={this.state.user_name}
                onChange={this.handleInputChange}
                placeholder="User Name"
            >
            </input>
        </div>
        <div className="form-group">
          <label>First Name</label>
            <input 
                type="text" 
                className="form-control" 
                name="first_name"
                value={this.state.first_name}
                onChange={this.handleInputChange}
                placeholder="First Name"
            >
            </input>
        </div>
        <div className="form-group">
          <label>Last Name</label>
            <input 
                type="text" 
                className="form-control" 
                name="last_name"
                value={this.state.last_name}
                onChange={this.handleInputChange}
                placeholder="Last Name"
            >
            </input>
        </div>
        <div className="form-group text-center">
          <label><h4>Update {this.state.user.first_name} {this.state.user.last_name}'s' Account</h4></label>
          <button onClick={this.updateUser} className="btn btn-primary" >Update</button>
        </div>
        <div className="form-group text-center">
          <label><h4>Delete {this.state.user.first_name} {this.state.user.last_name}'s' Account</h4></label>
          <button onClick={this.destroyUser} className="btn btn-danger" >Delete</button>
        </div>
      </div>
      ); 
  }

}

export default User;
