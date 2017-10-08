import React from 'react';
import ReactDom from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import App from './App';
import { appReducer } from './reducers';

import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

const appStore = createStore(appReducer, applyMiddleware(logger));

ReactDom.render(
  <Provider store={appStore}>
    <App />
  </Provider>
  ,
  document.querySelector('main')
);

registerServiceWorker();
