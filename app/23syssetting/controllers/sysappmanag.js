module.exports = function($scope, $stateParams, $uibModal, sysappsave, sysappdelete, sysappgetById, sysappgetUrlList, userinfo){

	/* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = 10;         //每页显示几条


	$scope.section = {};
	$scope.searchform = {};
	$scope.flag ;
	//获取应用列表
  	$scope.getlist = function () {
  		var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage
        };
	    sysappgetUrlList.save(para,function (res) {
	        if (res.errcode !== 0) { 
	            alert(res.errmsg);
	            return;
	        }

	        $scope.section = res.data.results;
	        $scope.bigTotalItems = res.data.totalRecord;
	    })
	}
	$scope.getlist();

	//搜索
	$scope.searchinfo = function(){
		console.log($scope.searchform);
		var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage
        };
        para = angular.extend($scope.searchform, para);
		sysappgetUrlList.save(para,function (res) {
	        if (res.errcode !== 0) { 
	            alert(res.errmsg);
	            return;
	        }

	        $scope.section = res.data.results;
	        $scope.bigTotalItems = res.data.totalRecord;
	    });
	    $scope.getlist();
    }

	//新增
	$scope.create = function(){
		$scope.flag = 1;
		var modalInstance = $uibModal.open({
            template: require('../views/create.html'),
            controller:'create',
            size: 'lg',
            resolve: {
                sysappsave : function(){
                    return sysappsave;
                },
                flag : function(){
                	return $scope.flag;
                },
    	        userinfo : function(){
    	            return userinfo;
    	        }
            }
        });

        modalInstance.result.then(function () {
            //$scope.load();
        }, function () {
            $scope.getlist();
            //$log.info('Modal dismissed at: ' + new Date());
        });
    }

	//修改
	$scope.edit = function(index){
		$scope.flag = 1;
		var id = $scope.section[index].id;
		var modalInstance = $uibModal.open({
            template: require('../views/infoedit.html'),
            controller:'infoedit',
            size: 'lg',
            resolve: {
                id : function(){
                    return id;
                },
                sysappsave : function(){
                    return sysappsave;
                },
                sysappgetById : function(){
                    return sysappgetById;
                },
                flag : function(){
                	return $scope.flag;
                },
    	        userinfo : function(){
    	            return userinfo;
    	        }
            }
        });

        modalInstance.result.then(function () {
            //$scope.load();
        }, function () {
            $scope.getlist();
            //$log.info('Modal dismissed at: ' + new Date());
        });
	}

	//详情
	$scope.info = function(index){
		$scope.flag = 0;
		var id = $scope.section[index].id;
		var modalInstance = $uibModal.open({
            template: require('../views/infomodel.html'),
            controller:'infoedit',
            size: 'lg',
            resolve: {
                id : function(){
                    return id;
                },
                sysappsave : function(){
                    return sysappsave;
                },
                sysappgetById : function(){
                    return sysappgetById;
                },
                flag : function(){
                	return $scope.flag;
                },
    	        userinfo : function(){
    	            return userinfo;
    	        }
            }
        });

        modalInstance.result.then(function () {
            //$scope.load();
        }, function () {
            $scope.getlist();
            //$log.info('Modal dismissed at: ' + new Date());
        });
	}

    //删除
    $scope.del = function(index){
        if (confirm('亲，确定删除么？')) {
            sysappdelete.save({'id': $scope.section[index].id},function(res){
                if (res.errcode !== 0) { 
                    alert(res.errmsg);
                    return;
                }else{
                    alert('恭喜亲，删除成功！')
                    $scope.getlist();
                }
            })
        }
    }

    //删除
    $scope.inpara = function(index){
        if (confirm('亲，去入参么？')) {
            // sysappdelete.save({'id': $scope.section[index].id},function(res){
            //     if (res.errcode !== 0) { 
            //         alert(res.errmsg);
            //         return;
            //     }else{
            //         alert('恭喜亲，删除成功！')
            //         $scope.getlist();
            //     }
            // })
        }
    }

    //删除
    $scope.outpara = function(index){
           if (confirm('亲，去出参么？')) {
        //     sysappdelete.save({'id': $scope.section[index].id},function(res){
        //         if (res.errcode !== 0) { 
        //             alert(res.errmsg);
        //             return;
        //         }else{
        //             alert('恭喜亲，删除成功！')
        //             $scope.getlist();
        //         }
        //     })
           }
    }
};