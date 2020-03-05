import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBounders from './components/error-boundry';
import { GlobalProvider } from './context/GlobalState';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <GlobalProvider>
    <ErrorBounders>
      <Router>
        <App />
      </Router>
    </ErrorBounders>
  </GlobalProvider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
