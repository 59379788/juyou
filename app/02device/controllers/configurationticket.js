module.exports = function($scope){

	$scope.section = {};

	//有效区间
	$scope.section.start = {};
	$scope.section.start.date = {};

	$scope.section.end = {};
	$scope.section.end.date = {};

	$scope.today = function() {
		$scope.section.start.date = $scope.section.end.date = new Date();
	};
	$scope.today();

	$scope.open = function(obj) {
		obj.opened = true;
	};

	//有效时间
	$scope.timearr = new Array();
	for(var i = 0; i < 24; i++)
	{
		var o = {};
		o.code = i + 1;
		o.name = i + 1 + ':00';
		$scope.timearr.push(o);
	}

	$scope.time = {};
	$scope.time.start = 8;
	$scope.time.end = 17;



	

};