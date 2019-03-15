import React, { Component } from 'react';
import Checkmark from '../../assets/checkmark-icon.png';
import './ThankYouCard.css';


class ThankYouCard extends Component {

  render() { 
    return (
      <div className="thankYou loginCard">
        <img src={Checkmark} alt="checkmark icon" className="checkStyle"/>
        <h3 className="loginHeader">Thank you for<br/>Joining our Community!!</h3>
        <h6 className="welcomeText">Welcome to <br/> Rescuing Leftover Cuisine Recipes</h6>
          <div className="row">
            <button className="dashboardButton signUpButton btn btn-lg btn-block" >Continue to my Dashboard</button>
          </div>

      </div>
    );
  }

}

export default ThankYouCard;