import React, { Component } from 'react';

class Property extends Component {
  render() {
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
                  <h2 className="prop-name">Property Name</h2>
                  <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Cras ultricies ligula sed magna dictum porta. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus</p>
                </div>

                <div className="right col s5">
                  <ul>
                    <li><span className="bold">Loan:</span> Loan Amount</li>
                    <li><span className="bold">Monthly Mortgage:</span> 10,000</li>
                    <li><span className="bold">Recommended Rent:</span> $800</li>
                    <li><span className="bold">Desired Rent:</span> 750</li>
                    <li><span className="bold">Address:</span>2447 W 600 S</li>
                    <li><span className="bold">City:</span> Springville</li>
                    <li><span className="bold">State:</span> Utah</li>
                    <li><span className="bold">Zip:</span> 84663</li>
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
}

export default Property;
