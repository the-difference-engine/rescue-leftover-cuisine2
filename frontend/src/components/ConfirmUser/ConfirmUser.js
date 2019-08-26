import React from 'react';
import { withRouter } from 'react-router-dom';
import { confirmUser } from '../../lib/apiClient';


const ConfirmUser = ({ history }) => {
  const doConfirm = () => {
    const url = (window.location.href);
    const ind = url.split('/');
    const l = ind.length;
    const c = (ind[l - 1]);
    confirmUser(c).then(() => {
      history.push('/login');
    });
  };

  return (
    <div>
      {doConfirm()}
      <h3>THis is the redirecting Page!</h3>
    </div>
  );
};

export default withRouter(ConfirmUser);
