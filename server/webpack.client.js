/*
 * Client Side Bundle - React App - Ship this bundle down to the browser
 * React App on the client attempts to re-render entire React application
 * a second time into the same div (on the browser). React renders out app
 * on the client side, and compares the new HTML to what already exists in
 * the document.
 */

const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
  //  tell webpack, the entry point of server application
  entry: './src/client/client.js',
  
  //  tell webpack, where to put the output file generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  }
};

module.exports = merge(baseConfig, config);
