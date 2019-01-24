import React, { Component } from 'react';
import "./LogoHeader.css"
import Logo from "../../assets/RLC_logo.png";

class LogoHeader extends Component {

  render() {
      return (
        <div className="wrapper">
          <div className="pageLogoDiv">
            <img className="logo" src={Logo} alt="" />
          </div>
        </div>
      );
    }
}

export default LogoHeader; 