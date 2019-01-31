import React, { Component } from 'react';
import Header from '../../components/Header/Header.js'
import Footer from '../../components/Footer/Footer.js';
import MainSearch from '../../components/MainSearch/MainSearch';
import RecipeList from './components/RecipeCard/RecipeCard.js';
import BottomSignUp from './components/BottomSignUp/BottomSignUp.js'

const recipes = [
  {
    photo_url: 'http://placekitten.com/g/325/325',
    meal: 'BREAKFAST',
    title: 'Scrambled Eggs',
    snippet: 'The best scrambled eggs recipe, hands down!',
    difficulty: 'MEDIUM',
    duration: 5,
    servings: 10,
    id: 1,
  },
]

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
          <MainSearch/>
          <RecipeList recipes={recipes} />
          <BottomSignUp/>
          <Footer/>
        </div>
      )
    }
  }

export default Homepage;