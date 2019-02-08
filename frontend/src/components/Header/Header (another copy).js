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
                <div className="row">
                    <nav className="navbar navbar-expand-lg navbar-white bg-white navbar-fill fixed-top">
                        <div className="col-md-2">
                            <div className="navbar-brand" href="/">
                                <img src={require('../../assets/RLC_logo.png')} alt="RLC Logo" className="logo"/>
                            </div>
                        </div>
                        {/* <div className="col-md-2"></div> */}
                        <div className="offset-5 col-md-5 centerButtonSection">
                            <span className="">
                                <ul className="nav navbar-nav navbar-right btn-group btn-group-lg btn-block">
                                    <div className="btn-group buttonSize" role="group" aria-label="browse recipies">
                                        <li><button type="button" className="btn btn-Light btn-xlg mr-3">Browse Recipes</button></li>
                                    </div>
                                    <div className="btn-group buttonSize" role="group" aria-label="log in or sign up">
                                        <li><button type="button" className="btn btn-outline-primary btn-lg mr-3">Log In or Sign Up</button></li>
                                    </div>
                                    <div className="btn-group buttonSize" role="group" aria-label="donate" >
                                        <li><button type="button" className="btn btn-warning btn-lg donateButton bold mr-3">Donate</button></li>
                                    </div>
                                </ul>
                            </span>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
 }

export default Header;