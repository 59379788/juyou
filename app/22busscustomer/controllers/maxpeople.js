module.exports = function($scope, $stateParams, $state, classAList, saveLimit,$uibModal,ITEMS_PERPAGE,getlimit,toaster){   
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
            console.log($scope.objs);
        })
    };
     
    $scope.getlist();

    $scope.limit = function(code){
        var modalInstance = $uibModal.open({
          template: require('../views/addlimit.html'),
          controller: 'addlimit',
          size: '',
          resolve: {
            code : function(){
                return code;
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

    $scope.seepeople = function(code){
        getlimit.save({'company_code' : code},function(res){
            if(res.errcode != 0){
                toaster.error({title : "", body:res.errmsg});
                return;
            }
            console.log(res);
            alert(res.data.limits);
            // toaster.error({title : "", body:res.errmsg});
            
        })
    }

   

};