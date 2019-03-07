import React, { Component } from 'react';
import SignUp from '../../components/SignUp/SignUp.js';
import SignIn from '../../components/SignIn/SignIn.js';
import Footer from '../../components/Footer/Footer.js'
import LogInPageHeader from '../../components/LogInPageHeader/LogInPageHeader.js';
import './LoginPage.css';
//import axios from 'axios';

class LoginPage extends Component {
  
 /* login(event) {
    axios.post('api/v1/login', {
        email: this.state.email,
        encrypted_password: this.state.encrypted_password
      }).then(response => {
      this.setState({ 
        isAuthorized: true,
        email: response.data.email

      })
    })
    .catch(console.error)
  }
  */

  render() {
    return(
      <div className="loginPage container-fluid">
      <div className="row">
        <LogInPageHeader/>
      </div>
      <div className="topLoginImage">
        <div className="loginCardWrapper">
          <div className="row">
            <div className="column loginColumnOne"><SignUp/></div>
            < div className="column loginColumnTwo"><SignIn/></div>
          </div>
          <div className="loginFooter row">
            <Footer/>
          </div>
        </div>
      </div>
    </div>
      

    )
  }
}

export default LoginPage; 