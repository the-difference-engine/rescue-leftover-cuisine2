import React, { Component } from 'react';
import Header from '../../components/Header/Header.js'
import Footer from '../../components/Footer/Footer.js';
import MainSearch from '../../components/MainSearch/MainSearch';
import RecipeSearchList from '../../components/RecipeSearchList/RecipeSearchList.js';
import BottomSignUp from '../../components/BottomSignUp/BottomSignUp.js';
import './Homepage.css'

class Homepage extends Component {
    constructor(props) {
      super(props)
      this.state = {
        message: 'Loading...'
      }
    }

    render() {
      return (
        <div className="homepage container-fluid ">
          <div className="row">
            <div className="header">
              <Header/>
            </div>
          </div>
          <div className="row">
            <div className="homepageContent">
              <div className="row">
                <MainSearch />
              </div>
              <div className="row">
                <RecipeSearchList />
              </div>
              <div className="row">
                <BottomSignUp/>
              </div>
              <div className="row">
                <Footer/>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

export default Homepage;