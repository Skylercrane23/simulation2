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
        <div className="container z-depth-5">
          <div className="row dashboard-heading">
            <div className="col s6 align-left">
              <h1> Dashboard </h1>
            </div>
            <div className="col s6 right-align">
              <AddProperty/>
            </div>
          </div>
          <Filter />
          {/* <Listings /> */}

        </div>
      </div>
    );
  }
}

export default Dashboard;
