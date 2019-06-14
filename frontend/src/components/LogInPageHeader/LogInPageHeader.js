import React from 'react';
import Logo from '../../assets/RLC_logo.png';
import './LogInPageHeader.css';

const LogInPageHeader = () => (
  <div className="container-fluid text-center">
    <a href="/">
      <img src={Logo} className="logoCenter" alt="RLC Logo" />
    </a>
  </div>
);

export default LogInPageHeader;
