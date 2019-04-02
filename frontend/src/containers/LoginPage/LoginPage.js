import React, { Component } from 'react';
import SignUp from '../../components/SignUp/SignUp.js';
import SignIn from '../../components/SignIn/SignIn.js';
import Footer from '../../components/Footer/Footer.js'
import LogInPageHeader from '../../components/LogInPageHeader/LogInPageHeader.js';
import ThankYouCard from '../../components/ThankYouCard/ThankYouCard.js';
import './LoginPage.css';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCreated: false
  }
}
  changeCreatedState = (status) => {
    if (status === 201) {
      this.setState({ isCreated: true })
    }
  }

  renderLoginOrThankYouCard = () => {
    if (this.state.isCreated) {
      return (
       <div className="column mx-auto thankYouColumn"> 
       <ThankYouCard/>
     </div>
      )
    } else {
      return (
       <div className="row">
         <div className="col loginColumnOne"><SignUp changeCreatedState={ this.changeCreatedState } /></div>
         <div className="col loginColumnTwo"><SignIn /></div>
       </div>
      )
    }
  }
 
   render() {
     return(
       <div className="loginPage container-fluid">
       <div className="row">
         <LogInPageHeader/>
       </div>
       <div className="topLoginImage">
         <div className="loginCardWrapper">
             {this.renderLoginOrThankYouCard()}
           <div className="loginFooter row">
             <Footer/>
           </div>
         </div>
       </div>
     </div>
     )
   }
 }
 
 export default LoginPage; 
