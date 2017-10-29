import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <div className="fa fa-home logo" style={{ fontSize: '44px' }}><span>Houser</span></div>
        <div className="logout">Logout <i className="fa fa-sign-out" aria-hidden="true"></i></div>
      </div>
    );
  }
}

export default Nav;
