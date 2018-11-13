import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            state: " "
        }
    }

    render() {

        let styles = {
            logo: {
                width: "80%",
                paddingTop: "10px",
                paddingBottom: "10px"
            },

            centerButtonSection: {
                textAlign: "center"
            },

            donateButton: {
                paddingLeft: "60px",
                paddingRight: "60px"
            }
        };

        return (

            <div className="container-fluid">
                <div className="row">
                    <nav className="navbar navbar-expand-lg navbar-white bg-white navbar-fill fixed-top">

                        <div className="col-md-4">
                            <div className="navbar-brand w-25" href="/">
                        
                                <img src={require('./RLC_LOGO.png')} alt="RLC Logo" style={styles.logo} />
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-6">
                            <span style={styles.centerButtonSection}>
                                <ul className="nav navbar-nav navbar-right btn-group btn-group-lg btn-block">
                                    <div className="btn-group mr-3" role="group" aria-label="browse recipies" style={styles.buttonSize}>
                                        <li><button type="button" className="btn-lg">Browse Recipies</button></li>
                                    </div>
                                    <div className="btn-group mr-3" role="group" aria-label="log in or sign up" style={styles.buttonSize}>
                                        <li><button type="button" className="btn btn-outline-primary btn-lg">Log In or Sign Up</button></li>
                                    </div>
                                    <div className="btn-group mr-3" role="group" aria-label="donate" >
                                        <li><button type="button" className="btn btn-warning btn-lg" style={styles.donateButton}>Donate</button></li>
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