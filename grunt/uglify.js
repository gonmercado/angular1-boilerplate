(function(){
  'use strict';

  module.exports = function(grunt, params){
    var files = {};

    files[params.common.appMinFile] = params.common.appConcatFile;

    return {
      options: {
        sourceMap: true,
        sourceMapIncludeSources: true,
        mangle: {
          except: [
            'angular'
          ]
        }
      },
      app: {
        options: {
          sourceMapIn: params.common.appConcatFile + params.common.mapExt
        },
        files: files
      }
    };
  };
})();