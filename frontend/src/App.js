import React, { Component } from 'react';
import Header from "./common/Header/Header.js"
// import './App.css';
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
      <div> 
        <Header />
      </div>
    );
  }
}

export default App;
