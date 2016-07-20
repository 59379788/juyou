module.exports = function($scope, $stateParams, $state, code, infolist,  $uibModalInstance){

	$scope.load = function(){
		infolist.get({'code' : code}, function(res){
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
	

	$scope.cancel = function () {
		$uibModalInstance.close();
	};

	$scope.signup = function(){

		$state.go('app.signupsellinggroup', {'code' : code});
	};
};
