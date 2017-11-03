import React, { Component } from 'react';

import { Link } from 'react-router-dom';

// COMPONENTS
import Nav from '../Nav';

class AddStep5 extends Component {
  render() {
    return (
      <div className="AddStep5 steps">
        <Nav />
        <div className="container z-depth-5">
          
          <div className="row step-heading">
            <div className="col s12 top-step">

              <div className="step-num col s3">
                <h1> Step 5 </h1>
              </div>        
             
              <div className="progress-bar col s6">
                <ul>
                  <li><i class="fa fa-check" aria-hidden="true"></i></li>
                  <li><i class="fa fa-check" aria-hidden="true"></i></li>
                  <li><i class="fa fa-check" aria-hidden="true"></i></li>
                  <li><i class="fa fa-check" aria-hidden="true"></i></li>
                  <li><i class="fa-spin fa fa-circle-o-notch" aria-hidden="true"></i></li>
                </ul>
                <div className="progress">
                  <div className="determinate blue lighten-1" style={{width:'100%'}}></div>
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
                  <textarea id="textarea1" className="materialize-textarea"></textarea>
                  <label for="textarea1">Enter your desired rent:</label>
                </div>
                

                  <div className="input-field col s6 left-align">
                    <Link to="/addlisting/4">
                      <button className="login blue lighten-1 btn waves-effect waves-light" type="submit" name="action">Previous<i class="material-icons  left">arrow_back</i></button>
                    </Link>
                  </div>
                  <div className="input-field col s6 right-align">
                    <Link to="/dashboard">
                      <button className="login green lighten-1 btn waves-effect waves-light" type="submit" name="action">Finish <i class="material-icons right">check</i></button>
                    </Link>
                  </div>
                
              </div>
            </form>

        </div>
      </div>
    );
  }
}

export default AddStep5;
