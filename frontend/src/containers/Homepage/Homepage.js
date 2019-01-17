import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js';
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
          <Header/>
          <MainSearch/>
          <Footer/>
        </div>
      )
    }
  }

export default Homepage;