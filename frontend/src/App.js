import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-browser-dom';
import Homepage from './containers/Homepage';
import LoginPage from './containers/LoginPage';
import SignUp from './components/SignUp';
import UsersAll from './components/AdminControls/UsersAll';
import User from './components/AdminControls/User';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={Homepage}></Route>
            <Route path='/login' component={LoginPage}></Route>
            <Route path='/signup' component={SignUp}></Route>
            <Route exact path='/users' history={history} render={(props) => <UsersAll {...props} />}></Route>
            <Route exact path='/users/:id' history={history} render={(props) => <User {...props} />}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
