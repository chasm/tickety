'use strict';

angular.
  module('TicketyTackety.controllers', []).
  controller('GameCtrl', [
    '$scope',
    'fb',
    function($scope, fb) {
    
      $scope.startGame = function() {
        fb.startGame();
        return false;
      };
      
    }
  ]).
  controller('BoardCtrl', [
    '$scope',
    'fb',
    function($scope, fb) {

    }
  ]);
