import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
<<<<<<< HEAD
=======
import { BrowserRouter as Router } from 'react-router-dom';
>>>>>>> 995ae5bd732e89311852b0c62a8d2e7286eb8dde
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<<<<<<< HEAD
  <React.StrictMode>
    <App />
  </React.StrictMode>
=======
  //<React.StrictMode>
    <Router>
      <App />
    </Router>
  //</React.StrictMode>
>>>>>>> 995ae5bd732e89311852b0c62a8d2e7286eb8dde
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
