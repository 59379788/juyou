module.exports = function($scope, $stateParams, api, insert){

	var data = new Array();

	for(var i = 0; i < 6; i++)
	{
		data.push(new Array());
	}

	$scope.objs = data;

	var api_id = $stateParams.api_id;

	api.get({'api_id' : api_id}, function(res){

		console.log(res);

		if(res.errcode === 0)
		{
			for(var i = 0; i < res.data.length; i++)
			{
				var obj = res.data[i];
				obj.state = 0;
				data[obj.text_type].push(obj);

			}
		}
		console.log(data);

	});


	$scope.addm = {};
	$scope.addm.text_type = '1';
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

		_insert(tmp);

	};


	$scope.edit = function(x, y){

		data[x][y].state = 1;

	};


	$scope.ok = function(x, y){

		data[x][y].state = 0;

		_insert(data[x][y]);

	};

	$scope.delete = function(x, y){

		data[x].splice(y,1);

	};


	function _insert(para)
	{
		angular.extend(para, {'group_id' : 'ticket_destory','api_id' : api_id});

		insert.save(para, function(res){

			console.log(res);

			if(res.errcode !== 0)
			{
				alert('添加失败');
			}

		});
	}


};