import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import AddPropertyForm from './components/AddPropertyForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route component={ Auth } exact path='/' />
        <Route component={ Dashboard } path="/dashboard" />
        <Route component={ AddPropertyForm } path="/add-listing"  />
      </div>
    );
  }
}

export default App;
