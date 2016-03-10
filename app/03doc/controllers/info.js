module.exports = function($scope, $stateParams, api){

	//$scope.name = $stateParams.name;

	//$scope.api_id = $stateParams.api_id;

	//alert($stateParams.api_id);

	// $scope.content = "";

	// var c1 = '{"data":{"ticketList":[{"device_auth_state":"1","count":10,"type_name":"居游测试票1","type":"009901"}],"reqkey":"96698b0966a142789f9a571da86557d6"},"errcode":0}';
	// var c11 = angular.fromJson(c1);
	// var c111 = angular.toJson(c11,true);


	// console.log(c111);



	// $scope.content += c111;

	$scope.name = '';

	var data = new Array();

	var text_type = 999;

	api.get({'api_id' : $stateParams.api_id}, function(res){

		console.log(res);

		for(var i = 0; i < res.data.length; i++)
		{

			var obj = res.data[i];

			if(i === 0) $scope.name = obj.api_name;

			if(obj.text_type !== text_type)
			{
				text_type = obj.text_type;

				var tmparray = new Array();

				data.push(tmparray);

			}
			
			data[data.length - 1].push(obj);
		}

		$scope.objs = data;

	});



};
