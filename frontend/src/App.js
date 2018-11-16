import React, { Component } from 'react';
import PageFooter from './common/Footer';
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
      <div className="App">
         {/*  
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" /> 
              <p>{this.state.message}</p>
            </header>        
        */}       
        <PageFooter />
      </div>
    )
  }
}

export default App;
