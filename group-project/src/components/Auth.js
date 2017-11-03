import React, { Component } from 'react';

// LINKING ROUTES
import { Link } from 'react-router-dom';

import Nav from './Nav';

class Auth extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <div className="Auth">
        <div className="container">
          <div className="card small">
            <form>
              <h2> Please Login or Register</h2>

              <div className="input-field col s12">
                <i className="material-icons prefix">person</i>
                <input id="first_name" type="text" className="validate" />
                <label htmlFor="first_name">Username</label>
              </div>

              <div className="input-field col s12">
                <i className="material-icons prefix">lock</i>
                <input id="password" type="password" className="validate" />
                <label htmlFor="password">Password</label>
              </div>

              <Link to="/dashboard">
                <button className="login btn waves-effect waves-light" type="submit" name="action">Login</button>
              </Link>
              <Link to="/dashboard">
                <button className="register btn waves-effect waves-light" type="submit" name="action">Register</button>
              </Link>

            </form>
          </div>
        </div>
      </div>
      </div>
      
    );
  }
}

export default Auth;
