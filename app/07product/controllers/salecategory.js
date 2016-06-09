module.exports = function($scope, salecategorylist, $uibModal, 
    dictbytypelist, salecategoryinsert, salecategorydelete){


    function load(){
        salecategorylist.get({}, function(res){

            console.log(res);

            if(res.errcode === 0)
            {
                $scope.objs = res.data;
            }
            else
            {
                alert(res.errmsg);
            }

           
        });
    }
    load();

        //打开模态框
    $scope.create = function(){

        //alert(device_code);

        var modalInstance = $uibModal.open({
          template: require('../views/salecategorymodel.html'),
          controller: 'salecategorycreate',
          resolve: {
            dictbytypelist : function(){
                return dictbytypelist;
            },
            salecategoryinsert : function(){
                return salecategoryinsert;
            }
          }
        });

        modalInstance.result.then(function () {
          
          load();

        }, function () {
          //$log.info('Modal dismissed at: ' + new Date());
        });
    }

   
    $scope.del = function(obj){

        salecategorydelete.save(obj, function(res){

            console.log(res);

            if(res.errcode === 0)
            {
                load();
            }
            else
            {
                alert(res.errmsg);
            }


        });

    };

};