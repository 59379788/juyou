module.exports = function($scope, $state, $stateParams, savetakecarduser, takecardlist, deletetakecarduser,ITEMS_PERPAGE){
     /* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条

    $scope.takecarduserlist = function(){
        var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage
        };
       //para = angular.extend($scope.searchform, para); 
        takecardlist.save(para, function(res){ 
    	    console.log(para);
    	    if (res.errcode !== 0) { 
    		    alert(res.errmsg);
    		   
    	    } else { 
                $scope.objs = res.data.results;
                $scope.bigTotalItems = res.data.totalRecord;
                console.log(res);
                
    	    }
       });
    };
    $scope.takecarduserlist(); 

  $scope.takecarduserinfo = { 
  	'name' : '',
  	'travelagency' : '',
  	'mobile' : '',
  	'remarks' : ''
  };
  $scope.save = function(){ 
  	if ($scope.takecarduserinfo.name !== '' && $scope.takecarduserinfo.travelagency !=='' && $scope.takecarduserinfo.mobile!=='' && $scope.takecarduserinfo.remarks!=='') { 
     		
     	 
     savetakecarduser.save($scope.takecarduserinfo, function(res){ 

     	// 刷新拿卡人列表
     	$scope.takecarduserlist(); 
     	console.log(res);
    	if (res.errcode !== 0) { 
    		alert(res.errmsg);
    		return;
    	} else { 
          $scope.objs = res.data;
          return;
    	}
     });
    } else { 
    	alert('参数不能为空');
    	return;
    }
  };

  /*$scope.takecarduserlist = function(){ 
    takecardlist.save({}, function(res){ 
    	console.log(res);
    	if (res.errcode !== 0) { 
    		alert(res.errmsg);
    		return;
    	} else { 
          $scope.objs = res.data;
          return;
    	}
    });
  };*/
  //$scope.takecarduserlist(); 

  $scope.delete = function(id){ 
  	console.log(id);
  	  if (confirm("你确定要删除吗?")) {
          deletetakecarduser.save({'id':id}, function(res){ 
          if (res.errcode !== 0) {
                   alert(res.errmsg);
                   return;
          } else {
            alert('删除成功');
                     $scope.takecarduserlist();
            
          }
           
      });
      } else { 
      }
  		
  	
  };
  	
  $scope.change = function(id,name,travelagency,mobile,remarks){ 
  	console.log(id,name,travelagency,mobile,remarks);
  	$state.go('app.changecarduser', {'id':id,'name':name, 'travelagency':travelagency, 'mobile':mobile, 'remarks':remarks});
  };
    
  

};