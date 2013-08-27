'use strict';

angular.
  module('ticketyTackety.controllers', []).
  controller('BoardCtrl', ['$scope', function($scope) {
    $scope.cell1 = "O";
    $scope.class1 = "g";
    $scope.cell3 = "X";
    $scope.class3 = "w";
    $scope.cell4 = "O";
    $scope.class4 = "g";
    $scope.cell5 = "X";
    $scope.class5 = "w";
    $scope.cell7 = "X";
    $scope.class7 = "w";
    $scope.cell8 = "O";
    $scope.class8 = "g";
    $scope.cell9 = "X";
    $scope.class9 = "g";
    
    $scope.clearBoard = function() {
      $scope.cell1 = "";
      $scope.class1 = "";
      $scope.cell2 = "";
      $scope.class2 = "";
      $scope.cell3 = "";
      $scope.class3 = "";
      $scope.cell4 = "";
      $scope.class4 = "";
      $scope.cell5 = "";
      $scope.class5 = "";
      $scope.cell6 = "";
      $scope.class6 = "";
      $scope.cell7 = "";
      $scope.class7 = "";
      $scope.cell8 = "";
      $scope.class8 = "";
      $scope.cell9 = "";
      $scope.class9 = "";
      return false;
    };
  }]);