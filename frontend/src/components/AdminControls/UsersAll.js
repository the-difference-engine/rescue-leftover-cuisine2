import React, { Component } from 'react';
import { Link } from "react-router-dom";
import apiClient from "../../lib/apiClient";

class UsersAll extends Component {
  constructor(props) {
    super(props)
    this.state = {
    	users: []
    }
  }

  componentDidMount() {
    apiClient.get('/user')
    .then(response => {
      this.setState({ users: response.data.users})
      console.log("data", this.state.users);
      console.log("props", this.props);
    })
    .catch(console.error)
  }

  render() {
    return (
      <div>
        <div className="wrapper">
        {this.state.users.map((user, id ) => (
            <ul>
              <h1 key={user.id}>User: <strong>{user.first_name} {user.last_name}</strong></h1>
              <Link to={"/users/" + user.id}><button className="btn btn-primary">Edit Account</button></Link>
            </ul>
        ))}
        </div>
      </div>);
  }

}

export default UsersAll;
