module.exports = function($scope, $stateParams, api, $state){

	//$scope.name = $stateParams.name;

	//$scope.api_id = $stateParams.api_id;

	//alert($stateParams.api_id);

	// $scope.content = "";

	// var c1 = '{"data":{"ticketList":[{"device_auth_state":"1","count":10,"type_name":"居游测试票1","type":"009901"}],"reqkey":"96698b0966a142789f9a571da86557d6"},"errcode":0}';
	// var c11 = angular.fromJson(c1);
	// var c111 = angular.toJson(c11,true);


	// console.log(c111);



	// $scope.content += c111;

	var api_id = $stateParams.api_id;

	$scope.name = '';

	var data = new Array();

	var text_type = 999;

	api.get({'api_id' : api_id}, function(res){

		console.log(res);

		for(var i = 0; i < res.data.length; i++)
		{

			var obj = res.data[i];

			if(i === 0) $scope.name = obj.text;

			if(obj.text_type !== text_type)
			{
				text_type = obj.text_type;

				var tmparray = new Array();

				data.push(tmparray);

			}

			if(obj.display_type === 0)
			{
				var jsonobj = angular.fromJson(obj.text);

				console.log(jsonobj);
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
			
			data[data.length - 1].push(obj);
		}

		$scope.objs = data;

	});


	$scope.edit = function(){

		$state.go('app.doccreate', {'api_id' : api_id});

	};



};
