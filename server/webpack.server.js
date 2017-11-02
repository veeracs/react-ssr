/*
 * Server Side Bundle - Server Code + React App - Code runs on our backend
 */

const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  //  tell webpack, we are building for nodejs
  target: 'node',

  //  tell webpack, the entry point of server application
  entry: './src/index.js',
  
  //  tell webpack, where to put the output file generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  // tells webpack not to bundle any libraries into the output bundle of the server, 
  // if that library exists in the node_modules folder
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
