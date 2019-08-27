import React from 'react';
import { withRouter } from 'react-router-dom';
import { confirmUser } from '../../lib/apiClient';


const ConfirmUser = ({ history, location, setJwt }) => {
  const doConfirm = () => {
    confirmUser(location.search).then((response) => {
      setJwt(response.headers.authorization);
      history.push('/');
    });
  };

  return (
    <div>
      {doConfirm()}
    </div>
  );
};

export default withRouter(ConfirmUser);
