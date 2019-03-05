import React, { Component } from 'react';
import "./LogInPageHeader.css"
import Logo from '../../assets/RLC_logo.png';

class LogInPageHeader extends Component {

    render() {
        return (
            <div className="container-fluid">
                <img src={Logo} className="logoCenter"></img>
            </div>
 
        )
    }
}

export default LogInPageHeader;