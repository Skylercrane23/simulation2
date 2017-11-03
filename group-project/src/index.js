import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/main.css';

// FONT AWESOME
import 'font-awesome/css/font-awesome.min.css';

// FOR ROUTING
import {BrowserRouter } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, 
  
  document.getElementById('root'));
registerServiceWorker();
