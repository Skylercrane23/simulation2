import React, { Component } from 'react';

import { Link } from 'react-router-dom';

// COMPONENTS
import Nav from '../Nav';

class AddStep3 extends Component {

  constructor(props) {
    super(props) 

    this.state = {
      imgURL: props.property.imgURL || ''
    }
  }

  render() {
    return (
      <div className="AddStep3 steps">
        <Nav />
        <div className="container z-depth-5">
          
          <div className="row step-heading">
            <div className="col s12 top-step">

              <div className="step-num col s3">
                <h1> Step 3 </h1>
              </div>        
             
              <div className="progress-bar col s6">
                <ul>
                  <li><i className="fa fa-check" aria-hidden="true"></i></li>
                  <li><i className="fa fa-check" aria-hidden="true"></i></li>
                  <li><i className="fa-spin fa fa-circle-o-notch" aria-hidden="true"></i></li>
                  <li></li>
                  <li></li>
                </ul>
                <div className="progress">
                  <div className="determinate blue lighten-1" style={{width:'60%'}}></div>
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
                <div className="img-preview-container grey lighten-3"
                  alt="Preview Image"
                  style={{
                    backgroundImage: 'url(http://thomasmoorehomes.com/wp-content/uploads/2017/07/exterior-modern-home-design-16-strikingly-ideas-interior-and-exterior-house-design-design-unique-modern-home.jpg)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>
                  {/* <img className="materialboxed responsive-img" src="" alt="Image Preview"/> */}
                </div>
                <div className="input-field col s12">
                  <input id="property-imageUrl" onChange={(e) => this.handleChange('address', e)} value={this.state.address} type="text" className="validate"/>
                  <label htmlFor="imageUrl">Enter the image url:</label>
                </div>
               

                  <div className="input-field col s6 left-align">
                    <Link to="/addlisting/2">
                      <button className="login blue lighten-1 btn waves-effect waves-light" type="submit" name="action">Previous<i className="material-icons  left">arrow_back</i></button>
                    </Link>
                  </div>
                  <div className="input-field col s6 right-align">
                    <Link to="/addlisting/4">
                      <button onClick={() => this.onSubmit()} className="login blue lighten-1 btn waves-effect waves-light" type="submit" name="action">Next Step <i className="material-icons right">arrow_forward</i></button>
                    </Link>
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
    const {address, city, state, zip} = this.state;

    this.props.onNext({address, city, state, zip})
  }
}

export default AddStep3;
