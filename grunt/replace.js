(function(){
  'use strict';

  module.exports = function(grunt, options){
    return {
      app: {
        options: {
          patterns: [
            {
              match: /(\.css|\.html|\.htm|\.js|\.ico|\.pdf|\.xls|\.xlsx|\.jpg|\.png|\.jpeg|\.gif)[\"|']/gi,
              replacement: function(result, extension){
                var quote = result.match(/\"|'/)[0];

                return extension + '?v=' + grunt.option('buildNumber') + quote;
              }
            }
          ]
        },
        files: [{
          expand: true,
          flatten: false,
          src: []
            .concat(options.copy.indexFile)
            .concat(options.common.appConcatFile)
            .concat(options.common.appMinFile)
            .concat(options.common.cssConcatFiles)
            .concat(options.common.frameworkConcatFiles),
            //.concat(options.common.templateFiles),
          dest: ''
        }]
      }
    };
  };
})();