/* global localStorage */

import isNil from 'lodash/isNil';
import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { getCurrentUser } from './lib/apiClient';
import AdminPanel from './containers/AdminPanel/AdminPanel';
import Homepage from './containers/Homepage/Homepage';
import LoginPage from './containers/LoginPage/LoginPage';
import CreateRecipe from './containers/CreateRecipe/CreateRecipe';
import Recipe from './containers/RecipePage/Recipe';
import ResetPassword from './containers/ResetPassword/ResetPasswordPage';
import ProfilePage from './containers/ProfilePage/ProfilePage';
import ResetRequestPage from './containers/ResetRequestPage/ResetRequestPage';
import ThanksPage from './containers/ThanksPage/ThanksPage';
import ConfirmUser from './components/ConfirmUser/ConfirmUser';

const App = () => {
  const [user, setUser] = useState(null);
  const [jwt, setJwt] = useState(localStorage.jwt);

  useEffect(() => {
    if (isNil(jwt)) {
      localStorage.removeItem('jwt');
      setUser(null);
      return;
    }

    localStorage.setItem('jwt', jwt);
    getCurrentUser()
      .then(response => setUser(response.data))
      .catch(() => setUser(null));
  }, [jwt]);

  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={props => <Homepage {...props} user={user} setJwt={setJwt} />}
        />
        <Route path="/login" render={props => <LoginPage {...props} setJwt={setJwt} />} />
        <Route
          path="/admin"
          render={props => <AdminPanel {...props} user={user} setJwt={setJwt} />}
        />
        <Route
          path="/recipe/new"
          render={props => <CreateRecipe {...props} user={user} setJwt={setJwt} />}
        />
        <Route
          path="/recipe/:id"
          render={props => <Recipe {...props} user={user} setJwt={setJwt} />}
        />
        <Route
          path="/profile"
          render={props => <ProfilePage {...props} user={user} setJwt={setJwt} />}
        />
        <Route
          path="/resetpassword"
          render={props => <ResetPassword {...props} setJwt={setJwt} />}
        />
        <Route
          path="/api/v1/confirmation"
          render={props => <ConfirmUser {...props} user={user} setJwt={setJwt} />}
        />
        <Route path="/resetrequest" component={ResetRequestPage} />
        <Route exact path="/thanks" component={ThanksPage} />

        <Route // kludge until we can fix the routes in the email
          path="/api/v1/password/edit"
          render={props => (
            <Redirect to={{
              pathname: '/resetpassword',
              search: props.location.search,
            }}
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
