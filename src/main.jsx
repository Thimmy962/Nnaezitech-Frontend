import React from 'react';
import createRoot from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

createRoot.render(
  <React.StrictMode>
    <Router basename='/'>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
