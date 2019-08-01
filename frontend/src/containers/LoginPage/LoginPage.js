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
      userId: '', // eslint-disable-line react/no-unused-state
    };
  }

  changeCreatedState = (status) => {
    if (status === 201) {
      this.setState({
        isCreated: true,
      });
    }
  }

  renderLoginOrThankYouCard = (isCreated) => {
    if (isCreated) {
      return (
        <div className="column mx-auto thankYouColumn">
          <ThankYouCard />
        </div>
      );
    }

    const { setJwt } = this.props;
    return (
      <div className="row">
        <div className="col loginColumnOne"><SignUp changeCreatedState={this.changeCreatedState} /></div>
        <div className="col loginColumnTwo"><SignIn setJwt={setJwt} /></div>
      </div>
    );
  }

  render() {
    const { isCreated } = this.state;

    return (
      <div className="loginPage container-fluid">
        <div className="row">
          <LogInPageHeader />
        </div>
        <div className="topLoginImage">
          <div className="loginCardWrapper">
            {this.renderLoginOrThankYouCard(isCreated)}
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
