;(function(){
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.message = '';
    $scope.list = '';
    $scope.messageClass = '';
    $scope.listClass = '';

    $scope.checkToMuch = function(){
      var list = $scope.list.split(',').filter(function(c){return c.trim() != '';});
      $scope.messageClass = 'text-success';
      $scope.listClass = 'has-success';
      if(list.length == 0) {
        $scope.message = 'Please enter data first';
        $scope.messageClass = 'text-danger';
        $scope.listClass = 'has-error';
      }else if(list.length <= 3){
        $scope.message = 'Enjoy!';
      } else {
        $scope.message = 'Too much!';
      }
    };

    $scope.resetMessage = function(){
      $scope.message = '';
      $scope.messageClass = '';
      $scope.listClass = '';
    };
  }
})();
