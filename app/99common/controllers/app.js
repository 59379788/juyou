module.exports = function($scope, permission){

	permission.get({'userId' : 'dfa41befeb044ea4b1e501ec0f64077a'}, function(res){

		//console.log(res);

		if(res.errcode === 0)
		{
			$scope.obj = res.data;
		}

	});

};