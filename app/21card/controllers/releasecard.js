module.exports = function($scope, releasecard){

	$scope.relase = function(){
		$scope.cardinfo = {
			'pool_code' : '',
			'pool_name' : '',
			'pool_type' : '',
			'company_code' : '',
			'sys_area' : ''
		};

		releasecard.save($scope.cardinfo, function(res){
			console.log(res);
			    //alert('hfdkh');
			    if (res.errcode !== 0) {
                   alert(res.errmsg);
                   return;
			    } else {
			    	alert('释放成功');
			    	return;
			    }
     	});                
	};

};