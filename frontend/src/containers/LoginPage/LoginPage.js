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
  constructor(props) {
    super(props);
    this.state = {
      isCreated: false,
      isAuthorized: false,
    };
  }

  changeCreatedState = (status) => {
    if (status === 201) {
      this.setState({ isCreated: true });
    }
  }

  changeAuthorizedState = () => {
    if (sessionStorage.jwt) {
      this.setState({ isAuthorized: true });
    }
  }

  renderLoginOrThankYouCard = (isCreated, isAuthorized) => {
    if (isCreated || isAuthorized) {
      return (
        <div className="column mx-auto thankYouColumn">
          <ThankYouCard />
        </div>
      );
    }
    return (
      <div className="row">
        <div className="col loginColumnOne"><SignUp changeCreatedState={this.changeCreatedState} /></div>
        <div className="col loginColumnTwo"><SignIn changeAuthorizedState={this.changeAuthorizedState} /></div>
      </div>
    );
  }

  render() {
    const { isAuthorized, isCreated } = this.state;

    return (
      <div className="loginPage container-fluid">
        <div className="row">
          <LogInPageHeader />
        </div>
        <div className="topLoginImage">
          <div className="loginCardWrapper">
            {this.renderLoginOrThankYouCard(isAuthorized, isCreated)}
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
