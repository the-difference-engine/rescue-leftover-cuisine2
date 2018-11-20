import React, { Component } from 'react';
// import './App.css';
import SignIn from './components/sign_in/sign_in';
import SignUp from './components/sign_up/sign_up';
import RecipeCard from './components/recipe_card/recipe_card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        {/* <SignUp />
        <SignIn /> */}
        <RecipeCard />
      </div>
    );
  }
}

export default App;
