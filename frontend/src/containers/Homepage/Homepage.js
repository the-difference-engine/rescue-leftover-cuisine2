import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MainFooter from './components/Footer/Footer.js';
import MainSearch from './components/MainSearch/MainSearch';


class Homepage extends Component {
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
          <Header/>
          <MainSearch/>
          <MainFooter/>
        </div>
      )
    }
  }

export default Homepage;