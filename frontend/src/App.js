import React, { Component } from 'react';
import MainFooter from './components/Footer/Footer';
import axios from 'axios';
import MainSearch from './components/MainSearch/MainSearch';

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
      <div className="App"> 
        <MainSearch/>    
        <MainFooter/>
      </div>
    )
  }
}

export default App;
