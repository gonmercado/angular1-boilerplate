(function(){
  'use strict';

  module.exports = function(grunt){
    return {
      default: function(){
        var defaultTasks = [
          'eslint:xmlReport',
          'concat:frameworks',
          'concat:cssFrameworks',
          'concat:app',
          'concat:css'
        ];

        grunt.task.run(defaultTasks);
      },
      resetDev: [

      ]
    };
  };
})();
