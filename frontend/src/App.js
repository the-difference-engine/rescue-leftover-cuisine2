import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignUp from './components/SignUp/SignUp';

import AdminPanel from './containers/AdminPanel/AdminPanel';
import Homepage from './containers/Homepage/Homepage';
import LoginPage from './containers/LoginPage/LoginPage';
import CreateRecipe from './containers/CreateRecipe/CreateRecipe';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignUp} />
      <Route path="/admin" component={AdminPanel} />
      <Route path="/recipe/new" component={CreateRecipe} />
    </Switch>
  </div>
);

export default App;
