import React, { Component } from 'react';
import "./LoginPage.css"
import LogoHeader from "./../LogoHeader/LogoHeader.js"
import SignUp from "./../sign_up/sign_up.js"
import SignIn from "./../SignIn/SignIn.js"

class LoginPage extends Component {

render() {
	return (
		 <div className="wrapper">
	          <LogoHeader />
	          <div className="pageHeaderDiv">
	          </div>
	          <div className="cardWrapper">
	            <SignUp />
	            <SignIn />
	          </div>
	        </div>
	      );
	    }
	    
    }

export default LoginPage;