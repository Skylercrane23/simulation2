import React, { Component } from 'react';

class Auth extends Component {
  render() {
    return (
      <div className="Auth">
        <div className="container">
          <div className="card small">
            <form>
              <h2> Please Login </h2>

              <div className="input-field col s12">
                <i className="material-icons prefix">account_circle</i>
                <input id="first_name" type="text" className="validate" />
                <label htmlFor="first_name">Username</label>
              </div>

              <div className="input-field col s12">
                <i className="material-icons prefix">lock</i>
                <input id="password" type="password" className="validate" />
                <label htmlFor="password">Password</label>
              </div>

              <button className="login btn waves-effect waves-light" type="submit" name="action">Login
              </button>
              <button className="register btn waves-effect waves-light" type="submit" name="action">Register
              </button>

            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Auth;
