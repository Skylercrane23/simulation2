import React, { Component } from 'react';

// ROUTER
import router from './router';

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
