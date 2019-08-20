import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { AuthCard, AuthInput } from '../AuthItems/AuthItems';
import { createUser } from '../../lib/apiClient';

const SignUp = ({ history }) => {
  const [errorMsg, setError] = useState(null);
  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
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
    createUser(user)
      .then(() => history.push('/thanks'))
      .catch((error) => {
        const { errors } = error.response.data;
        if (errors.email) {
          setError(`Email address ${errors.email[0]}.`);
        } else if (errors.password) {
          setError(`The provided password ${errors.password[0]}.`);
        } else {
          setError('Something unexpectedly went wrong. Please try again.');
        }
      });
  };

  return (
    <AuthCard
      title="Create an Account"
      submitText="Sign Up"
      handleSubmit={handleSubmit}
      errorMessage={errorMsg}
    >
      <div className="form-group d-flex flex-row justify-content-center">
        <AuthInput
          form="signup"
          name="firstName"
          placeholder="First Name"
          type="text"
          required
          handleChange={handleChange}
          column="true"
        />
        <div className="auth-card-column-divider" />
        <AuthInput
          form="signup"
          name="lastName"
          placeholder="Last Name"
          type="text"
          required
          handleChange={handleChange}
          column="true"
        />
      </div>
      <AuthInput
        form="signup"
        name="email"
        placeholder="Email"
        type="text"
        required
        pattern="^.+@.+\..+$"
        handleChange={handleChange}
      />
      <AuthInput
        form="signup"
        name="password"
        placeholder="Password"
        type="password"
        required
        minLength="6"
        handleChange={handleChange}
      />
    </AuthCard>
  );
};

export default withRouter(SignUp);
