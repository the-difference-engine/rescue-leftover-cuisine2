import React, { Component } from 'react';
import Header from '../../components/Header/Header.js'
import Footer from '../../components/Footer/Footer.js';
import MainSearch from '../../components/MainSearch/MainSearch';
import RecipeSearchList from '../../components/RecipeSearchList/RecipeSearchList.js';
import BottomSignUp from '../../components/BottomSignUp/BottomSignUp.js'

class Homepage extends Component {
    constructor(props) {
      super(props)
      this.state = {
        message: 'Loading...'
      }
    }

    render() {
      return (
        <div className="wrapper">
          <Header/>
          <MainSearch />
          <RecipeSearchList />
          <BottomSignUp/>
          <Footer/>
        </div>
      )
    }
  }

export default Homepage;