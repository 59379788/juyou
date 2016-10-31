module.exports = function($scope, $stateParams, $uibModal,supplierlist,saveconfirm){
    // 获取申请人列表信息
    $scope.getlist = function(){
        supplierlist.save({}, function(res){
            if (res.errcode !== 0) {
                alert(res.errmsg);
                return; 
            }
            $scope.objs = res.data;
            console.log($scope.objs);


        });
    };
    $scope.getlist();
    // 申请人确认
    $scope.supplierconfirm = function(id,state,confirm_name){
        var modalInstance = $uibModal.open({
            template: require('../views/supplyremark.html'),
            controller: 'supplyremark',
          //size: 'lg',
            resolve: {
                id : function(){
                return id;
                },
                state : function(){
                return state;
                },
                confirm_name : function(){
                return confirm_name;
                },
                saveconfirm : function(){
                return saveconfirm;
                }
            
            }
        });

        modalInstance.result.then(function () {

          //init();
           $scope.getlist();
        }, function () {
           
          //$log.info('Modal dismissed at: ' + new Date());
        });    
    };

};