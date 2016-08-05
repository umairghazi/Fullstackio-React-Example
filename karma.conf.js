var path = require('path');
var webpackConfig = require('./webpack.config');

module.exports = function(config) {
  config.set({
    frameworks: ['mocha','chai'],
    webpack: webpackConfig,
    webpackServer : {
      noInfo : true
    },
    files: [
      'test.webpack.js'
    ],

    preprocessors:{
      'test.webpack.js' : ['webpack','sourcemap']
    },
    basePath: '',
    preprocessors: {},
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['PhantomJS'],
    concurrency: Infinity,
    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-webpack',
      'karma-phantomjs-launcher',
      'karma-spec-reporter',
      'karma-sourcemap-loader'
    ],
    reporters : ['spec'],
  });
}
