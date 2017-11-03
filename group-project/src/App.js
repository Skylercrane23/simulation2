import React, { Component } from 'react';

// ROUTER
import router from './router';

// COMPONENT IMPORTS
import Nav from './components/Nav';
import Auth from './components/Auth';

class App extends Component {
  render() {
    return (
      <div className="App">
        { router }
      </div>
    );
  }
}

export default App;
