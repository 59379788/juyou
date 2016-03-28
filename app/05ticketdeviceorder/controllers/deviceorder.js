module.exports = function($scope, $state){

	$scope.return = function(){
		history.go(-1);
	};

};