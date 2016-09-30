module.exports = function($scope, issuecard){
  $scope.userinfo = {
       'name' : '',	
       'mobile' : '',
       'company_code' : '',
       'start_card_no' : '',
       'end_card_no' : '',
       'unit_price' : '',
       'all_price' : '',
       'cardnum' : '',
       'card_giveout_target' : ''

    };
    //$scope.userinfo.cardnum = $scope.userinfo.end_card_no - $scope.userinfo.start_card_no;

   $scope.saveuserinfo = function(){
		
		issuecard.save($scope.userinfo, function(res){
			console.log(res);
			    if (res.errcode !== 0) {
                   alert(res.errmsg);
                   return;
			    } else {
			    	alert('记录成功');
			    	return;
			    }
     	});                
	};

};