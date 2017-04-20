module.exports = function($scope, $stateParams, $state, $uibModal,ITEMS_PERPAGE,getUserInfoList,saveRechargeIntegral,toaster){ 
    $scope.info = {
        'mobile' : '',
        'order_code' : ''
    }
    $scope.search = function(){
        getUserInfoList.save($scope.info,function(res){
            if(res.errcode != 0){
                toaster.success({title:"",body:res.errmsg});
                return;
            }
            console.log(res);
            $scope.objs = res.data;
        })
    }

    $scope.recharge = function(userid){
        var modalInstance = $uibModal.open({
          template: require('../views/skrecharge.html'),
          controller: 'skrecharge',
          size: 'lg',
          resolve: {
            saveRechargeIntegral : function(){
                return saveRechargeIntegral;
            },
            userid : function(){
                return userid;
            }
            
          }
        });

        modalInstance.result.then(function () {
          //$scope.getlist();
          
        }, function () {
          //$scope.load();
        });
    }

   $scope.seepicture = function(pimg){
        var modalInstance = $uibModal.open({
          template: require('../views/skacountpicture.html'),
          controller: 'skacountpicture',
          //size: 'lg',
          resolve: {
            pimg : function(){
                return pimg;
            }          
          }
        });

        modalInstance.result.then(function () {
          
         
        }, function () {
         //  $scope.getlist();
          //$log.info('Modal dismissed at: ' + new Date());
        });
     //  $scope.getlist();
   }
    
};