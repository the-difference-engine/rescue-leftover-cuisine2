import React, { Component } from "react";
import LogInPageHeader from "../../components/LogInPageHeader/LogInPageHeader";
import NewPassword from "../../components/NewPassword/NewPassword";
import Footer from "../../components/Footer/Footer";
import "./ResetPasswordPage.css";

class resetPasswordPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCreated: false,
      isAuthorized: false,
      userId: "" // eslint-disable-line react/no-unused-state
    };
  }

  changeCreatedState = status => {
    if (status === 201) {
      this.setState({
        isCreated: true
      });
    }
  };

  changeAuthorizedState = returnUserId => {
    if (sessionStorage.jwt) {
      this.setState({
        isAuthorized: true,
        userId: returnUserId // eslint-disable-line react/no-unused-state
      });
    }
  };

  render() {
    // const { isAuthorized, isCreated } = this.state;

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

export default resetPasswordPage;
