import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class AddProperty extends Component {
  render() {
    return (
      <div className="AddProperty">
        <Link to="/addlisting/1">
          <button className="login btn waves-effect waves-light" type="submit" name="action">Add New Property</button>
        </Link>      
      </div>
    );
  }
}

export default AddProperty;
