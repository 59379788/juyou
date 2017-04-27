module.exports = function($scope, $state, $uibModal, userinfo, deleteuserinfo, 
	updateUserAuthInfo, edituserinfo, updateidcard, syncUserAuthInfo){

	$scope.searchform = {};
	$scope.obj = {};
	$scope.userstate = 1;

    $scope.load = function () {
    	var ppp = {};
    	var pcard = '';
        if($scope.searchform.para.length == '11'){
        	ppp.mobile = $scope.searchform.para;
        }else if($scope.searchform.para.length == '18'){
			ppp.papersno = $scope.searchform.para;
        }else{
    		alert("位数错误");
    		return;
    	}
        userinfo.save(ppp, function(res){

         	console.log(res.data);

         	if(res.errcode !== 0)
         	{
         		//alert("数据获取失败");
         		alert(res.errmsg);
         		return;
         	}
         	$scope.obj = res.data;
         	for(var i=0; i<res.data.pcardlist.length; i++) {
				pcard = res.data.pcardlist[i].phycardno + ',' + pcard;
         	}
         	$scope.obj.pcard = pcard.substring(0,pcard.length-1);
         	$scope.obj.digitalcardno = res.data.digitalcardno;
         	
         	$scope.userstate = 0;
        });
    };

    $scope.edit = function (obj) {
        var modalInstance = $uibModal.open({
          template: require('../user/edituserinfo.html'),
          controller: 'edituserinfo',
          size: 'xs',
          resolve: {
            obj : function(){
                return obj;
            },
            edituserinfo : function(){
                return edituserinfo;
            },
            updateidcard : function(){
                return updateidcard;
            }

            
          }
    });

        modalInstance.result.then(function () {
            $scope.load();
        }, function () {

        });

    };

    $scope.clear = function(obj){
    	if (confirm("清除实名制后通过身份证将查询不到票信息，您确认要清除吗？")) {
	    	var para = {
	            userid:obj.userid
	        };
	        console.log(para);
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
	}

	$scope.del = function(obj){
    	if (confirm("您确认要删除吗？")) {
	    	var para = {
	            userid:obj.userid,
	            type:1
	        };
	        console.log(para);
			deleteuserinfo.save(para, function(res){

				console.log(res);

				if(res.errcode === 0)
				{
					alert("删除成功");
					$scope.userstate = 1;
				}
				else
				{
					alert(res.errmsg);
				}

			});
		}
	}

	$scope.forcedel = function(obj){
    	if (confirm("您确认要强制删除吗？")) {
	    	var para = {
	            userid:obj.userid,
	            type:2
	        };
	        console.log(para);
			deleteuserinfo.save(para, function(res){

				console.log(res);

				if(res.errcode === 0)
				{
					alert("强制删除成功");
					$scope.userstate = 1;
				}
				else
				{
					alert(res.errmsg);
				}

			});
		}
	}

	$scope.synccard = function(obj){
    	if (confirm("您确认要同步卡信息吗？")) {
			syncUserAuthInfo.save({'mobile' : obj.mobile}, function(res){

				console.log(res);

				if(res.errcode === 0)
				{
					alert("同步成功");
					$scope.load();
				}
				else
				{
					alert(res.errmsg);
				}

			});
		}
	}

};