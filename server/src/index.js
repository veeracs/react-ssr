import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';

import Routes from './client/Routes';
import { matchRoutes } from 'react-router-config';
import createStore from './helpers/createStore';

const app = express();

/*
 *  React Server Side Rendering
 *  Step 1: Get HTML to show up on the screen
 *  Step 2: Load up the React application, have it setup event handlers,
 *  action creators, data loading requests, etc.
 */

 // tells express to use public dir as a static dir to the outside world
app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();

  const promises = matchRoutes(Routes, req.path).map(({route}) => {
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(() => {
    //  Some logic to initialize and load data into the store
    const output = renderer(req, store);
    res.send(output);
  });

});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
