import React from 'react';
import { withRouter } from 'react-router-dom';
import { confirmUser } from '../../lib/apiClient';


const ConfirmUser = ({ history, location }) => {
  const doConfirm = () => {
    confirmUser(location.search).then(() => {
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
