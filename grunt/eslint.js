(function(){
  'use strict';

  module.exports = function(grunt, params){
    return {
      options: {
        quiet: true,
        configFile: '.eslintrc'
      },
      xmlReport: {
        options: {
          format: 'checkstyle',
          outputFile: 'grunt_reports/eslint/eslint.xml'
        },
        files: {
          src: params.eslint.files
        }
      },
      dev: {
        options: {
          format: 'stylish'
        },
        files: {
          src: params.eslint.files
        }
      }
    };
  };
})();
