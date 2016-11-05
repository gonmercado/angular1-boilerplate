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
          'uglify:app'
        ]);

        grunt.task.run(defaultTasks);
      },
      resetDev: cleanArray
    };
  };
})();
