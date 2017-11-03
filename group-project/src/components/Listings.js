import React, { Component } from 'react';

import Property from './Property';

class Listings extends Component {
  render() {
    return (
      <div className="Listings">
        <h2> Property Listings</h2>
        <Property/>
        <Property/>
        <Property/>
        <Property/>
      </div>
    );
  }
}

export default Listings;
