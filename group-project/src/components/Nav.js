import React, { Component } from 'react';

import axios from 'axios';

// LINKING ROUTES
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div className="Nav z-depth-3">
        <Link to="/">
          <div className="fa fa-home logo" style={{ fontSize: '44px' }}><span>Houser</span></div>
        </Link>

        { window.localStorage.loggedInUser !== "none" && 
        <div>
            Welcome <span className="blue-name"> {window.localStorage.loggedInUser}</span>
            <div  
                onClick={ () => this.logout() } 
                className="logout">
              
              Logout 
                <i  className="fa fa-sign-out" 
                    aria-hidden="true">
                </i>
            </div>
          </div>
        }
      </div>
    );
  }

   // LOGOUT
   logout() {
    axios.get('//localhost:3001/auth/logout')
      .then(res => {
        window.localStorage.setItem("loggedInUser", "none");
        this.props.history.push('/');
    })
  }

}

export default Nav;
