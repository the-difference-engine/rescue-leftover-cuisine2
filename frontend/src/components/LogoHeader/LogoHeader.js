import React, { Component } from 'react';
import "./LogoHeader.css"

class LogoHeader extends Component {

  handleInputChange(event) {
      this.setState({ [event.target.name]: event.target.value });
      console.log("handle change", event.target);
  }

  render() {
      return (
        <div className="wrapper">
          <div className="pageLogoDiv">
            <img className="logo" src="https://www.rescuingleftovercuisine.org/assets/RLC_LOGO-900fcd5d7d719b63e43d29ac23775f74f17100194e2690e17833a091b016da85.png" />
          </div>
        </div>
      );
    }
}

export default LogoHeader; 