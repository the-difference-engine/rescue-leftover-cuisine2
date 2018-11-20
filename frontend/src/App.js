import React, { Component } from 'react';
import { Router, Route, Link, Switch } from 'react-router-dom'
import MainFooter from './components/Footer/Footer.js';
import axios from 'axios';
import history from './history';

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
            <h1 className="jumbotron text-center">{this.state.message}</h1>
            <button className="btn">
              <Link to="/footer">Render Footer</Link>
            </button>
            <hr></hr>
            <button className="btn">
              <Link to="/">Now make it go away with a new route</Link>
            </button>

            <Route exact path="/" />
            <Route path="/footer" component={MainFooter} />
        </div>
      </Router>
    
    )
  }
}

export default App;
