'use strict';

module.exports = function(grunt){
  require('load-grunt-config')(grunt, {
    data: {
      common: {
        frameworkFiles: [
          './bower_components/angular/angular.min.js',
          './bower_components/angular-resource/angular-resource.min.js',
          './bower_components/angular-ui-router/angular-ui-router.min.js'
        ],
        frameworkConcatFiles: './assets/js/frameworks/frameworks_concat.js',
        appFiles: [
          './app/app.js',
          './app/config/*.js',
          './app/modules/*/*.js',
          './app/modules/**/*.resource.js',
          './app/modules/**/*.service.js',
          './app/modules/**/*.filter.js',
          './app/modules/**/*.factory.js',
          './app/modules/**/*.controller.js',
          './app/modules/**/*.js'
        ],
        appConcatFile: './app/app_concat.js',
        cssFrameworkFiles: [
          './bower_components/normalize-css/normalize.css'
        ],
        cssFrameworkConcatFiles: './assets/css/frameworks/frameworks_concat.css',
        cssFiles: [
          './assets/css/main.css'
        ],
        cssConcatFiles: './assets/css/app_concat.css'
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
  });
};