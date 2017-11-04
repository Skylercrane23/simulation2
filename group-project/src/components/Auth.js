import React, { Component } from 'react';
import axios from 'axios';

import Nav from './Nav';

class Auth extends Component {
  state = {
    username: '',
    password: '',
    errMessage: ''
  };

  render() {
    return (
      <div>
        <Nav/>
        <div className="Auth">
          <div className="container">
            <div className="card small">
              <form 
                  onSubmit={ (e) => e.preventDefault() }>
                <h2> Please Login or Register</h2>
                
                <div className="input-field col s12">
                  <i className="material-icons prefix">person</i>
                  <input 
                      onChange={ (e) => this.setState({username: e.target.value}) } 
                      value={this.state.username} 
                      id="username" 
                      type="text" 
                      className="validate" />
                  <label htmlFor="username">Username</label>
                </div>

                <div className="input-field col s12">
                  <i className="material-icons prefix">lock</i>
                  <input 
                      onChange={ (e) => this.setState({password: e.target.value}) } 
                      value={this.state.password} 
                      id="password" 
                      type="password" 
                      className="validate" />
                  <label htmlFor="password">Password</label>
                </div>
              
                  <button 
                      className="login btn waves-effect waves-light" 
                      type="submit" 
                      name="action"
                  >
                      Login
                  </button>
              
                  <button 
                      onClick={ () => this.register() }
                      className="register btn waves-effect waves-light" 
                      type="submit" 
                      name="action"
                    >
                    Register
                  </button>
                  
              </form>
            </div>
          </div>
        </div>
      </div>
      
    );
  }

  // REGISTER
  register() {
    axios.post('//localhost:3001/auth/register', { username: this.state.username, password: this.state.password } )
    .then(res => {
      this.props.history.push('/dashboard');
    })
    .catch( err => {
      debugger;
      this.setState({ 
        errMessage: err.response.data.message
      }) 
    });
  }

  // LOGIN

}

export default Auth;
