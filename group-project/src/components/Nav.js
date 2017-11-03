import React, { Component } from 'react';

// LINKING ROUTES
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <Link to="/">
          <div className="fa fa-home logo" style={{ fontSize: '44px' }}><span>Houser</span></div>
        </Link>
        <Link to="/">
          <div className="logout">Logout <i className="fa fa-sign-out" aria-hidden="true"></i></div>
        </Link>
      </div>
    );
  }
}

export default Nav;
