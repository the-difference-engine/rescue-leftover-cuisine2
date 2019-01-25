import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './containers/Homepage/Homepage.js';
import LoginPage from './containers/LoginPage/LoginPage.js';
import SignUp from './components/SignUp/SignUp.js';
import UsersAll from './components/AdminControls/UsersAll.js';
import User from './components/AdminControls/User.js';
import history from './history.js';
import RecipeList from './components/recipeCard/recipeCard.js';


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
 
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Homepage}></Route>
          <Route path='/login' component={LoginPage}></Route>
          <Route path='/signup' component={SignUp}></Route>
          <Route exact path='/users' history={history} render={(props) => <UsersAll {...props} />}></Route>
          <Route exact path='/users/:id' history={history} render={(props) => <User {...props} />}></Route>
        </Switch>
        <RecipeList recipes={recipes} />
      </div>
    )
  }
}

export default App;