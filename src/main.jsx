// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter } from "react-router-dom";
// import './index.css'


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
// )


import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
