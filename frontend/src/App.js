/* global localStorage */

import isNil from 'lodash/isNil';
import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
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
import Page404 from './containers/Page404/Page404';

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
      <Helmet titleTemplate="%s | Rescuing Leftover Cuisine" defaultTitle="Rescuing Leftover Cuisine">
        <meta property="og:title" content="Rescuing Leftover Cuisine" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://rlc-prod.herokuapp.com/static/media/RLC_logo.4e05bcde.png" />
        <meta property="og:image:alt" content="Rescuing Leftover Cuisine Logo" />
      </Helmet>

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
          exact
          path="/recipe/:id"
          render={props => <Recipe {...props} user={user} setJwt={setJwt} />}
        />
        <Route
          path="/recipe/:id/edit"
          render={props => <CreateRecipe {...props} user={user} setJwt={setJwt} />}
        />
        <Route
          path="/profile"
          render={props => <ProfilePage {...props} user={user} setUser={setUser} setJwt={setJwt} />}
        />
        <Route
          path="/resetpassword"
          render={props => <ResetPassword {...props} setJwt={setJwt} />}
        />
        <Route
          path="/api/v1/confirmation"
          render={props => <ConfirmUser {...props} setJwt={setJwt} />}
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
        <Route component={Page404} />
      </Switch>
    </div>
  );
};

export default App;
