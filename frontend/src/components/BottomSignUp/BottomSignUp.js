import React, {Component } from 'react';
import './BottomSignUp.css'
import signupImage from "../../assets/soup-kitchen.jpg";

class BottomSignUp extends Component {

  render (){
      return(
        <div className="container-fluid containerSection">
          <div className="bottomSignUp">
            <div className="row">
              <div className="col">
                <img className="signupImage" src={signupImage} alt="sign up"/>
              </div>
              <div className="col signupSection">
                <p className="signupText">
                  <br/>
                    <span>Sign up to create your recipes<br/></span>
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
        </div>
      )
  }
}

export default BottomSignUp;