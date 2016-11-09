'use strict';

describe('Login Controller Suite', function(){
  var ctrl, controller,
    fakeState;

  var generalInjections = function($controller){
    controller = $controller;
  };

  var prepareFakes = function(){
    fakeState = {'go': function(){}};
  };

  var createLoginController = function(){
    ctrl = controller('LoginController', {
      $state: fakeState
    });
  };

  beforeEach(function(){
    module('Authentication');
    inject(generalInjections);
    prepareFakes();
    createLoginController();
  });

  describe('General Tests', function(){
    it('Controller should be defined', function(){
      expect(ctrl).toBeDefined();
    });
    it('Controller should have an authenticate method', function(){
      expect(ctrl.authenticate).toBeDefined();
    });
    it('Text should be Login Page!', function(){
      expect(ctrl.text).toEqual('Login Page!');
    });
  });
});