module.exports = function($scope, $state, $stateParams, savetakecarduser, takecardlist){
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

};