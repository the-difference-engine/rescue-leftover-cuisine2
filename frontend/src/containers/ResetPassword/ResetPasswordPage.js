import React from 'react';
import { Helmet } from 'react-helmet';
import querystring from 'querystring';
import { AuthPage } from '../../components/AuthItems/AuthItems';
import NewPassword from '../../components/NewPassword/NewPassword';

const ResetPasswordPage = ({ location, setJwt }) => {
  const parsed = querystring.parse(location.search.slice(1));
  const token = parsed.reset_password_token;

  return (
    <AuthPage>
      <Helmet>
        <title>Reset Password</title>
      </Helmet>
      <NewPassword token={token} setJwt={setJwt} />
    </AuthPage>
  );
};

export default ResetPasswordPage;
