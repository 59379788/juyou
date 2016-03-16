module.exports = function($scope, $stateParams, api, insert, update, del){

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
				
				if(obj.display_type === 0)
				{
					var jsonobj = angular.fromJson(obj.text);
					var tt = new Array();
					for(key in jsonobj)
					{
						var oo = new Object();
						oo.k = key;
						oo.v = jsonobj[key];
						tt.push(oo);
					}

					obj.display_arr = tt;
				}

				data[obj.text_type].push(obj);

			}
		}

	});


	$scope.addm = {};
	$scope.addm.text_type = '1';
	$scope.addm.display_type = '1';
	$scope.addm.text = '';
	$scope.addm.tablearr = new Array();

	$scope.add = function(){

		var tmp = {};
		tmp.text_type = $scope.addm.text_type;
		tmp.display_type = $scope.addm.display_type;
		tmp.state = 0;

		if($scope.addm.display_type == 0)
		{
			var obj = {};
			var arr = $scope.addm.tablearr;
			for(var i = 0; i < arr.length; i++)
			{
				var o = arr[i];
				obj[o.k] = o.v;
			}
			var t = angular.toJson(obj);
			tmp.display_arr = arr;
			tmp.text = t;
		}
		else
		{
			tmp.text = $scope.addm.text;
		}

		var i = parseInt($scope.addm.text_type);

		data[i].push(angular.copy(tmp));

		_insert(tmp, data[i].length);

	};

	$scope.edit = function(x, y){

		data[x][y].state = 1;

	};

	$scope.ok = function(x, y){

		data[x][y].state = 0;

		console.log(data[x][y]);

		if(data[x][y].display_type == 0)
		{
			var obj = {};
			var arr = data[x][y].display_arr;
			for(var i = 0; i < arr.length; i++)
			{
				var o = arr[i];
				obj[o.k] = o.v;
			}
			var t = angular.toJson(obj);
			data[x][y].text = t;
		}

		_update(data[x][y]);
	};

	$scope.delete = function(x, y){

		_del(data[x][y].id);

		data[x].splice(y,1);


	};

	$scope.addtr1 = function(x, y){

		var obj = {
			k : '',
			v : ''
		};

		data[x][y].display_arr.push(obj);
	};

	$scope.deltr1 = function(x, y, z){

		data[x][y].display_arr.splice(z,1);

		//data[x].display_arr.push(obj);
	};
	

	$scope.addtr = function(){

		var obj = {
			'k' : '',
			'v' : ''
		};

		$scope.addm.tablearr.push(obj);

	};

	$scope.deltr = function(i){

		$scope.addm.tablearr.splice(i, 1);

	};

	function _insert(para, num)
	{
		angular.extend(para, {'group_id' : 'ticket_destory','api_id' : api_id, 'asort' : num});

		insert.save(para, function(res){

			if(res.errcode !== 0)
			{
				alert('添加失败');
			}

		});
	}

	function _update(para)
	{

		angular.extend(para, {'group_id' : 'ticket_destory','api_id' : api_id});

		update.save(para, function(res){

			if(res.errcode !== 0)
			{
				alert('修改失败');
			}

		});
	}

	function _del(id)
	{

		del.save({'id' : id}, function(res){

			if(res.errcode !== 0)
			{
				alert(res.errmsg);
			}

		});
	}

};