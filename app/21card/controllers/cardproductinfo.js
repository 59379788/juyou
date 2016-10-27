module.exports = function($scope, $state, $stateParams, cardproductinfo){
	var id = $stateParams.id;
	console.log(id);
   cardproductinfo.save({'id': id}, function(res){ 
   	if (res.errcode !== 0) { 
   		alert(res.errmsg);
   		return;
   	} 
     	$scope.obj = res.data;
        console.log($scope.obj);
        if ($scope.obj.card_type === "1") { 
        	$scope.obj.card_type = '散客拼团';
        } else if ($scope.obj.card_type === "2") {
            $scope.obj.card_type = '独立成团'; 
        } else if ($scope.obj.card_type === "3") { 
        	$scope.obj.card_type = '自由行';
        } else if ($scope.obj.card_type === "4") { 
        	$scope.obj.card_type = '自由驾';
        }
   });
	


};