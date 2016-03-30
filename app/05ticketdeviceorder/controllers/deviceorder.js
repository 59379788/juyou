module.exports = function($scope){

	$scope.return = function(){
		history.go(-1);
	};

};