import React from 'react';
import LogInPageHeader from '../../components/LogInPageHeader/LogInPageHeader';
import NewPassword from '../../components/NewPassword/NewPassword';
import Footer from '../../components/Footer/Footer';
import './ResetPasswordPage.css';

const ResetPasswordPage = () => (
  <div className="resetPasswordPage container-fluid">
    <div className="row">
      <LogInPageHeader />
    </div>
    <div className="passwordBackgroundImage">
      <div className="newPasswordCardWrapper">
        <NewPassword />
        <div className="loginFooter row">
          <Footer />
        </div>
      </div>
    </div>
  </div>
);

export default ResetPasswordPage;
