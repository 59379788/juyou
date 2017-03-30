module.exports = function($scope, typeauthinfo, $stateParams, typeauthupdate, 
	$uibModal, viewfestivallist, viewfestivalcreate, viewfestivaldel){

	var view = 'J0062';
	var ticket_type = $stateParams.tktcode;

	$scope.use_rule1 = 
	$scope.use_rule2 = 
	$scope.use_rule3 = 
	$scope.use_rule4 = 
	$scope.use_rule5 = 
	$scope.use_rule6 = 
	$scope.use_rule7 = 
	$scope.use_rule8 = '';

	$scope.section = {};

	//有效区间
	$scope.section.start = {};
	$scope.section.start.date = new Date();

	$scope.section.end = {};
	$scope.section.end.date = new Date();

	$scope.today = function() {
		//$scope.section.start.date = $scope.section.end.date = new Date();
	};
	$scope.today();

	$scope.open = function(obj) {
		obj.opened = true;
	};

	//有效时间
	$scope.hourarr = new Array();
	$scope.minarr = new Array();
	for(var i = 0; i < 24; i++)
	{
		var o = {};
		o.code = i + 1;
		if(i < 9) o.name = '0' + (i + 1);
		else o.name = i + 1;
		$scope.hourarr.push(o);
	}

	for(var i = 0; i < 59; i+=10)
	{
		var o = {};
		o.code = i;
		if(i < 9) o.name = '0' + i;
		else o.name = i;
		$scope.minarr.push(o);
	}

	//票种规则信息
	typeauthinfo.get({'ticket_type' : ticket_type}, function(res){
		console.log('票种规则信息');
		console.log(res);

		if(res.errcode === 0)
		{
			$scope.obj = res.data;
			$scope.section.start.date = str2date($scope.obj.start_date);
			$scope.section.end.date = str2date($scope.obj.end_date);
			setWeek($scope.obj.use_rule);
		}
		else
		{
			alert(res.errmsg);
		}

	});


	//保存按钮
	$scope.gogo = function(){

		$scope.obj.start_date = date2str($scope.section.start.date);
		$scope.obj.end_date = date2str($scope.section.end.date);
		$scope.obj.use_rule = getWeek();

		typeauthupdate.save($scope.obj, function(res){

			console.log(res);

			if(res.errcode === 0)
			{
				alert('保存成功');
			}
			else
			{
				alert(res.errmsg);
			}

		});

	};


	//景区节日
	viewfestivallist.get({'view' : view}, function(res){
		console.log(res);
		if(res.errcode === 0)
		{
			$scope.festivalarr = res.data;
		}
		else
		{
			alert(res.errmsg);
		}
	});

	// $scope.editfestival = function(){

	// 	var modalInstance = $uibModal.open({
	//       template: require('../views/festivallist.html'),
	//       controller: 'festivallist',
	//       resolve: {
	//       	view : function(){
	//       		return view;
	//       	},
	//       	viewfestivallist : function(){
	//       		return viewfestivallist;
	//       	},
	//       	viewfestivalcreate : function(){
	//       		return viewfestivalcreate;
	//       	},
	//       	viewfestivaldel : function(){
	//       		return viewfestivaldel;
	//       	}
	//       }
	//     });

	//     modalInstance.result.then(function () {
	      
	//       load();

	//     }, function () {
	//       //$log.info('Modal dismissed at: ' + new Date());
	//     });

	// };


	function getWeek(){
		var str = '';

		if($scope.use_rule1 != '' && $scope.use_rule1 !== undefined) str += $scope.use_rule1 + ',';
		if($scope.use_rule2 != '' && $scope.use_rule2 !== undefined) str += $scope.use_rule2 + ',';
		if($scope.use_rule3 != '' && $scope.use_rule3 !== undefined) str += $scope.use_rule3 + ',';
		if($scope.use_rule4 != '' && $scope.use_rule4 !== undefined) str += $scope.use_rule4 + ',';
		if($scope.use_rule5 != '' && $scope.use_rule5 !== undefined) str += $scope.use_rule5 + ',';
		if($scope.use_rule6 != '' && $scope.use_rule6 !== undefined) str += $scope.use_rule6 + ',';
		if($scope.use_rule7 != '' && $scope.use_rule7 !== undefined) str += $scope.use_rule7 + ',';
		if($scope.use_rule8 != '' && $scope.use_rule8 !== undefined) str += $scope.use_rule8 + ',';

		return str;
	}


	function setWeek(week){

		var weekarr = week.split(',');

		for(var i = 0; i < weekarr.length; i++)
		{
			$scope['use_rule' + weekarr[i]] = parseInt(weekarr[i]);
		}
	}

	function str2date(strDate){

		if(angular.isString(strDate))
		{
			var objDate = new Date(Date.parse(strDate.replace(/-/g, "/")));

			return objDate;
		}
		else
		{
			return '错误格式';
		}
		
	}

	function date2str(objDate){

		if(angular.isDate(objDate))
		{
			var y = objDate.getFullYear();
			var m = objDate.getMonth();
			var d = objDate.getDate();

			return y + '-' + (m + 1) + '-' + d;
		}
		else
		{
			return '错误格式';
		}
	}
	

};