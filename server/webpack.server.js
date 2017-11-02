/*
 * Server Side Bundle - Server Code + React App - Code runs on our backend
 */

const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
  //  tell webpack, we are building for nodejs
  target: 'node',

  //  tell webpack, the entry point of server application
  entry: './src/index.js',
  
  //  tell webpack, where to put the output file generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  }
};

module.exports = merge(baseConfig, config);
