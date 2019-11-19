import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';
import './HeaderDropdown.css';
import defaultPic from '../../assets/default-profile-pic.png';
import { endSession } from '../../lib/apiClient';

const HeaderDropdown = ({ history, user, setJwt }) => {
  const profilePic = user.profile_photo || defaultPic;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const logout = () => {
    endSession();
    setJwt(null);
    history.push('/');
  };

  const showAdminLink = () => (
    <Link className="header-dropdown-item" to="/admin">
      <DropdownItem className="header-dropdown-item">Administration</DropdownItem>
    </Link>
  );

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
      <DropdownToggle tag="button" className="header-dropdown-toggle">
        <img
          src={profilePic}
          alt="User"
          className="header-dropdown-profile-pic"
        />
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header className="header-dropdown-header">
          Hi
          {' '}
          {user.first_name}
          !
        </DropdownItem>
        <Link className="header-dropdown-item" to="/profile#recipes">
          <DropdownItem className="header-dropdown-item">My Recipes</DropdownItem>
        </Link>
        <Link className="header-dropdown-item" to="/profile#settings">
          <DropdownItem className="header-dropdown-item">Settings</DropdownItem>
        </Link>
        {user.is_admin === true ? showAdminLink() : null}
        <DropdownItem divider />
        <DropdownItem onClick={logout} className="header-dropdown-item">Log Out</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

HeaderDropdown.defaultProps = {
  user: {},
};

export default withRouter(HeaderDropdown);
