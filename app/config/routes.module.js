(function(){
  function routeConfig($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('root', {
        url: '',
        abstract: true,
        views: {
          'header': {
            templateUrl: '/app/modules/layout/header/header.html'
          },
          'footer': {
            templateUrl: '/app/modules/layout/footer/footer.html'
          },
          'sidebar': {
            templateUrl: '/app/modules/layout/sidebar/sidebar.html'
          }
        }
      })
      .state('404', {
        url: '/404',
        templateUrl: '/app/modules/layout/404/404.html'
      })
  };

  angular
    .module(ModuleName)
    .config([
      '$stateProvider',
      '$urlRouterProvider',
      routeConfig
    ])
})();