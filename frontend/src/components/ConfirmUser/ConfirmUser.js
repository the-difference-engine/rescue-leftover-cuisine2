
import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const ConfirmUser = ({ history }) => {
  const code = () => {
    const url = (window.location.href);
    const ind = url.split('/');
    const l = ind.length;
    const c = (ind[l - 1]);
    axios.get(`http://localhost:3000/api/v1/${c}`).then(() => {
      history.push('/login');
    });
  };

  return (
    <div>
      {code()}
    </div>
  );
};

export default withRouter(ConfirmUser);
