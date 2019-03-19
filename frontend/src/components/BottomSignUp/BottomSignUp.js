import React from 'react';
import { withRouter } from 'react-router-dom';
import signupImage from '../../assets/soup-kitchen.jpg';
import './BottomSignUp.css';

const BottomSignUp = ({ history }) => (
  <div className="container-fluid containerSection">
    <div className="bottomSignUp">
      <div className="row">
        <div className="col">
          <img className="signupImage" src={signupImage} alt="sign up" />
        </div>
        <div className="col signupSection">
          <p className="signupText">
            <br />
            <span>
Sign up to create your recipes
              <br />
            </span>
            <span>
              {' '}
and share them with our
              <br />
            </span>
            <span>
              {' '}
community!
              <br />
            </span>
            <br />
            <span className="signupButtonSection">
              <button type="button" className="btn btn-lg" onClick={() => { history.push('/login'); }}>
Sign Up
              </button>
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default withRouter(BottomSignUp);
