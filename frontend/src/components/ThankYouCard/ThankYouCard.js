import React, { Component } from 'react';
import '../../assets/checkmark-icon.png';
import '../assets/grilled-chicken-dark.jpg';
import './ThankYouCard.css';


class ThankYouCard extends Component {

  render() { 
    return (
      <div className="loginCard">
        
        <h3 className="loginHeader">Thank you for<br/>Joining our Community!</h3>

          <div className="row">
            <button className="signUpButton btn btn-lg btn-block" type="submit">Continue to my Dashboard</button>
          </div>
          <div className="signInCard row">
          </div>
      </div>
    );
  }

}

export default ThankYouCard;