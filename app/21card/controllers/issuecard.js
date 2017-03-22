module.exports = function($scope, $state, issuecard, takecardlists,takecardlist){
  
   $scope.nameobj = {
       'name': '' 
   };
   $scope.takecarduserlist = function(){ 
    takecardlists.save({}, function(res){ 
    	if (res.errcode !== 0) { 
    		alert(res.errmsg);
    		return;
    	}
      	$scope.objs = res.data;
        $scope.nameobj.name = res.data[0].name; 
        console.log(res);

      	
    });
  };
  $scope.takecarduserlist(); 

  $scope.selection = function(obj){ 
    console.log(obj);
        if (obj === null) { 
          //console.log(obj);
          $scope.userinfo.name = '';
          $scope.userinfo.mobile = '';
        } else {
    
        $scope.userinfo.mobile = obj.mobile;
        $scope.userinfo.name = obj.name;
        $scope.userinfo.id = obj.id;
        }
    
  };
  console.log($scope.nameobj.name);
  $scope.userinfo = {
  	   'id' : '',
  	   'type' : '1',
       'name' : '',	
       'mobile' : '',
       'company_code' : '',
       'start_card_no' : '',
       'end_card_no' : '',
       'unit_price' : '',
       'all_price' : '',
       'num' : '',
       'remarks' : '',
       'card_giveout_target' : ''

    };
    
    $scope.searchinfo = [];
    //$scope.userinfo.cardnum = $scope.userinfo.end_card_no - $scope.userinfo.start_card_no;

   $scope.saveuserinfo = function(){
	$scope.userinfo.num = $scope.userinfo.end_card_no - $scope.userinfo.start_card_no + 1;
	$scope.userinfo.all_price = $scope.userinfo.unit_price * $scope.userinfo.num;
    if ($scope.userinfo.name === '' || $scope.userinfo.type ==='' || $scope.userinfo.mobile ===''||$scope.userinfo.company_code==='' || $scope.userinfo.start_card_no === '' || $scope.userinfo.end_card_no==='' || $scope.userinfo.unit_price===''||$scope.userinfo.all_price==='' || $scope.userinfo.card_giveout_target===''||$scope.userinfo.num==='') { 
      alert('信息填写不完全，请补充完整！');
    } else {
    		console.log($scope.userinfo);
		    issuecard.save($scope.userinfo, function(res){
			      if (res.errcode !== 0) {
                   alert(res.errmsg);
                   return;
			      } else {
                   alert('记录成功');
                   $scope.userinfo = {
				  	   'id' : '',
				  	   'type' : '1',
				       'name' : '',	
				       'mobile' : '',
				       'company_code' : '',
				       'start_card_no' : '',
				       'end_card_no' : '',
				       'unit_price' : '',
				       'all_price' : '',
				       'num' : '',
				       'remarks' : '',
				       'card_giveout_target' : ''

				    };
                   return;
            }  
    }); 
    }               
	};

};