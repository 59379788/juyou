module.exports = function($scope, $state){

	  $scope.module1 = function () {

	    $state.go('app.vouchersalelist');

	  }


	  $scope.module2 = function() {

	  	$state.go('app.voucherorderlist');

	  }


	  $scope.module3 = function() {

	  	$state.go('app.usedorderlist');

	  }

};