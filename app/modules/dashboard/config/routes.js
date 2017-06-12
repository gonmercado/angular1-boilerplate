(function(){
  'use strict';

  angular
    .module('Dashboard')
    .config(['$stateProvider', function($stateProvider){
      $stateProvider
        .state('root.dashboard', {
          url: '/dashboard',
          views: {
            'content@': {
              templateUrl: '/app/modules/dashboard/main/main.html'
            }
          }
        });
    }]);
})();