import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';
import Routes from './Routes';
import reportWebVitals from 'reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Routes/>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();