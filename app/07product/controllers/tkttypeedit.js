module.exports = function($scope, $stateParams, viewlist, $state,tktinfo, 
	tktupdate, placeinfo, makeArr, makeStr, getDate, str2date){
    var placeid = $stateParams.placeid;
	$scope.placeid = '';
	$scope.id = $stateParams.id;
	//有效区间
	// $scope.section = {};
	// $scope.section.start = {};
	// $scope.section.start.date = {};

	// $scope.section.end = {};
	// $scope.section.end.date = {};

	// $scope.today = function() {
	// 	$scope.section.start.date = $scope.section.end.date = new Date();
	// };
	// $scope.today();
	// $scope.open = function(obj) {
	// 	obj.opened = true;
	// };

	$scope.objs = [];
	//$scope.midstart = new Date();
	//$scope.midend = new Date();
	
	$scope.flag = true;
	
	$scope.objt = {
		'name' : '',
	//	'code' : '',
		'place_code' : '',
		'used_state' : '0',
		'state' : '1',
		'book_info' : ''
	};
    
    

	tktinfo.get({'id' : $stateParams.id}, function(res){
		console.log(res);

		if(res.errcode === 0)
		{
			$scope.objt = res.data;
			//$scope.midstart = str2date( $scope.objt.start_date);
			//$scope.midend = str2date($scope.objt.end_date);
			$scope.objs = makeArr(res.data.print_setup);
			//getplaceinfo();
		}

	});

	//景区下拉
	viewlist().then(function(res) {

	        if(res.errcode === 0)
	        {
	        	$scope.viewarr = res.data;
	        	//$scope.objt.place_code = res.data[0].code;
	        }
	        else
	        {
	            alert(res.errmsg);
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
		console.log($scope.objt);
		$scope.objt['print_setup'] = makeStr($scope.objs);
		tktupdate.save($scope.objt, function(res){			
			if(res.errcode === 0)
			{
				alert('修改成功');
								// $state.go('app.tkttype',{'placeid' : placeid});
				$state.go('app.tkttype',{'placeid' : placeid});

			}
			else
			{
				alert(res.errmsg);
			}
		});
	}


	// $scope.objs = [
	// 	{
	// 		'name' : '电瓶车'
	// 	},
	// 	{
	// 		'name' : '博物馆'
	// 	},
	// 	{
	// 		'name' : '门票'
	// 	}
	// ];

	$scope.printadd = function(){
		var obj = {
			'name' : ''
		};
		$scope.objs.push(obj);
	};

	$scope.printdel = function(index){
		$scope.objs.splice(index,1); 
	};


	// function makeArr(str){
	// 	var obj = [];

	// 	if(str === undefined || str.length === 0) return obj;

	// 	var arr = str.split(',');
	// 	for(var i = 0; i < arr.length; i++)
	// 	{
	// 		obj.push({'name' : arr[i]});
	// 	}
	// 	return obj;
	// }

	// function makeStr(arr){

	// 	if(!angular.isArray(arr)) return '';

	// 	var arr1 = [];
	// 	for(var i = 0; i < arr.length; i++)
	// 	{
	// 		arr1.push(arr[i].name);
	// 	}
	// 	return arr1.join(',');
	// }

};
