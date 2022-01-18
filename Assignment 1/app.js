(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.food = ""
  $scope.lunchItems = 0

  $scope.checkLunch = function () {
    var foodArray = $scope.food.split(",")
    $scope.lunchItems = foodArray.length;
    console.log($scope.lunchItems)
  };

  $scope.lunchResult = function () {
    if($scope.lunchItems == 0 || $scope.food == ""){return "Please enter data first"
  }else{
    if($scope.lunchItems > 0 & $scope.lunchItems <=3){
      return "Enjoy!"
    } else{
      if($scope.lunchItems > 3){
        return "Too much!"
      }
    }
  }
  };
}

})();
