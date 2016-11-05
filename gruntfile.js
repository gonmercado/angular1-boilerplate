'use strict';

module.exports = function(grunt){
  require('load-grunt-config')(grunt, {
    data: {
      common: {

      },
      eslint: {
        files: [
          './app/**/*.js',
          './test/**.*.js'
        ]
      },
      copy: {

      }
    }
  })
};