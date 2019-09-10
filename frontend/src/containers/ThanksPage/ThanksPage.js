import React from 'react';
import { Helmet } from 'react-helmet';
import { AuthPage } from '../../components/AuthItems/AuthItems';
import ThankYouCard from '../../components/ThankYouCard/ThankYouCard';

const ThanksPage = () => (
  <AuthPage>
    <Helmet>
      <title>Thanks!</title>
    </Helmet>
    <ThankYouCard />
  </AuthPage>
);

export default ThanksPage;
