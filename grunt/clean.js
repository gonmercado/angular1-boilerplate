(function(){
  'use strict';

  module.exports = function(grunt, params){
    return {
      gruntReports: [
        params.common.gruntReportsFolder
      ],
      app: [
        params.common.appConcatFile,
        params.common.cssConcatFiles,
        params.common.appMinFile,
        params.common.appMinFile + params.common.mapExt,
        params.common.appConcatFile + params.common.mapExt
      ],
      frameworks: [
        params.common.frameworkConcatFiles,
        params.common.cssFrameworkConcatFiles
      ]
    };
  };
})();