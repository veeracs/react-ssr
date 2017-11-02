// Client Side Application bootup
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

/*
 * Hydration - Re-hydrate our application on the browwer
 * The process of re-rendering the once rendered HTML is hydration
 */
ReactDOM.hydrate(<Home />, document.querySelector('#root'));
