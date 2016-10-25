module.exports = function($scope, $stateParams, viewlist, tktinfo, 
	tktupdate, placeinfo, makeArr, makeStr, getDate, str2date){

	$scope.placeid = '';
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
	$scope.midstart = new Date();
	$scope.midend = new Date();
	
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
			$scope.midstart = str2date( $scope.objt.start_date);
			$scope.midend = str2date($scope.objt.end_date);
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
		$scope.objt.start_date =  getDate($scope.midstart);
		$scope.objt.end_date =  getDate($scope.midend);
		if ( parseInt($scope.objt.start_date.substring(0,4)+$scope.objt.start_date.substring(5,7)+$scope.objt.start_date.substring(8,10)) > parseInt($scope.objt.end_date.substring(0,4)+$scope.objt.end_date.substring(5,7)+$scope.objt.end_date.substring(8,10)) ) {
			alert('有效时间的初始日期应早于末尾日期');
			return;
		}
		console.log(parseInt($scope.objt.start_date.substring(0,4)+$scope.objt.start_date.substring(5,7)+$scope.objt.start_date.substring(8,10)));
		console.log('hhhhhhhhhh');
		console.log(parseInt($scope.objt.end_date.substring(0,4)+$scope.objt.end_date.substring(5,7)+$scope.objt.end_date.substring(8,10)));
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
