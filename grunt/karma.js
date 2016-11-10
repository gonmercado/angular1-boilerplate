(function(){
  'use strict';

  module.exports = function(grunt, params){
    var karmaFiles = [];

    karmaFiles = karmaFiles.concat(params.common.frameworkFiles);
    karmaFiles = karmaFiles.concat(params.common.appFiles);
    karmaFiles = karmaFiles.concat(params.karma.utFiles);

    var karmaMinFiles = [];

    karmaMinFiles = karmaMinFiles.concat(params.common.frameworkConcatFiles);
    karmaMinFiles = karmaMinFiles.concat(params.common.appMinFile);
    karmaMinFiles = karmaMinFiles.concat(params.karma.utFiles);

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

    var junitReporter = {
      outputDir: params.common.gruntReportsFolder + '/karma/xml/',
      outputFile: 'karma-ut-results.xml',
      suite: ''
    };

    return {
      options: {
        basePath: '',
        frameworks: ['jasmine'],
        port: 9876,
        colors: false,
        logLevel: 'ERROR',
        autoWatch: false,
        singleRun: true,
        browsers: ['PhantomJS'],
        browserNoActivityTimeout: 15000,
        reportSlowerThan: 0,
        ngHtml2JsPreprocessor: {
          moduleName: 'MyVehicle'
        },
        preprocessors: {
          'app/**/*.js': 'coverage',
          'app/modules/**/*.html': ['ng-html2js']
        }
      },
      coverage: {
        options: {
          files: karmaFiles
        },
        reporter: [
          'dots',
          'coverage'
        ],
        coverageReporters: {
          reporters: [
            coberturaReporter,
            htmlReporter
          ]
        },
        exclude: params.karma.defaultExcludeArray
      },
      min: {
        options: {
          files: karmaMinFiles
        },
        reporters: [
          'dots',
          'junit'
        ],
        junitReporter: junitReporter,
        exclude: [
          './app/config/routes.modules.js'
        ]
      },
      dev: {
        options: {
          files: karmaFiles
        },
        reporters: [
          'dots',
          'coverage'
        ],
        coverageReporters: [
          htmlReporter
        ],
        browsers: ['Chrome'],
        exclude: params.karma.defaultExcludeArray,
        colors: true,
        autoWatch: true,
        singleRun: false
      },
      devSingleRun: {
        options: {
          files: karmaFiles
        },
        reporters: [
          'dots'
        ],
        exclude: params.karma.defaultExcludeArray
      },
      debug: {
        options: {
          files: karmaFiles
        },
        logLevel: 'DEBUG',
        preprocessors: {
          'app/modules/**/*.html': ['ng-html2js']
        },
        reporters: [
          'spec'
        ],
        coverageReporters: [
          htmlReporter
        ],
        exclude: params.karma.defaultExcludeArray,
        colors: true,
        autoWatch: true,
        singleRun: false
      }
    };
  };
})();