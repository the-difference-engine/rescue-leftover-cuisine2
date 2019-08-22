import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Redirectss extends Component {
  componentWillMount() {
    const url = (window.location.href);
    const ind = url.split('/');
    const l = ind.length;

    const c = (ind[l - 1]);
    // To get the user - data:
    axios.get(`http://localhost:3000/api/v1/${c}`).then((response) => {
      const params = {
        user_id: response.data.id,
        email: response.data.email,
      };
      axios.put('http://localhost:3000/api/v1/confirms', params).then((res) => {
        console.log('The data from the backend: ');
        console.log(res.data);
      });
    });
  }

  render() {
    return (
      <div>
        <h3>THis is the redirecting Page!</h3>
      </div>
    );
  }
}
export default withRouter(Redirectss);
