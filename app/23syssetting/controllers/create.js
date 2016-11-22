module.exports = function($scope, $stateParams, sysappsave, flag, userinfo){

	$scope.flag = flag;
	$scope.section = {};
	$scope.section.cache_flag = '0';
console.log('flag'+$scope.section.cache_flag);
	//新增
	$scope.infoSave = function(){
		if (confirm('亲，保存么？')) {
			userinfo.save(function(res) {
		        console.log(res);
		        $scope.section.create_by = res.loginName;
		    });
			sysappsave.save($scope.section,function(res){
				if (res.errcode !== 0) { 
		            alert(res.errmsg);
		            return;
		        }else{
		        	alert('恭喜亲，新增成功！');
		        }
			})
		}else{
			return;
		}
	}

};