import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './containers/Homepage/Homepage.js';
import LoginPage from './containers/LoginPage/LoginPage.js';
import UsersAll from './components/AdminControls/UsersAll.js';
import User from './components/AdminControls/User.js';
import history from './history.js';
 
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Homepage}></Route>
          <Route path='/login' component={LoginPage}></Route>
          <Route exact path='/users' history={history} render={(props) => <UsersAll {...props} />}></Route>
          <Route exact path='/users/:id' history={history} render={(props) => <User {...props} />}></Route>
        </Switch>
      </div>
    )
  }
}

export default App;