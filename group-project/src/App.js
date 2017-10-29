import React, { Component } from 'react';

// COMPONENT IMPORTS
import Nav from './components/Nav';
import Auth from './components/Auth';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Auth />
      </div>
    );
  }
}

export default App;
