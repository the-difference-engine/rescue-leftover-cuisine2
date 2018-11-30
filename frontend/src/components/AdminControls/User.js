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

  render() {
    return (
      <div>
        <div className="wrapper">
          <h4>This is where you can manage {this.state.user.first_name} {this.state.user.last_name}'s profile</h4>
        </div>
      </div>);
  }

}

export default User;
