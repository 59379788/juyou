module.exports = function($scope, viewlist, tktcreate, getDate, $stateParams, 
	placeinfo, $state, makeArr, makeStr){

	$scope.placeid = $stateParams.placeid;

	$scope.objt = {
		'name' : '',
	//	'code' : '',
		'place_code' : '',
		'used_state' : '0',
		'state' : '1',
		'book_info' : ''
	};
	 $scope.objt.start_date = new Date();
	 $scope.objt.end_date = new Date();

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

	$scope.objs = [];
	

	if($scope.placeid === '')
	{
		//景区下拉
		viewlist().then(function(res) {
	        
	        if(res.errcode === 0)
	        {
	        	$scope.viewarr = res.data;
	        	$scope.objt.place_code = res.data[0].code;
	        	// console.log(666666666666);
		        console.log($scope.viewarr);
		        console.log($scope.objt);
		        // console.log(6666666666);
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
			// 'start_date' : getDate($scope.section.start.date),
			// 'end_date' : getDate($scope.section.end.date),
			'print_setup' : makeStr($scope.objs)
		}

		para = angular.extend($scope.objt, para);
		para.start_date	 = getDate($scope.objt.start_date);
		para.end_date	 = getDate($scope.objt.end_date);
		console.log($scope.objt.start_date);
		console.log($scope.objt.end_date);
		console.log($scope.objt);
		console.log("----------");
		console.log(para);
		console.log("----------");
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



	$scope.printadd = function(){
		var obj = {
			'name' : ''
		};
		$scope.objs.push(obj);
	};

	$scope.printdel = function(index){
		$scope.objs.splice(index,1); 
	};


};
