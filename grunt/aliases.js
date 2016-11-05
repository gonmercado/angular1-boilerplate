(function(){
  'use strict';

  module.exports = function(grunt){
    var cleanArray = [
      'clean:gruntReports',
      'clean:app',
      'clean:frameworks'
    ];

    return {
      default: function(){
        var defaultTasks = cleanArray.concat([
          'eslint:xmlReport',
          'concat:frameworks',
          'concat:cssFrameworks',
          'concat:app',
          'concat:css',
          'uglify:app',
          'copy:generateIndexNonMin'
        ]);

        grunt.task.run(defaultTasks);
      },
      resetDev: cleanArray.concat([
        'copy:generateIndex',
        'clean:indexNonMin'
      ])
    };
  };
})();
