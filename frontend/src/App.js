import React, { Component } from 'react';
import SignIn from './components/sign_in/sign_in';
import SignUp from './components/sign_up/sign_up';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
          <SignUp />
          <SignIn />
      </div>
    );
  }
}

export default App;
