(function(){
  'use strict';

  module.exports = function(grunt){
    var cleanArray = [
      //Removing old run of grunt
      'clean:gruntReports',
      'clean:app',
      'clean:frameworks'
    ];

    return {
      default: function(){
        var defaultTasks = cleanArray.concat([
          //Running lints
          'eslint:xmlReport',
          //Creating the concat and min version of the files and frameworks
          'concat:frameworks',
          'concat:cssFrameworks',
          'concat:app',
          'concat:css',
          'uglify:app',
          //Changing index file to use the min and concat version of files
          'copy:generateIndexNonMin',
          'processhtml:indexFile'
        ]);

        grunt.task.run(defaultTasks);
      },
      resetDev: cleanArray.concat([
        //Restoring index file to the backup version
        'copy:generateIndex',
        'clean:indexNonMin'
      ])
    };
  };
})();
