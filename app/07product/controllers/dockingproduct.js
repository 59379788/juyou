module.exports = function($scope, dockingproduct,getDate,$uibModal,$state){

	
    dockingproduct.	save({}, function(res){
        if(res.errcode === 0)
		{  
			for(var i=0;i<res.data.length;i++){
	
			
                      if(res.data[i].DataJson === undefined || res.data[i].DataJson.length === 0){
						   res.data[i].flag="无";
						
						}
						else{
						   res.data[i].flag="有";
							
						}
			}
			
			$scope.objs = res.data;

		}
		else
		{
			alert(res.errmsg);
		}
    });
   
    $scope.info=function(obj){
	
        var modalInstance = $uibModal.open({
			template: require('../views/detailinfo.html'),
			controller: 'detailinfo',
			url: '/productdetailinfo331',
			size: 'lg',
			resolve: {
				'obj': function () {
					return obj;
				}	
		   }
		});

		modalInstance.opened.then(function () {// 模态窗口打开之后执行的函数  
			// $scope.load();
		});
		modalInstance.result.then(function (showResult) {
			
		}, function (reason) {
		 $state.go("app.dockingproduct",{},{reload:true}); 
		
		});
    }

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