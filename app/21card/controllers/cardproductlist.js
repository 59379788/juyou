module.exports = function($scope, $state, cardproductlist){

	$scope.searchform = {};

	$scope.search = function(){

		cardproductlist.save($scope.searchform, function(res){
			if(res.errcode !== 0)
			{
				alert(res.errmsg);
				return;
			}
			$scope.objs = res.data;
		})
	};
	$scope.search();

	$scope.create = function(){

		$state.go('app.cardproduct');

	};

	$scope.edit = function(code){

		$state.go('app.cardproduct', {'code' : code});

	};

	$scope.start = function(code){


	};

	$scope.stop = function(code){


	};

};