import React, { Component } from 'react';

// COMPONENTS
import Nav from './Nav';
import AddProperty from './AddProperty';
import Filter from './Filter';
import Listings from './Listings';

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <Nav />
        Dashboard Component
        <AddProperty />
        <Filter />
        <Listings />
      </div>
    );
  }
}

export default Dashboard;
