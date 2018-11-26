import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {
    	users: [],
    	email: ''
    }
  }

  componentDidMount() {
    axios.get('/users')
    .then(response => {
      this.setState({ users: response.data, email: '' })
      console.log("hello", this.state.users);
    })
    .catch(console.error)
  }

  renderUsers() {
    return this.state.users.map(user => {
      return (
        <ul key={user.id}>
          <h1>{user.email}</h1>
        </ul>
      );
    })
  }

  render() {
    return (
    	<div>
		      <div className="list-overflow-container">
		      	{this.renderUsers()}
		      </div>
    	</div>
    );
  }
}

export default Test;
