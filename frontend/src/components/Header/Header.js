import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './Header.css';

class Header extends Component {
  
  render() {
    return (
      <nav className="navbar navbar-white bg-white fixed-top">
        <a className="navbar-brand" href="/">
          <img
            src={require('../../assets/RLC_logo.png')}
            alt="RLC Logo"
            className="rlcLogo"
          />
        </a>
        <div className="d-flex justify-content-lg-end">
          <button className="btn navbar-btn btn-lg browseButton" href="/">
            Browse Recipes
          </button>
          <button className="btn navbar-btn  btn-lg loginButton ml-3" onClick={() => {this.props.history.push('./login')}}>
            Log In or Sign Up
          </button>
          <button
            className="btn navbar-btn ml-4 px-4 btn-lg donateButton"
            href="/"
          >
            Donate
          </button>
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);
