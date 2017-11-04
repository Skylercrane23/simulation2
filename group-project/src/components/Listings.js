import React, { Component } from 'react';

import Property from './Property';

class Listings extends Component {
  render() {

    const listings = this.props.listings.map( (listing) => {
      return <Property listing={listing} />;
    });

    return (
      <div className="Listings">
        <h2> Property Listings</h2>
       
       {listings}
       
        {/* <Property/>
        <Property/>
        <Property/>
        <Property/> */}
      </div>
    );
  }
}

export default Listings;
