/* global sessionStorage */
/* eslint no-undef: "error" */

import React, { Component } from 'react';
import SignUp from '../../components/SignUp/SignUp';
import SignIn from '../../components/SignIn/SignIn';
import Footer from '../../components/Footer/Footer';
import LogInPageHeader from '../../components/LogInPageHeader/LogInPageHeader';
import ThankYouCard from '../../components/ThankYouCard/ThankYouCard';
import './LoginPage.css';

class LoginPage extends Component {
  renderLoginOrThankYouCard = () => {
    debugger
    if (sessionStorage.jwt) {
      return (
        <div className="column mx-auto thankYouColumn">
          <ThankYouCard />
        </div>
      );
    }
    return (
      <div className="row">
        <div className="col loginColumnOne"><SignUp /></div>
        <div className="col loginColumnTwo"><SignIn /></div>
      </div>
    );
  }

  render() {
    return (
      <div className="loginPage container-fluid">
        <div className="row">
          <LogInPageHeader />
        </div>
        <div className="topLoginImage">
          <div className="loginCardWrapper">
            {this.renderLoginOrThankYouCard()}
            <div className="loginFooter row">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
