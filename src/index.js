import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FEATURES from './STORE';




ReactDOM.render(<App FEATURES={FEATURES} />, document.getElementById('root'));
