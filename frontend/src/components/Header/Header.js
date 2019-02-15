import React, { Component } from 'react';
import "./Header.css"


class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            state: " "
        }
    }

    render() {
        return (
            <div className="container-fluid">
              <header className="navbar navbar-white bg-white fixed-top">
                <div className="row col-sm-2 col-md-2">
                    <a className="navbar-brand" href="/">
                        <img src={require('../../assets/RLC_logo.png')} alt="RLC Logo" className="rlcLogo"/>
                    </a>
                </div>
                <div className="row offset-1 col-sm-3 col-md-3">
                    {/* px-4 add padding on left and right */}
                    <a className="btn navbar-btn px-4 topButton browseButton" href="/">Browse Recipes</a>
                </div>
                <div className="row col-sm-2 col-md-2">
                    <a className="btn navbar-btn px-4 topButton loginButton" href="/login">Log In or Sign Up</a>
                </div>
                <div className="row col-sm-2 col-md-2">
                    <a className="btn navbar-btn px-4 topButton donateButton" href="/">Donate</a>
                </div>
              </header>
            </div>
        )
    }
}

export default Header;