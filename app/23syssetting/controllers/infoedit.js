module.exports = function($scope, $stateParams, id, flag, sysappsave, sysappgetById, userinfo){

	$scope.section = {};
	$scope.flag = flag;
	//获取应用列表
  	$scope.getInfoById = function () {
	    sysappgetById.save({'id' : id},function (res) {
	        if (res.errcode !== 0) { 
	            alert(res.errmsg);
	            return;
	        }

	        $scope.section = res.data;
	        console.log($scope.section);
	    })
	}
	$scope.getInfoById();

	
	//修改
	$scope.infoSave = function(){
		userinfo.save(function(res) {
	        console.log(res);
	        $scope.section.update_by = res.loginName;
	    });
	    console.log($scope.section);
	    console.log('$scope.section');
		sysappsave.save($scope.section,function(res){
			if (res.errcode !== 0) { 
	            alert(res.errmsg);
	            return;
	        }else{
	        	alert('恭喜亲，修改成功！')
	        	$scope.getInfoById();
	        }
		})
	}

};