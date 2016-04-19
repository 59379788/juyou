module.exports = function($scope, viewlist, tktcreate, getDate, $stateParams, placeinfo, $state){

	$scope.placeid = $stateParams.placeid;

	$scope.objt = {
		'name' : '',
	//	'code' : '',
		'place_code' : '',
		'used_state' : '0',
		'state' : '1',
		'book_info' : ''
	};

	//有效区间
	$scope.section = {};
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
	

	if($scope.placeid === '')
	{
		//景区下拉
		viewlist().then(function(res) {
	        //console.log(res);
	        if(res.errcode === 0)
	        {
	        	$scope.viewarr = res.data;
	        	$scope.objt.place_code = res.data[0].code;
	        }
	        else
	        {
	            alert(res.errmsg);
	        }
	    });
	}
	else
	{
		placeinfo.get({'id' : $scope.placeid}, function(res){

	    	console.log(res);

	    	if(res.errcode === 0)
	        {
	        	$scope.objt.placename = res.data.name;
	        	$scope.objt.placecode = res.data.code;
	        }
	        else
	        {
	            alert(res.errmsg);
	        }

	    });
	}
    

	//保存按钮
	$scope.gogo = function(){

		if(!check()) return;

		var para = {
			'start_date' : getDate($scope.section.start.date),
			'end_date' : getDate($scope.section.end.date)
		}

		para = angular.extend($scope.objt, para);
		console.log(para);
		tktcreate.save(para, function(res){

			console.log(res);

			if(res.errcode === 0)
			{
				//alert('保存成功');
				$state.go('app.edittkttype', {'id' : res.data.uuid});
			}
			else
			{
				alert(res.errmsg);
			}

		});

	};

	function check(){

		if($scope.objt.name === '')
		{
			alert('请输入票种名称');
			return false;
		}

		if($scope.objt.code === '')
		{
			alert('请输入票种编号');
			return false;
		}

		return true;
	}
};
