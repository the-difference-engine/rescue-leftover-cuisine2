import React, { useState } from 'react';
import { AuthCard, AuthInput } from '../AuthItems/AuthItems';
import { requestPasswordReset } from '../../lib/apiClient';

const ResetRequest = () => {
  const [errorMsg, setError] = useState(null);
  const [successMsg, setSuccess] = useState(null);
  const [email, setEmail] = useState('');

  const handleChange = event => setEmail(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    requestPasswordReset(email)
      .then(() => setSuccess('Check your email for instructions on resetting your password.'))
      .catch((error) => {
        const { errors } = error.response.data;
        if (errors.email && errors.email[0] === 'not found') {
          setSuccess('Check your email for instructions on resetting your password.');
        } else {
          setError('Something unexpectedly went wrong. Please try again.');
        }
      });
  };

  return (
    <AuthCard
      title="Enter Email to Reset Password"
      submitText="Reset Password"
      handleSubmit={handleSubmit}
      errorMessage={errorMsg}
      successMessage={successMsg}
    >
      <AuthInput
        form="resetrequest"
        name="email"
        placeholder="Email"
        type="text"
        required
        pattern="^.+@.+\..+$"
        handleChange={handleChange}
      />
    </AuthCard>
  );
};

export default ResetRequest;
