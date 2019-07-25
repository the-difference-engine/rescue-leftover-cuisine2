import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import rlcLogo from '../../assets/RLC_logo.png';
import SearchBar from '../SearchBar/SearchBar';
import HeaderDropdown from '../HeaderDropdown/HeaderDropdown';
import './Header.css';

const Header = ({
  history, user, setJwt, showSearchBar,
}) => {
  const loginOrCreateButton = () => {
    if (user) {
      return (
        <button className="btn navbar-btn btn-lg login-or-create-button ml-3" onClick={() => { history.push('/recipe/new'); }} type="button">
          Create Recipe +
        </button>
      );
    }
    return (
      <button className="btn navbar-btn btn-lg login-or-create-button ml-3" onClick={() => { history.push('/login'); }} type="button">
        Log In or Sign Up
      </button>
    );
  };

  return (
    <nav className="navbar navbar-white bg-white fixed-top">
      <a className="navbar-brand" href="/">
        <img
          src={rlcLogo}
          alt="RLC Logo"
          className="rlcLogo"
        />
      </a>

      {showSearchBar ? <SearchBar /> : null}

      <div className="d-inline-flex justify-content-lg-end align-items-center">
        <button className="btn navbar-btn btn-lg browseButton" href="/" type="button">
          Browse Recipes
        </button>

        {loginOrCreateButton()}

        <button
          className="btn navbar-btn btn-lg donateButton ml-4"
          type="button"
          onClick={() => window.location.replace('https://www.rescuingleftovercuisine.org/sponsor-a-meal')}
        >
          Donate
        </button>

        {user ? <HeaderDropdown user={user} setJwt={setJwt} /> : null }
      </div>
    </nav>
  );
};

Header.propTypes = {
  showSearchBar: PropTypes.bool,
};

Header.defaultProps = {
  showSearchBar: false,
};

export default withRouter(Header);
