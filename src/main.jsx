import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import Store from './store/Store.js';

import App from './App';
import './assets/scss/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
)
