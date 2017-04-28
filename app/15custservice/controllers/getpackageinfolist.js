module.exports = function($scope,getUserBaseInfomobile,$uibModal,toaster){

	$scope.searchform = {};
    
    $scope.search = function () {
        
        getUserBaseInfomobile.save($scope.searchform, function(res){
            console.log($scope.searchform);
         	console.log(res);

         	if(res.errcode !== 0)
         	{
         		alert(res.errmsg);
         		return;
         	}

         	$scope.obj = res.data;

        });

    };
    $scope.seepicture = function(pimg){
         var modalInstance = $uibModal.open({
          template: require('../user/userinfopicture.html'),
          controller: 'userinfopicture',
        //   size: 'lg',
          resolve: {
            pimg : function(){
                return pimg;
            }
          }
        });

        modalInstance.result.then(function () {
        //   $scope.getlist();
          
        }, function () {
          //$scope.load();
        });
    }

};