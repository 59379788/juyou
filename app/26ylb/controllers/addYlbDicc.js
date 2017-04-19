module.exports = function($scope, $state, $stateParams, $resource,saveDictionary,getDictionary){

    var id = $stateParams.id;
    console.log(id);
    if(id){
        getDictionary.save({'id' : id},function(res){
            if(res.errcode === 0){
				console.log(res);                
                $scope.obj = res.data;
			}else{
				alert(res.errmsg);
			}
        })
    }
    $scope.obj = {};
	$scope.save = function(){    
		saveDictionary.save($scope.obj, function(res){
			if(res.errcode != 0){
				alert(res.errmsg);
				return;
			}
			console.log(res);
			alert('操作成功');
        	$state.go('app.dicclist');		
			
		});
	};


	//取消
	$scope.cancel = function () {
        $state.go('app.dicclist');		
	};


	

 };






