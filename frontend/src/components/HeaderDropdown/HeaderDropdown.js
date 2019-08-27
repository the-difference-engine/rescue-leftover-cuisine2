import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
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
        <DropdownItem onClick={() => history.push('/profile')} className="header-dropdown-item">My Recipes</DropdownItem>
        <DropdownItem className="header-dropdown-item">Settings</DropdownItem>
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
