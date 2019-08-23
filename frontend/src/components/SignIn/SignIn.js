import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { AuthCard, AuthInput } from '../AuthItems/AuthItems';
import { loginUser } from '../../lib/apiClient';

const SignIn = ({ history, setJwt }) => {
  const [errorMsg, setError] = useState(null);
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    loginUser(user)
      .then((response) => {
        setJwt(response.headers.authorization);
        history.push('/');
      })
      .catch((error) => {
        setError(error.response.data.errors[0].message);
      });
      
  };

  return (
    <AuthCard
      title="Log In"
      submitText="Log In"
      handleSubmit={handleSubmit}
      errorMessage={errorMsg}
    >
      <AuthInput
        form="signin"
        name="email"
        placeholder="Email"
        type="text"
        required
        handleChange={handleChange}
      />
      <AuthInput
        form="signin"
        name="password"
        placeholder="Password"
        type="password"
        required
        handleChange={handleChange}
      />
      <Link to="/resetrequest" className="row" id="forgot-password-link">I forgot my password.</Link>
    </AuthCard>
  );
};

export default withRouter(SignIn);
