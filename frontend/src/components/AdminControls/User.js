import React, { Component } from 'react';
import axios from "axios";

class User extends Component {
  constructor(props) {
    console.log(props);
    super(props)
    this.state = {
    	user: []
    }
  }

  componentDidMount() {
    axios.get('/users/' + this.props.match.params.id)
    .then(response => {
      this.setState({ user: response.data})
      console.log("data", this.state.user);
    })
    .catch(console.error)
  }

  destroyUser = (event) => {
    console.log("destroy user event initiated");
    axios.delete('/users/' + this.state.user.id)
    .then(response => {
      this.setState({ user: "this user no longer exists"})
    })
    .catch(console.error)
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <h4>This is where you can manage {this.state.user.first_name} {this.state.user.last_name}'s profile</h4>
          <button onClick={this.destroyUser} className="btn btn-danger" >Delete Account</button>
        </div>
      </div>);
  }

}

export default User;
