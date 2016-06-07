module.exports = function($scope, $stateParams){

	$scope.groupobj = {};
	$scope.groupobj.code = $stateParams.code;

	//初始化查询游客
	/*$scope.load = function(){
		infolist.get({'code' : $stateParams.code}, function(res){
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
	$scope.load();*/


};
