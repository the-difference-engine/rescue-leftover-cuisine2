import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './containers/Homepage/Homepage.js';
import LoginPage from './containers/LoginPage/LoginPage.js';
import SignUp from './components/SignUp/SignUp.js';
import AdminPanel from './containers/AdminPanel/AdminPanel'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUp} />
          <Route path="/admin" component={AdminPanel} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
