(function(){
  function routeConfig($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('root', {
        url: '',
        abstract: true,
        views: {
          'header': {
            templateUrl: '/app/modules/layout/components/header/header.html'
          },
          'footer': {
            templateUrl: '/app/modules/layout/components/footer/footer.html'
          },
          'sidebar': {
            templateUrl: '/app/modules/layout/components/sidebar/sidebar.html'
          }
        }
      })
      .state('root.404', {
        url: '/404',
        views: {
          'header@': {},
          'footer@': {},
          'sidebar@': {},
          'content@': {
            templateUrl: '/app/modules/layout/components/404/404.html'
          }
        }
      });
    $urlRouterProvider.when('/', '/dashboard');
    $urlRouterProvider.otherwise('/404');
  };

  angular
    .module(ModuleName)
    .config([
      '$stateProvider',
      '$urlRouterProvider',
      routeConfig
    ])
})();