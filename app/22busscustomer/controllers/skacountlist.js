module.exports = function($scope, $stateParams,customerlist,review, $uibModal,role,create,message){

	// 获取申请人列表
	$scope.getlist = function(){ 
	 customerlist.save({}, function(res){ 
      if (res.errcode !== 0) { 
    		alert(res.errmsg);
    		return;
    	} else { 
          $scope.objs = res.data;
          console.log($scope.objs);
          return;
    	}
	 });
    };
    $scope.getlist();
	// 通过
	$scope.pass = function(id){ 
		console.log(id);
	  review.save({'id' : id}, function(res){ 
	  	if (res.errcode !== 0) { 
    		alert(res.errmsg);
    		return;
    	} else { 
          $scope.objss = res.data;
          console.log($scope.objss);
          return;
    	}
	  });
	  $scope.getlist();
		
	};
	// 创建账号
	$scope.creataccount = function(id){ 
		//alert('创建账号');
		var modalInstance = $uibModal.open({
          template: require('../views/creataccount.html'),
          controller: 'creataccount',
          //size: 'lg',
          resolve: {
            role : function(){
                return role;
            },
            create : function(){
                return create;
            },
            message : function(){
                return message;
            },
            id : function(){
                return id;
            }
            
          }
        });

        modalInstance.result.then(function () {

          //init();
           $scope.getlist();
        }, function () {
           
          //$log.info('Modal dismissed at: ' + new Date());
        });

	};
    
 


};