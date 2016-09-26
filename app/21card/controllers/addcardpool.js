module.exports = function($scope, addcardpool){

    $scope.cardinfo = {
			'pool_name' : '',
			'pool_type' : '1'
		};
	$scope.savecardpool = function(){
		addcardpool.save($scope.cardinfo, function(res){
			//alert('baocun');
			console.log($scope.cardinfo);
			console.log(res);
			    //alert('hfdkh');
			    if (res.errcode !== 0) {
                   alert(res.errmsg);
                   return;
			    } else {
			    	alert('保存成功');
			    	return;
			    }
     	});                
	};

};