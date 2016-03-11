module.exports = function($scope){

	var data = new Array();

	for(var i = 0; i < 5; i++)
	{
		data.push(new Array());
	}

	$scope.objs = data;


	$scope.addm = {};
	$scope.addm.text_type = '0';
	$scope.addm.display_type = '1';
	$scope.addm.text = '';


	$scope.add = function(){

		var tmp = {};
		tmp.text_type = $scope.addm.text_type;
		tmp.display_type = $scope.addm.display_type;
		tmp.text = $scope.addm.text;
		tmp.state = 0;

		var i = parseInt($scope.addm.text_type);

		data[i].push(tmp);


		console.log(data);

	};



	$scope.edit = function(x, y){

		data[x][y].state = 1;

	};


	$scope.ok = function(x, y){

		data[x][y].state = 0;

	};

	$scope.delete = function(x, y){

		data[x].splice(y,1);

	};


};