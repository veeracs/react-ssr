// Client Side Application bootup
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';

/*
 * Hydration - Re-hydrate our application on the browwer
 * The process of re-rendering the once rendered HTML is hydration
 */
ReactDOM.hydrate(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>,
    document.querySelector('#root')
);

