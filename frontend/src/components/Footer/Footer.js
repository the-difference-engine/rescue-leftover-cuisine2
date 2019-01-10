import React, {Component } from 'react';   
import "./Footer.css";   

class MainFooter extends Component {
  render (){
    return (
      <div className='container-fluid containerSection'>
        <div className="footer">
          <div className='row'>
            {/* Empty placeholder section */}
            <div className="col"></div>
            <div className='col company'>
              <span>&copy;2018 Rescuing Leftover Cuisine</span>
            </div>
            <div className='col iconSection'>
             <span className='float-right'>
               <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCJKK9jkEIHt8j17cHPHCPQw"><i className="fab fa-youtube fa-2x iconStyle"></i></a>
               <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/RescuingLeftoverCuisine"><i className="fab fa-facebook-f fa-2x iconStyle"></i></a>
               <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/rescuingcuisine"><i className="fab fa-twitter fa-2x iconStyle"></i></a>
               <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/rescuingleftovercuisine"><i className="fab fa-instagram fa-2x iconStyle"></i></a>
               <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/rescuing-leftover-cuisine"><i className="fab fa-linkedin-in fa-2x iconStyle"></i></a>
               <a target="_blank" rel="noopener noreferrer" href="mailto:info@resuingleftovercuisine.org"><i className="fas fa-envelope fa-2x iconStyle"></i></a>
             </span>
            </div>          
          </div>
          <div className="row">
             {/* Empty placeholder section */}
             <div className='col'></div>
             <div className='col designBySection'>
               <span>Designed by </span>
               <span className='designByCo'>Fluid Designs</span>
            </div>
            <div className='col'></div>
          </div>
        </div>
      </div>
    )
 }
}

export default MainFooter;
