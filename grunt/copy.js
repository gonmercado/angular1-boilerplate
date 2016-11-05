(function(){
  'use strict';

  module.exports = function(grunt, params){
    return {
      generateIndexNonMin: {
        src: params.copy.indexFile,
        dest: params.copy.indexNonMinFile
      },
      generateIndex: {
        src: params.copy.indexNonMinFile,
        dest: params.copy.indexFile
      }
    };
  };
})();