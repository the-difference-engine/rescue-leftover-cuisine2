import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import rlcLogo from '../../assets/RLC_logo.png';
import SearchBar from '../SearchBar/SearchBar';
import HeaderDropdown from '../HeaderDropdown/HeaderDropdown';
import './Header.css';

const Header = ({ showSearchBar, showHeaderDropdown }) => (
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

      <a href="https://www.rescuingleftovercuisine.org/sponsor-a-meal">
        <button className="btn navbar-btn ml-4 px-4 btn-lg donateButton" type="button">
        Donate
        </button>
      </a>
      { showHeaderDropdown ? <HeaderDropdown /> : null }
    </div>
  </nav>
);

Header.propTypes = {
  showSearchBar: PropTypes.bool,
};

Header.defaultProps = {
  showSearchBar: false,
};

export default withRouter(Header);
