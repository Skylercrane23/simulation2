import React, { Component } from 'react';

import { Link } from 'react-router-dom';

// COMPONENTS
import Nav from '../Nav';

class AddStep1 extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      name: props.property.name || '',
      description: props.property.description || ''
    }
  }

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
                  <li><i className="fa-spin fa fa-circle-o-notch" aria-hidden="true"></i></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <div className="progress">
                  <div className="determinate blue lighten-1" style={{ width: '20%' }}></div>
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
                <input id="property-name" type="text" onChange={(e) => this.handleChange('name', e)} value={this.state.name} className="validate" />
                <label htmlFor="property-name">Enter the property name:</label>
              </div>
              <div className="input-field col s12">
                <textarea id="property-description" onChange={(e) => this.handleChange('description', e)} value={this.state.description} className="materialize-textarea"></textarea>
                <label htmlFor="property-description">Enter a description about the property:</label>
              </div>
              <div className="input-field col s6 offset-s6 right-align">
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
    const {name, description} = this.state;

    this.props.onNext({name, description})
  }
}

export default AddStep1;
