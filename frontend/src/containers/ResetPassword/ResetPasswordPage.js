import React from 'react';

import querystring from 'querystring';
import LogInPageHeader from '../../components/LogInPageHeader/LogInPageHeader';
import NewPassword from '../../components/NewPassword/NewPassword';
import Footer from '../../components/Footer/Footer';
import './ResetPasswordPage.css';

const ResetPasswordPage = (props) => {
  const { location } = props;
  const parsed = querystring.parse(location.search.slice(1));
  const { token } = parsed;

  return (
    <div className="resetPasswordPage container-fluid">
      <div className="row">
        <LogInPageHeader />
      </div>
      <div className="passwordBackgroundImage">
        <div className="newPasswordCardWrapper">
          <NewPassword token={token} />
          <div className="loginFooter row">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResetPasswordPage;
