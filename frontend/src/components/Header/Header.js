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
            // <div className="container-fluid">
            //     <div className="row">
            //         <nav className="navbar navbar-expand-lg navbar-white bg-white navbar-fill">
            //             <div className="col-md-2">
            //                 <div className="navbar-brand" href="/">
            //                     <img src={require('../../assets/RLC_logo.png')} alt="RLC Logo" className="logo"/>
            //                 </div>
            //             </div>
            //             {/* <div className="col-md-2"></div> */}
            //             <div className="offset-4 col-md-6 centerButtonSection">
            //                 <span className="">
            //                     <ul className="nav navbar-nav navbar-right btn-group btn-group-lg btn-block">
            //                         <div className="btn-group buttonSize" role="group" aria-label="browse recipies">
            //                             <li><button type="button" className="btn btn-Light btn-xlg">Browse Recipes</button></li>
            //                         </div>
            //                         <div className="btn-group buttonSize" role="group" aria-label="log in or sign up">
            //                             <li><button type="button" className="loginButton btn btn-outline-primary btn-xlg">Log In or Sign Up</button></li>
            //                             {/* <li><button type="button" className="loginButton ml-20 mr-20 btn btn-outline-primary btn-xlg">Log In or Sign Up</button></li> */}


            //                         </div>
            //                         <div className="btn-group buttonSize" role="group" aria-label="donate" >
            //                             <li><button type="button" className="btn btn-warning btn-xlg donateButton bold">Donate</button></li>
            //                         </div>
            //                     </ul>
            //                 </span>
            //             </div>

            <header className="navbar navbar-expand-lg navbar-white bg-white">
                <a className="navbar-brand" href="/">
                    <img src={require('../../assets/RLC_logo.png')} alt="RLC Logo" className="rlcLogo"/>
                </a>
        

{/*                 <form class="form-inline">
                  <button class="btn btn-outline-success pxy-md-5 mx-md-5" type="button">one</button>
                  <button class="btn btn-outline-success pxy-md-5 mx-md-5" type="button">two</button>
                  <button class="btn btn-outline-success pxy-md-5 mx-md-5" type="button">three</button>
                </form> */}
                <a className="btn mt-1 searchArea" href="/">search</a>
                <a className="btn navbar-btn ml-5 px-5 mr-auto topButton browseButton" href="/">Browse Recipes</a>
                <a className="btn navbar-btn ml-0 px-5 mr-auto topButton loginButton" href="/">Log In or Sign Up</a>
                <a className="btn navbar-btn ml-0 px-5 mr-auto topButton donateButton" href="/">Donate</a>
            </header>

        )
    }
 }

export default Header;