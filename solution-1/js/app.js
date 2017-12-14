(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
	$scope.dishes = "";
	$scope.message = "";
	$scope.messageColor = "";

	$scope.printMessage = function(message, color){
		$scope.message = message;
		$scope.messageColor = color;
	}

	$scope.checkDishes = function(){
		var plates = $scope.dishes.split(",");
		var totalDishes = plates.length;

		for (var i = 0; i < plates.length; i++) {
			if (plates[i].trim() == ""){
				totalDishes--;
			}
		}

		if(totalDishes == 0){
			$scope.printMessage("Please enter data first", "red");
		} else if (totalDishes <= 3){
			$scope.printMessage("Enjoy!", "green");
		} else {
			$scope.printMessage("Too much!", "green");
		}
	};
}

})();