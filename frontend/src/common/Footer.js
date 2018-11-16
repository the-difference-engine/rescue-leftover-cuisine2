import React, {Component } from 'react';      

class PageFooter extends Component {


  render (){
    // Colors are different shades of grey
    let styles = {
          designBySection: {
            fontSize: "17px",
            opacity: ".5",
            color: "#757373",
            textAlign: "center",
            paddingTop: "12px",
            fontWeight: "500"
          },
          designByCo: {
            fontSize: "17px",
            color: "#1f1e1e",
            fontWeight: "600",
            paddingTop: "12px"
          },
          company: {
            fontSize: "25px",
            fontWeight: "400",
            textAlign: "center",
            opacity: ".7",
            color: "#666565"
          },
          containerSection: {
            width: "100%",
            height: "50px",
            marginLeft: "0",
            marginRight: "0",
            fontWeight: "600",
            paddingLeft: "0",
            paddingRight: "0",
            paddingTop: "20px"
          },
          iconSection: {
           paddingRight: "40px"
          },
          iconStyle: {
            color: "#a49f9f",
            fontWeight: "700",
            paddingLeft: "9px",
            paddingRight: "9px"
          }
      };

    return (
      <div className='container-fluid' style={styles.containerSection}>
        <div className="footer">
          <div className='row'>
            {/* Empty placeholder section */}
            <div className="col"></div>
            <div className='col' style={styles.company}>
              <span>&copy;2018 Rescuing Leftover Cuisine</span>
            </div>
            <div className='col' style={styles.iconSection}>
             <span className='float-right'>
               <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCJKK9jkEIHt8j17cHPHCPQw"><i className="fab fa-youtube fa-2x" style={styles.iconStyle}></i></a>
               <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/RescuingLeftoverCuisine"><i className="fab fa-facebook-f fa-2x" style={styles.iconStyle} target="_blank" rel="noopener noreferrer"></i></a>
               <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/rescuingcuisine"><i className="fab fa-twitter fa-2x" style={styles.iconStyle} target="_blank" rel="noopener noreferrer"></i></a>
               <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/rescuingleftovercuisine"><i className="fab fa-instagram fa-2x" style={styles.iconStyle} target="_blank" rel="noopener noreferrer"></i></a>
               <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/rescuing-leftover-cuisine"><i className="fab fa-linkedin-in fa-2x" style={styles.iconStyle} target="_blank" rel="noopener noreferrer"></i></a>
               <a target="_blank" rel="noopener noreferrer" href="mailto:info@resuingleftovercuisine.org"><i className="fas fa-envelope fa-2x" style={styles.iconStyle} target="_blank" rel="noopener noreferrer"></i></a>
             </span>
            </div>          
          </div>
          <div className="row">
             {/* Empty placeholder section */}
             <div className='col'></div>
             <div className='col' style={styles.designBySection}>
               <span>Designed by </span>
               <span style={styles.designByCo}>Fluid Designs</span>
            </div>
            <div className='col'></div>
          </div>
        </div>
      </div>      
    )
 }
}

export default PageFooter;
