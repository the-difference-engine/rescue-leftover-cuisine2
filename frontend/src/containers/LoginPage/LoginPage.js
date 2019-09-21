import React from 'react';
import { Helmet } from 'react-helmet';
import { AuthPage } from '../../components/AuthItems/AuthItems';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

const LoginPage = ({ setJwt }) => (
  <AuthPage>
    <Helmet>
      <title>Login</title>
      <meta property="og:title" content="Login | Rescuing Leftover Cuisine" />
    </Helmet>

    <SignUp />
    <div className="auth-page-divider" />
    <SignIn setJwt={setJwt} />
  </AuthPage>
);

export default LoginPage;
