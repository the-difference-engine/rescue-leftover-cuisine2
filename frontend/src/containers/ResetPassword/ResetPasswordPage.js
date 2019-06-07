import React, { Component } from 'react';
import LogInPageHeader from '../../components/LogInPageHeader/LogInPageHeader';
import NewPassword from '../../components/NewPassword/NewPassword';
import Footer from '../../components/Footer/Footer';
import './ResetPasswordPage.css';

class ResetPasswordPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '', // eslint-disable-line react/no-unused-state
    };
  }

  changeAuthorizedState = (returnUserId) => {
    // prettier-ignore
    if (sessionStorage.jwt) { // eslint-disable-line no-undef
      this.setState({
        userId: returnUserId, // eslint-disable-line react/no-unused-state
      });
    }
  };

  render() {
    return (
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
  }
}

export default ResetPasswordPage;
