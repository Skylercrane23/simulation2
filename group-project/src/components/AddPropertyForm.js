import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import AddStep1 from './steps/AddStep1';
import AddStep2 from './steps/AddStep2';
import AddStep3 from './steps/AddStep3';
import AddStep4 from './steps/AddStep4';
import AddStep5 from './steps/AddStep5';

class AddPropertyForm extends Component {
    state = {
        stepNum: 1,
        property: {}
    }
    render() {
        const { match } = this.props;
        const steps = [
            AddStep1,
            AddStep2,
            AddStep3,
            AddStep4,
            AddStep5,
        ].map((StepComponent, i) => (
            <Route
                key={`add-property-form-${i}`}
                render={(props) => (
                    <StepComponent onNext={update => this.onNext(update)} onPrevious={update => this.onPrevious(update)} property={this.state.property} {...props} />
                )}
                path={`${match.url}/${i + 1}`} />
        ))

        return (
            <div className="AddPropertyForm">
                {steps}
                <Route
                    path={match.url}
                    exact
                    render={() => <Redirect to={`${match.url}/${this.state.stepNum}`}/>}
                />
            </div>
        );
    }

    onNext(update) {
        console.log(update);
        this.updateProperty(update, this.state.stepNum + 1)
    }

    onPrevious(update) {
        console.log(update);
        this.updateProperty(update, this.state.stepNum - 1)
        
    }

    updateProperty(update, nextStep) {
        this.setState({
            property: {
                ...this.state.property,
                ...update
            },
            stepNum: nextStep
        }, () => this.props.history.push(`${this.props.match.url}/${this.state.stepNum}`))
    }
}

export default AddPropertyForm;