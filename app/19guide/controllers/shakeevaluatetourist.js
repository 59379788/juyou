module.exports = function($scope, $state, shakeevaluatetourist, $stateParams, $uibModal, shakeevaluateanswerlist, shakeanswers, shakeanswer, shakegetquestion){

  $scope.load = function(){
    	shakeevaluatetourist.get({'binding_code':$stateParams.code}, function(res){
            console.log(res);
            if(res.errcode !== 0)
            {
                alert(res.errmsg);
                return;
            }
            $scope.objs = res.data;

        });
    }
    $scope.load();
	$scope.info = function(openid)
    {
        var modalInstance = $uibModal.open({
          template: require('../views/shakequestioninfo.html'),
          controller: 'shakequestioninfo',
          size: 'lg',
          resolve: {
            openid : function(){
                return openid;
            },
            shakeevaluateanswerlist : function(){
                return shakeevaluateanswerlist;
            } 
          }
        });
    }
  $scope.sub = function(openid)
    {
        var modalInstance = $uibModal.open({
          template: require('../views/shakeanswers.html'),
          controller: 'shakeanswers',
          size: 'lg',
          resolve: {
            openid : function(){
                return openid;
            },
            shakegetquestion : function(){
                return shakegetquestion;
            },
            shakeanswers : function(){
                return shakeanswers;
            },
            shakeanswer : function(){
                return shakeanswer;
            }
          }
        });

        modalInstance.result.then(function () {
            $scope.load();
        }, function () {
            //$scope.load();
          //$log.info('Modal dismissed at: ' + new Date());
        });
    }


};