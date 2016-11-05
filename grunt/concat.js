(function(){
  'use strict';

  module.exports = function(grunt, params){
    return {
      frameworks: {
        src: params.common.frameworkFiles,
        dest: params.common.frameworkConcatFiles
      },
      app: {
        src: params.common.appFiles,
        dest: params.common.appConcatFile
      },
      cssFrameworks: {
        src: params.common.cssFrameworkFiles,
        dest: params.common.cssFrameworkConcatFiles
      },
      css: {
        src: params.common.cssFiles,
        dest: params.common.cssConcatFiles
      }
    };
  };
})();