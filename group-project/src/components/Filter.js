import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <div className="Filter row">
        
        <div className="left col s4">
          <h2>Filter Properties</h2>
          <p>List properties with "desired rent" greator than:</p>
        </div>
        <div className="right col s8">
          <form className="col s12">
            <div className="row flex-items">
              <div className="input-field col s6">
                <input placeholder="$ Desired Rent" id="first_name" type="text" className="validate"/>
                <label for="first_name">$ Desired Rent</label>
              </div>
              <button className="filter btn waves-effect waves-light" type="submit" name="action">Filter</button>
              <button className="reset btn waves-effect waves-light" type="submit" name="action">Reset</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Filter;
