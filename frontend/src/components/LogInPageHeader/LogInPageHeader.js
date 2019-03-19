import React from 'react';
import Logo from '../../assets/RLC_logo.png';
import './LogInPageHeader.css';

const LogInPageHeader = () => (
  <div className="container-fluid">
    <img src={Logo} className="logoCenter" alt="RLC Logo" />
  </div>
);

export default LogInPageHeader;
