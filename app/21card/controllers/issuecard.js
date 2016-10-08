module.exports = function($scope, issuecard){
  $scope.userinfo = {
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
    //$scope.userinfo.cardnum = $scope.userinfo.end_card_no - $scope.userinfo.start_card_no;

   $scope.saveuserinfo = function(){
   	console.log($scope.userinfo.num);
	$scope.userinfo.num = $scope.userinfo.end_card_no - $scope.userinfo.start_card_no + 1;
	$scope.userinfo.all_price = $scope.userinfo.unit_price * $scope.userinfo.num;	
		issuecard.save($scope.userinfo, function(res){

			console.log($scope.userinfo.num);
			console.log($scope.userinfo);
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