// Client Side Application bootup
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from './Routes';

/* Redux Helpers
  1. Redux needs different configuration on browser vs server
  2. Aspects of authentication needs to be handled on the server
  3. Need some way to detect when all data load action creators are completed on the server.
  4. Need state rehydration on the browser

  createStore - used to make a Redux store
  applyMiddleware - hooks up middleware
  thunk - handles asynchronous action creators
  Provider -  React component that is used to communicate data from the store to any connected components in our application
*/
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers';

const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk));

/*
 * Hydration - Re-hydrate our application on the browwer
 * The process of re-rendering the once rendered HTML is hydration
 */
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);

