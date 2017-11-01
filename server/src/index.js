import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import Home from './client/components/Home';

const app = express();

/*
 *  React Server Side Rendering
 *  Step 1: Get HTML to show up on the screen
 *  Step 2: Load up the React application, have it setup event handlers,
 *  action creators, data loading requests, etc.
 */
app.get('/', (req, res) => {
    const content = renderToString(<Home />);
    res.send(content);
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
