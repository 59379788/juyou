module.exports = function($scope, $state, $stateParams, savetakecarduser, takecardlist, deletetakecarduser){
  $scope.takecarduserlist = function(){ 
    takecardlist.save({}, function(res){ 
    	console.log(res);
    	if (res.errcode !== 0) { 
    		alert(errmsg);
    		return;
    	} else { 
          $scope.objs = res.data;
          return;
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
    		alert(errmsg);
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

  $scope.takecarduserlist = function(){ 
    takecardlist.save({}, function(res){ 
    	console.log(res);
    	if (res.errcode !== 0) { 
    		alert(errmsg);
    		return;
    	} else { 
          $scope.objs = res.data;
          return;
    	}
    });
  };
  $scope.takecarduserlist(); 

  $scope.delete = function(id){ 
  	
  	
  	console.log(id);

  	
  		deletetakecarduser.save({'id':id}, function(res){ 
  		
  			if (res.errcode !== 0) {
                   alert(res.errmsg);
                   return;
			    } else {
			    	alert('删除成功');
                     $scope.takecarduserlist();
			    	
			    }
			     
  		});
  	
  };
  	
  $scope.change = function(id,name,travelagency,mobile,remarks){ 
  	$state.go('app.chatakecarduser', {'id':id,'name':name, 'travelagency':travelagency, 'mobile':mobile, 'remarks':remarks});
  };
    
  

};