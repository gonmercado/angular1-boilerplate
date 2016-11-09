(function(){
  'use strict';

  var loginController = function($state){
    this.text = 'Login Page!';
    this.authenticate = function(){
      this.text = 'Bye';
      $state.go('root.dashboard', {});
    };
  };

  angular
    .module('Authentication')
    .controller('LoginController', loginController);

  loginController.$inject = [
    '$state'
  ];
})();