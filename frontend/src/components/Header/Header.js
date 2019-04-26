import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import rlcLogo from '../../assets/RLC_logo.png';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';

const Header = ({ history, showSearchBar }) => (
  <nav className="navbar navbar-white bg-white fixed-top">
    <a className="navbar-brand" href="/">
      <img
        src={rlcLogo}
        alt="RLC Logo"
        className="rlcLogo"
      />
    </a>
    {showSearchBar ? <SearchBar /> : null}
    <div className="d-inline-flex justify-content-lg-end">
      <button className="btn navbar-btn btn-lg browseButton" href="/" type="button">
        Browse Recipes
      </button>
      <button className="btn navbar-btn  btn-lg loginButton ml-3" onClick={() => { history.push('./login'); }} type="button">
        Log In or Sign Up
      </button>
      <button
        className="btn navbar-btn ml-4 px-4 btn-lg donateButton"
        href="/"
        type="button"
      >
        Donate
      </button>
    </div>
  </nav>
);

Header.propTypes = {
  showSearchBar: PropTypes.bool
};

Header.defaultProps = {
  showSearchBar: false
};

export default withRouter(Header);
