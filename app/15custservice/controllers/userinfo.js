module.exports = function($scope, $state, userinfo, $uibModal,
	userinfobypapersno, updateUserAuthInfo, oneuserinfo, updateUserSubsidy, edituserinfo){

	$scope.searchform = {};

    $scope.load = function () {
        if($scope.searchform.para.length == '11'){
        	$scope.searchform.mobile = $scope.searchform.para;
	        userinfo.save($scope.searchform, function(res){

	         	console.log(res.data);

	         	if(res.errcode !== 0)
	         	{
	         		alert("数据获取失败");
	         		return;
	         	}

	         	$scope.obj = res.data;

	        });
        }else if($scope.searchform.para.length == '18'){
    		$scope.searchform.papersno = $scope.searchform.para;
	        userinfobypapersno.save($scope.searchform, function(res){

	         	console.log(res.data);

	         	if(res.errcode !== 0)
	         	{
	         		alert("数据获取失败");
	         		return;
	         	}

	         	$scope.obj = res.data;

	        });

    	}else{
    		alert("位数错误");
    	}

    };

    $scope.edit = function (mobile) {
        var modalInstance = $uibModal.open({
          template: require('../user/edituserinfo.html'),
          controller: 'edituserinfo',
          size: 'xs',
          resolve: {
            mobile : function(){
                return mobile;
            },
            oneuserinfo : function(){
                return oneuserinfo;
            },
            edituserinfo : function(){
                return edituserinfo;
            },
            updateUserSubsidy : function(){
                return updateUserSubsidy;
            }
            
          }
        });

        modalInstance.result.then(function () {
            $scope.load();
        }, function () {

        });

    };

    $scope.clear = function(mobile){
    	var para = {
            mobile:mobile
        };
		updateUserAuthInfo.save(para, function(res){

			console.log(res);

			if(res.errcode === 0)
			{
				alert("清除实名制成功");
				$scope.load();
			}
			else
			{
				alert(res.errmsg);
			}

		});
	}

	$scope.create = function(){

		$state.go('app.createuserinfo');
		
	};

};