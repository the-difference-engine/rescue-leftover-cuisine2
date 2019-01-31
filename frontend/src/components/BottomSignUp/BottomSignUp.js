import React, {Component } from 'react';
import './BottomSignUp.css'
import signupImage from "./soup-kitchen.jpg";

class BottomSignUp extends Component {

  render (){
      return(
        <div className="bottomContainer container-fluid">
          <div className="bottomSection row no-gutters">
              <div className="col-md-6 col-xs-12">
                <img className="signupImage" src={signupImage} alt="sign up"/>
              </div>
              <div className="col-md-6 col-xs-12 float-right signupSection">
                <p className="signupText">
                  <br/>
                  <span>Sign up to create your recipe<br/></span>
                  <span> and share them with our<br/></span>
                  <span> community!<br/></span>
                  <br/>
                  <span className="signupButtonSection">
                    <button type="button" className="btn btn-lg">Sign Up
                    </button>
                  </span>        
                </p>
              </div>
          </div>
        </div>
      )
  }
}

export default BottomSignUp;