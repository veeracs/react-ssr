import express from 'express';
import renderer from './helpers/renderer';

const app = express();

/*
 *  React Server Side Rendering
 *  Step 1: Get HTML to show up on the screen
 *  Step 2: Load up the React application, have it setup event handlers,
 *  action creators, data loading requests, etc.
 */

app.use(express.static('public'));

app.get('/', (req, res) => {
  const output = renderer();
  res.send(output);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
