import React, { Component } from 'react';

import { Link } from 'react-router-dom';

// COMPONENTS
import Nav from '../Nav';

class AddStep2 extends Component {
  render() {
    return (
      <div className="AddStep2 steps">
        <Nav />
        <div className="container z-depth-5">
          
          <div className="row step-heading">
            <div className="col s12 top-step">

              <div className="step-num col s3">
                <h1> Step 2 </h1>
              </div>        
             
              <div className="progress-bar col s6">
                <ul>
                  <li><i class="fa fa-check" aria-hidden="true"></i></li>
                  <li><i class="fa-spin fa fa-circle-o-notch" aria-hidden="true"></i></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <div className="progress">
                  <div className="determinate blue lighten-1" style={{width:'40%'}}></div>
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
                  <input id="address" type="text" className="validate"/>
                  <label for="address">Enter the address:</label>
                </div>
                <div className="input-field col s4">
                  <textarea id="textarea1" className="materialize-textarea"></textarea>
                  <label for="textarea1">Enter the city:</label>
                </div>
                <div className="input-field col s4">
                  <textarea id="textarea1" className="materialize-textarea"></textarea>
                  <label for="textarea1">Enter the state:</label>
                </div>
                <div className="input-field col s4">
                  <textarea id="textarea1" className="materialize-textarea"></textarea>
                  <label for="textarea1">Enter the zip:</label>
                </div>

                  <div className="input-field col s6 left-align">
                    <Link to="/addlisting/1">
                      <button className="login blue lighten-1 btn waves-effect waves-light" type="submit" name="action">Previous<i class="material-icons  left">arrow_back</i></button>
                    </Link>
                  </div>
                  <div className="input-field col s6 right-align">
                    <Link to="/addlisting/3">
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

export default AddStep2;
