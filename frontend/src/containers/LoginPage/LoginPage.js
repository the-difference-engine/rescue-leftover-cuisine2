import React, { Component } from 'react';
import SignUp from '../../components/SignUp/SignUp.js';
import SignIn from '../../components/SignIn/SignIn.js';
import Footer from '../../components/Footer/Footer.js'
import './LoginPage.css';
//import axios from 'axios';

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {

        email: "",
        encrypted_password: "",
        auth_token: "",
        isAuthorized: false
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    //this.login = this.login.bind(this);
  }

  handleInputChange(event) {
      this.setState({ [event.target.name]: event.target.value });
      console.log("handle change", event.target);
  }

  
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
      <div className="topLoginImage">
        <div className="loginCardWrapper">
          <div className="row">
            <div className="column loginColumnOne"><SignUp/></div>
            < div className="column loginColumnTwo"><SignIn/></div>
          </div>
          <div className="row">
            <Footer/>
          </div>
        </div>
      </div>
    </div>
      

    )
  }
}

export default LoginPage; 