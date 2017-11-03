import React from 'react';
import { Route, Switch } from 'react-router-dom';

// COMPONENT IMPORTS FOR ROUTING
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';

import AddStep1 from './components/steps/AddStep1';
import AddStep2 from './components/steps/AddStep2';
import AddStep3 from './components/steps/AddStep3';
import AddStep4 from './components/steps/AddStep4';
import AddStep5 from './components/steps/AddStep5';

export default (
  <Switch>
    <Route component={ Auth } exact path='/' />
    <Route component={ Dashboard } path="/dashboard" />
    
    <Route component={ AddStep1 } path="/addlisting/1" />
    <Route component={ AddStep2 } path="/addlisting/2" />
    <Route component={ AddStep3 } path="/addlisting/3" />
    <Route component={ AddStep4 } path="/addlisting/4" />
    <Route component={ AddStep5 } path="/addlisting/5" />
  </Switch>
)