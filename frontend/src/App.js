import React, { Component } from 'react';
import { Router, Route, Link} from 'react-router-dom'
import MainFooter from './components/Footer/Footer.js';
import LoginPage from './components/LoginPage/LoginPage.js';
import axios from 'axios';
import history from './history';
import UsersAll from './components/AdminControls/UsersAll.js'
import User from './components/AdminControls/User.js'

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
      <Router history={history}> 
        <div>

          <div className="wrapper">
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
              <Link to="/"><h1 className="navbar-brand">{this.state.message}</h1></Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <Link to="/footer" className="nav-item nav-link active">Render Footer </Link>
                  <Link to="/login" className="nav-item nav-link active">Render Login </Link>
                  <Link to="/" className="nav-item nav-link active">Remove Components</Link>
                </div>
              </div>
            </nav>
          </div>

          <div className="wrapper">
            <Route exact path="/" />
            <Route path="/footer" component={MainFooter} />
            <Route path="/login" component={LoginPage} />
            <Route exact path="/users" history={history} render={(props) => <UsersAll {...props} />} />
            <Route exact path="/users/:id" history={history} render={(props) => <User {...props} />} />
          </div>

        </div>
      </Router>
    
    )
  }
}

export default App;
