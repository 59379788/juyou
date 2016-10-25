module.exports = function($scope, $state, $stateParams, savetakecarduser){
  var id = $stateParams.id; 
  var name = $stateParams.name;
  var travelagency = $stateParams.travelagency;
  var mobile = $stateParams.mobile;
  var remarks = $stateParams.remarks;
  console.log(id);
  console.log(name);
  $scope.takecarduserinfo = { 
  	'id' : id,
  	'name' : name,
  	'travelagency' : travelagency,
  	'mobile' : mobile,
  	'remarks' : remarks
  };
  $scope.save = function(){ 
  	if ($scope.takecarduserinfo.name !== '' && $scope.takecarduserinfo.travelagency !=='' && $scope.takecarduserinfo.mobile!=='' && $scope.takecarduserinfo.remarks!=='') { 
     		
     	 
     savetakecarduser.save($scope.takecarduserinfo, function(res){ 
     	 console.log($scope.takecarduserinfo);
     	console.log(res);
    	if (res.errcode !== 0) { 
    		alert(res.errmsg);
    		return;
    	} else { 
    		alert('修改成功');
        //  $scope.objs = res.data;
          $state.go('app.takecard');
          return;
    	}
     });
    } else { 
    	alert('参数不能为空');
    	return;
    }
  };

 
    
  

};