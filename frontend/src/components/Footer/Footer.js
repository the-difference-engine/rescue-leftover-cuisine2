import React from 'react';
import './Footer.css';

const Footer = () => (
  <div className="container-fluid containerSection">
    <div className="footer">
      <div className="row">
        {/* Empty placeholder section */}
        <div className="col-md-4" />
        <div className="col-md-4 company">
          <span>&copy;2018 Rescuing Leftover Cuisine</span>
        </div>
        <div className="col-md-4 iconSection">
          <span className="float-right">
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCJKK9jkEIHt8j17cHPHCPQw"><i className="fab fa-youtube fa-2x iconStyle" /></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/RescuingLeftoverCuisine"><i className="fab fa-facebook-f fa-2x iconStyle" /></a>
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/rescuingcuisine"><i className="fab fa-twitter fa-2x iconStyle" /></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/rescuingleftovercuisine"><i className="fab fa-instagram fa-2x iconStyle" /></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/rescuing-leftover-cuisine"><i className="fab fa-linkedin-in fa-2x iconStyle" /></a>
            <a target="_blank" rel="noopener noreferrer" href="mailto:info@resuingleftovercuisine.org"><i className="fas fa-envelope fa-2x iconStyle" /></a>
          </span>
        </div>
      </div>
      <div className="row">
        {/* Empty placeholder section */}
        <div className="col-md-4" />
        <div className="col-md-4 designBySection">
          <span>Designed by </span>
          <span className="designByCo">Fluid Designs</span>
          <p>
App icons by
            <a href="https://icons8.com/" target="_blank" rel="noopener noreferrer"> icons8.</a>
          </p>
        </div>

        <div className="col-md-4" />
      </div>
    </div>
  </div>
);

export default Footer;
