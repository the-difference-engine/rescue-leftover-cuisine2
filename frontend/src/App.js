import React, { Component } from 'react';
// import './App.css';
import SignIn from './components/sign_in/sign_in';
import SignUp from './components/sign_up/sign_up';
import RecipeList from './components/recipe_card/recipe_card';
import PunkCat from './assets/punk_cat.jpg';
import ChuckNorris from './assets/chuck_norris.jpeg';
import SnapeVoice from './assets/snape_voice.jpg';
import CatReligion from './assets/cat_religion.jpg';

const recipes = [
  {
    id: 1,
    name: PunkCat,
    alternate: 'Cat in Punk Rock Vest',
    meal: 'DINNER',
    title: "I am the Cat's title!",
    text: "I am the Cat's text!",
  },
  {
    id: 2,
    name: ChuckNorris,
    alternate: 'Chuck Norris Quote',
    meal: 'BREAKFAST',
    title: "I am Chuck's title!",
    text: "I am Chuck's text!",
  },
  {
    id: 3,
    name: SnapeVoice,
    alternate: 'Snape v Potter',
    meal: 'BRUNCH',
    title: "I am Snape's title!",
    text: "I am the Snape's text!",
  },
  {
    id: 4,
    name: CatReligion,
    alternate: 'Cat Religion',
    meal: 'LUNCH',
    title: "I am the Cat Religion's title!",
    text: "I am the Cat Religion's text!",
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        {/* <SignUp />
        <SignIn /> */}
        <RecipeList recipes={recipes} />
      </div>
    );
  }
}

export default App;
