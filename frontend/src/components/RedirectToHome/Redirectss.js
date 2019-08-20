import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Redirectss extends Component {
  componentWillMount() {
    const url = (window.location.href);
    const ind = url.split('/');
    const l = ind.length;

    const c = (ind[l - 1]);

    axios.get(`http://localhost:3000/api/v1/${c}`).then((response) => {
      console.log(response.data);
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
