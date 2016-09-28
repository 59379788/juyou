module.exports = function($scope, $stateParams, used, lost){
	//alert('sfsfa');
	var poolcode = $stateParams.poolcode;
    console.log(poolcode);

    $scope.cardinfo = {
    	'cardno' : ''
    };
  $scope.used = function(){
    	
    	used.save({}, function(res){
			
			console.log(res);
			if (res.errcode !== 0) {
				alert(res.errmsg);
				return;
			}
			//$scope.cardpoollists = res.data;
		});
    };


    $scope.lost = function(){
    	alert('挂失');
    	lost.save($scope.cardinfo.cardno, poolcode, function(res){

			console.log($scope.cardinfo.cardno);
			console.log(res);
			if (res.errcode !== 0) {
				alert(res.errmsg);
				return;
			}
			//$scope.cardpoollists = res.data;
		});
    };
    //$scope.getlist();*/
};