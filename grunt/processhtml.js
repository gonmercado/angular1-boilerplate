(function(){
  'use strict';

  module.exports = function(grunt, params){
    var filesObject = {};

    filesObject[params.copy.indexFile] = params.copy.indexNonMinFile;

    return {
      indexFile: {
        files: filesObject
      }
    };
  };
})();