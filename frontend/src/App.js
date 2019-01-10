import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-browser-dom';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Loading...'
    }
  }

  componentDidMount() {
    axios.get('/api/message.json')
    .then(response => {
      this.setState({ message: response.data.message })
    })
    .catch(console.error)
  }
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
