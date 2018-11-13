import React, { Component } from 'react';
// import './App.css';
import SignIn from './components/sign_in/sign_in';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
          <SignIn />
      </div>
    );
  }
}

export default App;
