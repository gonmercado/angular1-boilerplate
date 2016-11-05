(function(){
  angular
    .module('Authentication')
    .config(['$stateProvider' ,function($stateProvider){
      $stateProvider
        .state('root.login', {
          url: '/login',
          views: {
            'header@': {},
            'sidebar@': {},
            'content@': {
              templateUrl: '/app/modules/authentication/components/login/login.html'
            }
          }
        })
    }]);
})();