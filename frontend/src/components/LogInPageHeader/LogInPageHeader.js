import React, { Component } from 'react';
import Logo from '../../assets/RLC_logo.png';
import "./LogInPageHeader.css"

class LogInPageHeader extends Component {

    render() {
        return (
            <div className="container-fluid">
                <a href="/"><img src={Logo} className="logoCenter" alt="RLC Logo" /></a>
            </div>
 
        )
    }
}

export default LogInPageHeader;