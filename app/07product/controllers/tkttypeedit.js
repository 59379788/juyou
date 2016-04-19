module.exports = function($scope, $stateParams, viewlist, tktinfo, tktupdate, placeinfo){

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


	//景区下拉
	viewlist().then(function(res) {
        if(res.errcode === 0)
        {
        	$scope.viewarr = res.data;
        }
        else
        {
            alert(res.errmsg);
        }
    });

	tktinfo.get({'id' : $stateParams.id}, function(res){
		console.log(res);

		if(res.errcode === 0)
		{
			$scope.objt = res.data;
			//getplaceinfo();
		}

	});

	// function getplaceinfo(){
	// 	placeinfo.get({'id' : $scope.placeid}, function(res){

	//     	console.log(res);

	//     	if(res.errcode === 0)
	//         {
	//         	$scope.objt.placename = res.data.name;
	//         	$scope.objt.placecode = res.data.code;
	//         }
	//         else
	//         {
	//             alert(res.errmsg);
	//         }

	//     });
	// }

	$scope.gogo = function(){
		tktupdate.save($scope.objt, function(res){

			console.log(res);

			if(res.errcode === 0)
			{
				alert('修改成功');
			}
			else
			{
				alert(res.errmsg);
			}

		});
	}

};
