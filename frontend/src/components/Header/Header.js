import React from 'react';
import { withRouter } from 'react-router-dom';
import rlcLogo from '../../assets/RLC_logo.png';
import './Header.css';

const Header = ({ history }) => (
  <nav className="navbar navbar-white bg-white fixed-top">
    <a className="navbar-brand" href="/">
      <img
        src={rlcLogo}
        alt="RLC Logo"
        className="rlcLogo"
      />
    </a>
    <div className="d-flex justify-content-lg-end">
      <button className="btn navbar-btn btn-lg browseButton" href="/" type="button">
      Browse Recipes
      </button>
      <button className="btn navbar-btn  btn-lg loginButton ml-3" onClick={() => { history.push('./login'); }} type="button">
        Log In or Sign Up
      </button>
      <a href="https://www.rescuingleftovercuisine.org/sponsor-a-meal">
        <button className="btn navbar-btn ml-4 px-4 btn-lg donateButton" type="button">
        Donate
        </button>
      </a>
    </div>
  </nav>
);

export default withRouter(Header);
