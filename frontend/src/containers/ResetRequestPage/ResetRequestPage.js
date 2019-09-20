import React from 'react';
import { Helmet } from 'react-helmet';
import { AuthPage } from '../../components/AuthItems/AuthItems';
import ResetRequest from '../../components/ResetRequest/ResetRequest';

const ResetRequestPage = () => (
  <AuthPage>
    <Helmet>
      <title>Reset Password</title>
      <meta property="og:title" content="Reset Password | Rescuing Leftover Cuisine" />
    </Helmet>

    <ResetRequest />
  </AuthPage>
);

export default ResetRequestPage;
