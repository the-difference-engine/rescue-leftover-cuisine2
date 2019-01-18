import React, { Component } from 'react';
import Header from 'src/components/Header/Header.js'
import Footer from 'src/components/Footer/Footer.js';
import MainSearch from 'src/components/MainSearch/MainSearch';


class Homepage extends Component {
    constructor(props) {
      super(props)
      this.state = {
        message: 'Loading...'
      }
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