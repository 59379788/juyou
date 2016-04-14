module.exports = function($scope, userinfo, getDate){

	$scope.msg = ['非居游卡会员', '居游卡会员'];

	$scope.searchform = {};
	$scope.section = {};
	$scope.usedate = false;

	//有效区间
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

	$scope.load = function()
	{
		if($scope.searchform.mobile == undefined || $scope.searchform.mobile == ''){
			return;
		}
		var para = {};

        if($scope.usedate)
        {
        	para.begintime = getDate($scope.section.start.date) + " 00:00:00";
        	para.endtime = getDate($scope.section.end.date) + " 23:59:59";
        }

        para = angular.extend($scope.searchform, para);

        console.log(para);

		userinfo.get(para, function(res){

			console.log(res);

			if(res.errcode === 0)
			{
				$scope.objs = res.data;
			}
			else
			{
				alert(res.errmsg);
			}
		});
	}
	$scope.load();




};