import React, { Component } from 'react';
import {
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';
import './HeaderDropdown.css';
import profilePic from '../../assets/profilePic.PNG';


class HeaderDropdown extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle(state) {
    this.setState({
      dropdownOpen: !state.dropdownOpen,
    });
  }


  render() {
    const { dropdownOpen } = this.state;
    return (
      <Dropdown isOpen={dropdownOpen} toggle={this.toggle}>
        <DropdownToggle type="button" className="headerDropdown-button">
          <img
            src={profilePic}
            alt="User"
            className="headerDropdown-profilePic"
          />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Hi Jason!</DropdownItem>
          <DropdownItem>My Recipes</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Log Out</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default HeaderDropdown;
