module.exports = function($scope, $stateParams, $uibModal,supplierlist,saveconfirm,typelists,toaster){
    // 获取申请人列表信息
    $scope.getlist = function(){
        supplierlist.save({}, function(res){
            if (res.errcode !== 0) {
                toaster.success({title:"",body:res.errmsg});
                return; 
            }
            var listarr = res.data;
            typelists.save({'type' : "cheap_menu"}, function(res){
                if (res.errcode !== 0) {
                    toaster.success({title:"",body:res.errmsg});
                    return; 
                }
                var typearr = res.data;
                var objsarr = [];              
                console.log('字典类型');
                console.log(res);
                for(var i = 0; i < listarr.length; i++){
                    for(var j = 0; j < typearr.length; j++){
                        if(listarr[i].sale_category == typearr[j].id){
                            listarr[i].sale_category =typearr[j].label;
                            objsarr.push(listarr[i]);
                        }
                        
                    }
                    
                }
                console.log(objsarr);
                $scope.objs = objsarr;
                
            })


        });
        console.log($scope.objs);
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