module.exports = function($scope, $stateParams, $state, classAList, saveLimit,$uibModal,ITEMS_PERPAGE,toaster){   
	/* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条
    $scope.parameters = {
        'ronation_state' : ''
    };
    $scope.getlist = function () {
        console.log('猎鸟');
        var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage
        };
        // para = angular.extend($scope.parameters, para);
        classAList.query({}, function(res) {
            var array = res;
            array.splice(0,1);
            $scope.objs = array;
            // for(var i = 0; i < array.length; i++){
            //     if(array[i].)
            // }
        
        })
    };
     
    $scope.getlist();

    $scope.limit = function(id){
        alert('11');
        var modalInstance = $uibModal.open({
          template: require('../views/addlimit.html'),
          controller: 'addlimit',
          size: '',
          resolve: {
            id : function(){
                return id;
            },
            saveLimit : function(){
                return saveLimit;
            }
          }
        });

        modalInstance.result.then(function () {
          $scope.getlist();
          
        }, function () {
          //$scope.load();
        });
    }

   

};