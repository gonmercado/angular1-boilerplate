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
          //Running coverage generation
          'karma:coverage',
          //Running lints
          'eslint:xmlReport',
          //Creating the concat and min version of the files and frameworks
          'concat:frameworks',
          'concat:cssFrameworks',
          'concat:app',
          'concat:css',
          'uglify:app',
          //Running karma on the minimized javascript files
          'karma:min',
          //Changing index file to use the min and concat version of files
          'copy:generateIndexNonMin',
          'processhtml:indexFile'
        ]);

        if(grunt.option('buildNumber')){
          defaultTasks.push('replace:app');
        }

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
