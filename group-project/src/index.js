import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './css/main.css';

// FONT AWESOME
import 'font-awesome/css/font-awesome.min.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
