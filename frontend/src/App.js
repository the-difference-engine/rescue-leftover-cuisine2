/* global sessionStorage */

import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { getCurrentUser } from './lib/apiClient';
import AdminPanel from './containers/AdminPanel/AdminPanel';
import Homepage from './containers/Homepage/Homepage';
import LoginPage from './containers/LoginPage/LoginPage';
import CreateRecipe from './containers/CreateRecipe/CreateRecipe';
import Recipe from './containers/RecipePage/Recipe';
import ResetPassword from './containers/ResetPassword/ResetPasswordPage';
import ProfilePage from './containers/ProfilePage/ProfilePage';


const App = () => {
  const [user, setUser] = useState(null);
  const [jwt, setJwt] = useState(sessionStorage.jwt);

  useEffect(() => {
    if (jwt == null) {
      sessionStorage.removeItem('jwt');
    } else {
      sessionStorage.setItem('jwt', jwt);
    }
    getCurrentUser()
      .then(response => setUser(response.data))
      .catch(() => setUser(null));
  }, [jwt]);

  return (
    <div>
      <Switch>
        <Route exact path="/" render={props => <Homepage {...props} user={user} setJwt={setJwt} />} />
        <Route path="/login" render={props => <LoginPage {...props} setJwt={setJwt} />} />
        <Route path="/admin" render={props => <AdminPanel {...props} user={user} setJwt={setJwt} />} />
        <Route path="/recipe/new" render={props => <CreateRecipe {...props} user={user} setJwt={setJwt} />} />
        <Route path="/recipe/:id" render={props => <Recipe {...props} user={user} setJwt={setJwt} />} />
        <Route path="/profile" render={props => <ProfilePage {...props} user={user} setJwt={setJwt} />} />
        <Route path="/resetpassword" render={props => <ResetPassword {...props} setJwt={setJwt} />} />
      </Switch>
    </div>
  );
};

export default App;
