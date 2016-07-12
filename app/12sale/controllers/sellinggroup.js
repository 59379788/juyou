module.exports = function($scope, $state, grouplist, ITEMS_PERPAGE, 
    getDate, update, groupdetail, backlist, outTicketConfirmation,
    $uibModal, 
    //报名
    goodlist, getattrbycode, usersubsibyquery, signup,
    //报名详情
    infolist, cancleGroup, delsignup,
    //编辑
    groupsalelist, groupone, updatedetail, userinfo,
    //新建
    groupsale, createOrder
    ){

   	$scope.searchform = {};
   	$scope.searchform.orderstate = '0';

    $scope.usedate = '0';

	$scope.section = {};
	$scope.section.start = {};
	$scope.section.start.date = new Date();


	$scope.open = function(obj) {
		obj.opened = true;
	};

	$scope.create = function(id){

        var modalInstance = $uibModal.open({
          template: require('../views/sellinggroupmodel.html'),
          controller: 'sellinggroupcreate',
          size: 'lg',
          resolve: {
            groupsale : function(){
                return groupsale;
            },
            createOrder : function(){
                return createOrder;
            },
            groupsalelist : function(){
                return groupsalelist;
            },
            getDate : function(){
                return getDate;
            },
            userinfo : function(){
                return userinfo;
            }
          }
        });

        modalInstance.result.then(function () {
            $scope.load();
        }, function () {
            //$scope.load();
          //$log.info('Modal dismissed at: ' + new Date());
        });

    	//$state.go('app.createsellinggroup');

    };


    /* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条
    
    $scope.load = function () {

    	var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage
        };
        if($scope.usedate == '1')
        {
            para['arrival_date'] = getDate($scope.section.start.date);
        }
        switch($scope.searchform.orderstate)
        {
        	case '1':
        		para['del_flg'] = '0';
        		para['outstate'] = '1';
        		break;
        	case '2':
        		para['del_flg'] = '0';
        		para['outstate'] = '0';
        		break;
    		case '3':
        		para['del_flg'] = '1';
        		break;	
        }
        
        para = angular.extend(para, $scope.searchform);

        console.log(para);
        
        grouplist.save(para, function(res){

            console.log(res);

            if(res.errcode === 0)
            {
                $scope.objs = res.data.results;console.log($scope.objs);
                $scope.bigTotalItems = res.data.totalRecord;
            }
            else
            {
                alert(res.errmsg);
            }

        });

    };
    $scope.load();

    $scope.del = function (code) {
    	if (confirm("确定要删除吗?")) {
		    update.get({'code' : code, 'del_flg' : '1'}, function(res){

		        if(res.errcode === 0)
				{
					$scope.load();
				}
				else
				{
					alert(res.errmsg);
				}

		    });
	    }
    };

    $scope.recovery = function (code) {
	    update.get({'code' : code, 'del_flg' : '0'}, function(res){

	        if(res.errcode === 0)
			{
				$scope.load();
			}
			else
			{
				alert(res.errmsg);
			}

	    });
    };

    $scope.edit = function (obj) {
        var modalInstance = $uibModal.open({
          template: require('../views/sellinggroupmodel.html'),
          controller: 'sellinggroupupdate',
          size: 'lg',
          resolve: {
            code : function(){
                return obj.code;
            },
            groupsalelist : function(){
                return groupsalelist;
            },
            groupone : function(){
                return groupone;
            },
            update : function(){
                return update;
            },
            updatedetail : function(){
                return updatedetail;
            },
            userinfo : function(){
                return userinfo;
            },
            outstate : function(){
                return obj.outstate;
            }
            
          }
        });

        modalInstance.result.then(function () {
            $scope.load();
        }, function () {
            //$scope.load();
          //$log.info('Modal dismissed at: ' + new Date());
        });

    	//$state.go('app.editsellinggroup', {'code' : code});
    };

    $scope.detail = function(code){
        var modalInstance = $uibModal.open({
          template: require('../views/sellingdetail.html'),
          controller: 'sellingdetail',
          size: 'lg',
          resolve: {
            code : function(){
                return code;
            },
            groupdetail : function(){
                return groupdetail;
            },
            backlist : function(){
                return backlist;
            }
            
          }
        });

        modalInstance.result.then(function () {
            $scope.load();
        }, function () {
            //$scope.load();
          //$log.info('Modal dismissed at: ' + new Date());
        });

        //$state.go('app.sellingdetail', {'code' : code});
    }

    $scope.info = function (obj) {
        var modalInstance = $uibModal.open({
          template: require('../views/sellinggroupinfo.html'),
          controller: 'sellinggroupinfo',
          size: 'lg',
          resolve: {
            code : function(){
                return obj.code;
            },
            outstate : function(){
                return obj.outstate;
            },
            infolist : function(){
                return infolist;
            },
            cancleGroup : function(){
                return cancleGroup;
            },
            userinfo : function(){
                return userinfo;
            },
            delsignup : function(){
                return delsignup;
            }
          }
        });

        modalInstance.result.then(function () {
            $scope.load();
        }, function () {
            //$scope.load();
          //$log.info('Modal dismissed at: ' + new Date());
        });


    	//$state.go('app.infosellinggroup', {'code' : code});
    };

    $scope.signup = function (obj) {
        var modalInstance = $uibModal.open({
          template: require('../views/sellinggroupsignup.html'),
          controller: 'sellinggroupsignup',
          size: 'lg',
          resolve: {
            code : function(){
                return obj.code;
            },
            plan_count : function(){
                return obj.plan_count;
            },
            goodlist : function(){
                return goodlist;
            },
            getattrbycode : function(){
                return getattrbycode;
            },
            usersubsibyquery : function(){
                return usersubsibyquery;
            },
            signup : function(){
                return signup;
            },
            infolist : function(){
                return infolist;
            }
          }
        });

        modalInstance.result.then(function () {
            $scope.load();
        }, function () {
            //$scope.load();
          //$log.info('Modal dismissed at: ' + new Date());
        });

    	//$state.go('app.signupsellinggroup', {'code' : code});
    };

    $scope.outticket = function(code){

    	if (confirm("确定要出票吗?")) {
	    	outTicketConfirmation.save({'code' : code}, function(res){

			    console.log(res);

			    if(res.errcode === 0)
			    {
			        alert("出票成功，请注意查收短信！");
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
