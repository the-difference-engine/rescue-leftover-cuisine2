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
        message: 'Loading...',
        search: null
      };
    }
  
  setSearchTerm(searchTerm) {
    this.setState({
      search: searchTerm
    })
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
                <MainSearch setSearchTerm={ this.setSearchTerm.bind(this) }/>
              </div>
              <div className="row suggestions">
                <div className="col-12">
                  <h2>Our Suggestions</h2>
                  <br></br>
                  <h6>Based on this week's popular ingredient donations</h6>
                </div>
              </div>
              <div className="row">
                <RecipeSearchList search={this.state.search}/>
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