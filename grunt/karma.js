(function(){
  'use strict';

  module.exports = function(grunt, params){
    var karmaFiles = [];

    karmaFiles = karmaFiles.concat(params.common.frameworkFiles);
    karmaFiles = karmaFiles.concat(params.common.appFiles);
    karmaFiles = karmaFiles.concat(params.karma.utFiles);

    // var karmaMinFiles = [];
    //
    // karmaMinFiles = karmaMinFiles.concat(params.common.frameworkConcatFiles);
    // karmaMinFiles = karmaMinFiles.concat(params.common.appMinFile);

    var customDirectoryCreator = function(browser){
      return browser.toLowerCase().split(/[ /-]/)[0];
    };

    var coberturaReporter = {
      type: 'cobertura',
      dir: params.common.gruntReportsFolder + '/coverage-xml/',
      subdir: customDirectoryCreator
    };

    var htmlReporter = {
      type: 'html',
      dir: params.common.gruntReportsFolder + '/coverage-html/',
      subir: customDirectoryCreator
    };

    // var junitReporter = {
    //   outputDir: params.common.gruntReportsFolder + '/karma/xml/',
    //   outputFile: 'karma-ut-results.xml',
    //   suite: ''
    // };

    return {
      options: {
        basePath: '',
        frameworks: ['jasmine'],
        exclude: [],
        port: 9876,
        colors: false,
        logLevel: 'ERROR',
        autoWatch: false,
        singleRun: true,
        browsers: ['Chrome'],
        browserNoActivityTimeout: 15000,
        reportSlowerThan: 0,
        ngHtml2JsPreprocessor: {
          moduleName: 'MyVehicle'
        }
      },
      coverage: {
        options: {
          files: karmaFiles
        },
        reporter: ['dots', 'coverage'],
        exclude: [
          './app/config/routes.modules.js',
          './app/app_concat.js',
          './app/app.min.js'
        ],
        preprocessors: {
          'app/**/*.js': 'coverage',
          'app/modules/**/*.html': ['ng-html2js']
        },
        coverageReporters: {
          reporters: [coberturaReporter, htmlReporter]
        }
      }
      // min: {
      //
      // },
      // dev: {
      //
      // },
      // devSingleRun: {
      //
      // },
      // debug: {
      //
      // }
    };
  };
})();