module.exports = function($scope, obj,$uibModalInstance){

	console.log(obj);
    console.log("77777");
    $scope.obj=obj;
    // dockingproduct.	save({}, function(res){
    //     	if(res.errcode === 0)
	// 	{
	// 		$scope.objs = res.data;
	// 		console.log(res);
    //         console.log("=======+++++");
	// 	}
	// 	else
	// 	{
	// 		alert(res.errmsg);
	// 	}
    // });
   
    // $scope.info=function(obj){
    //     // alert("wu");
    //     var modalInstance = $uibModal.open({
	// 		template: require('../views/detailinfo.html'),
	// 		controller: 'detailinfo',
	// 		url: '/productdetailinfo',
	// 		size: 'lg',
	// 		resolve: {
	// 			'obj': function () {
	// 				return obj;
	// 			}
				
	// 		}
	// 	});

	// 	modalInstance.opened.then(function () {// 模态窗口打开之后执行的函数  
	// 		// $scope.load();
	// 	});
	// 	modalInstance.result.then(function (showResult) {
			
	// 	}, function (reason) {
			
	// 		// // click，点击取消，则会暑促cancel  
	// 		// $log.info('Modal dismissed at: ' + new Date());
	// 	});
    // }

    // $scope.obj = {
	// 	'title' : title
	// };


	// talist().then(function(res) {
	//     console.log(res);
	// 	if(res.errcode === 0)
	// 	{
	// 		$scope.taarr = res.data;
	// 		$scope.obj.seller_code=$scope.taarr[0].CODE;
	// 	}
	// 	else
	// 	{
	// 		alert(res.errmsg);
	// 	}
	// });

	// function load(){
	// 	sellerList.get({'sale_code' : code}, function(res){

	// 		console.log(res);
	// 		if(res.errcode === 0)
	// 		{
	// 			$scope.sellers = res.data;
	// 		}
	// 		else
	// 		{
	// 			alert(res.errmsg);
	// 		}

	// 	});
	// }
	// load();

	// $scope.create = function(){
	// 	tstcreate.save({'sale_code' : code, 'company_code' : $scope.obj.seller_code}, function(res){
	// 		if(res.errcode === 0)
	// 		{
	// 			load();
	// 		}
	// 		else
	// 		{
	// 			alert(res.errmsg);
	// 		}

	// 	});
	// };

	// $scope.start = function(sellercode){
	// 	tststart.save({'sale_code' : code, 'company_code' : sellercode}, function(res){
	// 		if(res.errcode === 0)
	// 		{
	// 			load();
	// 		}
	// 		else
	// 		{
	// 			alert(res.errmsg);
	// 		}
	// 	});
	// };

	// $scope.stop = function(sellercode){
	// 	tststop.save({'sale_code' : code, 'company_code' : sellercode}, function(res){
	// 		if(res.errcode === 0)
	// 		{
	// 			load();
	// 		}
	// 		else
	// 		{
	// 			alert(res.errmsg);
	// 		}
	// 	});
	// };


	// $scope.cancel = function(){
	// 	$uibModalInstance.close();
	// }
	
	
};