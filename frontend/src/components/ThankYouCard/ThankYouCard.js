import React from 'react';
import Checkmark from '../../assets/checkmark-icon.png';
import './ThankYouCard.css';

const ThankYouCard = () => (
  <div className="auth-card">
    <h3 className="auth-card-header">
      <img src={Checkmark} alt="checkmark" className="thanks-check" />
      <br />
      Thank you for joining our community!
    </h3>
    <div className="thanks-welcome-text row">
      Welcome to Rescuing Leftover Cuisine Recipes
    </div>
    <div className="row">
      Check your email for instructions on how to verify your account.
    </div>
  </div>
);

export default ThankYouCard;
