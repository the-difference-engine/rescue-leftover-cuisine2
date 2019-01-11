import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-browser-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={LandingPage}></Route>
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
