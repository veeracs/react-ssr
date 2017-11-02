module.exports = {
  //  tell webpack, to run babel on every file it runs through
  module: {
    rules: [
      {
        //  only apply babel to JS files
        test: /\.js?$/,
        //  transpiles our code
        loader: 'babel-loader',
        exclude: '/node_modules/',
        options: {
          presets: [
            //  turns JSX into normal JS function calls
            'react',
            //  handles async code
            'stage-0',
            //  run transpile rules needed for last two versions of popular browsers
            ['env', {targets: {browsers: ['last 2 versions']}}] 
          ]
        }
      }
    ]
  }
}
