import React from 'react';
import { AuthPage } from '../../components/AuthItems/AuthItems';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

const LoginPage = ({ setJwt }) => (
  <AuthPage>
    <SignUp />
    <div className="auth-page-divider" />
    <SignIn setJwt={setJwt} />
  </AuthPage>
);

export default LoginPage;
