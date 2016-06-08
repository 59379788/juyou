module.exports = function($scope, $stateParams, infolist, cancleGroup){

	$scope.load = function(){
		infolist.get({'code' : $stateParams.code}, function(res){
			console.log(res);
			if(res.errcode === 0)
			{
				$scope.objs = res.data;
				if(res.data.length == '0'){
					$scope.zhengjiars = '0';
					$scope.butiers = '0';
					$scope.all_price = '0';
				}else{
					$scope.zhengjiars = res.data[0].zhengjiars;
					$scope.butiers = res.data[0].butiers;
					$scope.all_price = res.data[0].all_price;
				}
				
			}
			else
			{
				alert(res.errmsg);
			}
		});
	}
	$scope.load();

	$scope.back = function(id){

		var list_map = new Array();
        /*var mapone = {};
        mapone['id'] = id;*/
        list_map.push(id);

		var map = {};
		map['cancleList'] = list_map;
		//console.log(map);return;

	    cancleGroup.save(map, function(res){

	        if(res.errcode === 0)
	        {
	            alert("退订成功");
	            $scope.load();
	        }
	        else
	        {
	            alert(res.errmsg);
	        }

	    });
	}
	


};
