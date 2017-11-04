import React, { Component } from 'react';
import axios from 'axios';

function Property(props) {

  // constructor() {
  //   super()
  //     this.state = {
  //       listingData: {}
  //     };
  // }

  // componentWillMount() {
  //   this.getListingData();
  // }

  // getListingData() {
  //   axios.get('//localhost:3001/api/properties')
  //     .then(res => {
  //       this.setState({ listingData: res.data })
  //     });
  // }
  
  // state = {
  //     listingData: ''
  //     propertyName: '',
  //     propertyDesc: '',
  //     propertyAddress: '',
  //     propertyCity: '',
  //     propertyState: '',
  //     propertyZip: '',
  //     propertyImgUrl: '',
  //     propertyLoanTotal: '',
  //     propertyMortgage: '',
  //     propertyDesiredRent: ''
  // };

  
    return (
      <div className="Property">

        <div className="row">
          <div className="col s12 m12">

            <div className="card z-depth-3">
              <a href=""><i className="delete-icon material-icons right">close</i></a>
              <div className="image " 
                style = {{ 
                  backgroundImage: 'url(http://thomasmoorehomes.com/wp-content/uploads/2017/07/home-interiors-2-plush-design-patina-home-interiors-home.jpg)' 
                }}> 
              </div>

              <div className="property-info row">
                <div className="left col s7">
                  
                  <h2 className="prop-name">
                    {props.listing.prop_name}
                  </h2>

                  <p>{props.listing.prop_desc}</p>
                </div>

                <div className="right col s5">
                  <ul>
                    <li><span className="bold">Loan:</span> {props.listing.loan_tot} </li>
                    <li><span className="bold">Monthly Mortgage:</span> {props.listing.mortgage} </li>
                    <li><span className="bold">Desired Rent:</span> {props.listing.desired_rent} </li>
                    <li><span className="bold">Address:</span> {props.listing.address} </li>
                    <li><span className="bold">City:</span> {props.listing.city} </li>
                    <li><span className="bold">State:</span> {props.listing.state} </li>
                    <li><span className="bold">Zip:</span> {props.listing.zip} </li>
                  </ul>
                </div>
              </div>

            </div>
            {/* END CARD */}

          </div>
        </div>
                  

      </div>
    );
  }



export default Property;
