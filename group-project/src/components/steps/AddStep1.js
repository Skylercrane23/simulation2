import React, { Component } from 'react';

import { Link } from 'react-router-dom';

// COMPONENTS
import Nav from '../Nav';

class AddStep1 extends Component {
  render() {
    return (
      <div className="AddStep1 steps">
        <Nav />
        <div className="container z-depth-5">

          <div className="row step-heading">
            <div className="col s12 top-step">

              <div className="step-num col s3">
                <h1> Step 1 </h1>
              </div>        
             
              <div className="progress-bar col s6">
                <ul>
                  <li><i class="fa-spin fa fa-circle-o-notch" aria-hidden="true"></i></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <div className="progress">
                  <div className="determinate blue lighten-1" style={{width:'20%'}}></div>
                </div>
              </div>

              <div className="button-container col s3">
                <Link to="/dashboard">
                 <button className="login  red lighten-1 btn waves-effect waves-light" type="submit" name="action"><i class="material-icons right">clear</i>Cancel</button>
                </Link>             
              </div>
             

            </div>
          </div>
         
            <form className="steps-form">
              <div className="row">
                <div className="input-field col s12">
                  <input id="first_name" type="text" className="validate"/>
                  <label for="first_name">Enter the property name:</label>
                </div>
                <div className="input-field col s12">
                  <textarea id="textarea1" className="materialize-textarea"></textarea>
                  <label for="textarea1">Enter a description about the property:</label>
                </div>
                <div className="input-field col s6 offset-s6 right-align">
                  <Link to="/addlisting/2">
                    <button className="login blue lighten-1 btn waves-effect waves-light" type="submit" name="action">Next Step <i class="material-icons right">arrow_forward</i></button>
                  </Link>
                </div>
              </div>
            </form>

        </div>
      </div>
    );
  }
}

export default AddStep1;
