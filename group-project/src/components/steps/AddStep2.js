import React, { Component } from 'react';

import { Link } from 'react-router-dom';

// COMPONENTS
import Nav from '../Nav';

class AddStep2 extends Component {

  constructor(props) {
    super(props) 

    this.state = {
      address: props.property.address || '',
      city: props.property.city || '',
      state: props.property.state || '',
      zip: props.property.zip || ''
    }
  }

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
                  <li><i className="fa fa-check" aria-hidden="true"></i></li>
                  <li><i className="fa-spin fa fa-circle-o-notch" aria-hidden="true"></i></li>
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
                 <button className="login  red lighten-1 btn waves-effect waves-light" type="submit" name="action"><i className="material-icons right">clear</i>Cancel</button>
                </Link>             
              </div>
             

            </div>
          </div>

          <form className="steps-form" onSubmit={ (e) => e.preventDefault() }>
              <div className="row">
                <div className="input-field col s12">
                  <input id="property-address" type="text" onChange={(e) => this.handleChange('address', e)} value={this.state.address} className="validate"/>
                  <label htmlFor="property-address">Enter the address:</label>
                </div>
                <div className="input-field col s4">
                  <textarea id="property-city" onChange={(e) => this.handleChange('city', e)} value={this.state.city} className="materialize-textarea"></textarea>
                  <label htmlFor="property-city">Enter the city:</label>
                </div>
                <div className="input-field col s4">
                  <textarea id="property-state" onChange={(e) => this.handleChange('state', e)} value={this.state.state} className="materialize-textarea"></textarea>
                  <label htmlFor="property-state">Enter the state:</label>
                </div>
                <div className="input-field col s4">
                  <textarea id="property-zip" onChange={(e) => this.handleChange('zip', e)} value={this.state.zip} className="materialize-textarea"></textarea>
                  <label htmlFor="property-zip">Enter the zip:</label>
                </div>

                  <div className="input-field col s6 left-align">
                      <button  className="login blue lighten-1 btn waves-effect waves-light" type="submit" name="action">Previous<i className="material-icons  left">arrow_back</i></button>
                  </div>
                  <div className="input-field col s6 right-align">
                      <button onClick={() => this.onSubmit()} className="login blue lighten-1 btn waves-effect waves-light" type="submit" name="action">Next Step <i className="material-icons right">arrow_forward</i></button>
                  </div>
                
              </div>
            </form>

        </div>
      </div>
    );
  }

  handleChange(fieldName, e) {
    this.setState({
      [fieldName]: e.target.value
    })
  }

  onSubmit() {
    const {imgURL} = this.state;

    this.props.onNext({imgURL})
  }
}

export default AddStep2;
