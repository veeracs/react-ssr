import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

/*
 *  React Server Side Rendering
 *  Step 1: Get HTML to show up on the screen
 *  Step 2: Load up the React application, have it setup event handlers,
 *  action creators, data loading requests, etc.
 */

app.use(express.static('public'));
app.get('*', (req, res) => {
  const store = createStore();

  //  Some logic to initialize and load data into the store

  const output = renderer(req, store);
  res.send(output);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
