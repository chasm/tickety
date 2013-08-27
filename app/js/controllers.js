'use strict';

angular.
  module('ticketyTackety.controllers', []).
  controller('BoardCtrl', [
    '$scope',
    'angularFire',
    function($scope, angularFire) {
      var url = 'https://tickety.firebaseio.com/board';
      var promise = angularFire(url, $scope, 'board', { game: "         " });
    
      $scope.clearBoard = function() {
        $scope.board.game = "         ";
        $scope.setBoard();
        return false;
      };
      
      $scope.setBoard = function() {
        if ($scope.board) {
          $scope.cell0 = $scope.board.game.charAt(0);
          $scope.cell1 = $scope.board.game.charAt(1);
          $scope.cell2 = $scope.board.game.charAt(2);
          $scope.cell3 = $scope.board.game.charAt(3);
          $scope.cell4 = $scope.board.game.charAt(4);
          $scope.cell5 = $scope.board.game.charAt(5);
          $scope.cell6 = $scope.board.game.charAt(6);
          $scope.cell7 = $scope.board.game.charAt(7);
          $scope.cell8 = $scope.board.game.charAt(8);
        }
      };
      
      $scope.makeMove = function(idx) {
        console.log("making a move in square " + idx);
        var str = $scope.board.game;
        $scope.board.game = str.substr(0, idx) + 'X' + str.substr(idx + 1);
        $scope.setBoard();
      }

      promise.then(function() {
        $scope.$watch('board', $scope.setBoard);
      });
    }
  ]);
