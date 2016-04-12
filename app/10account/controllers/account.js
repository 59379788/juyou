module.exports = function($scope, $state, mechanism, $uibModal, create, list, role, ITEMS_PERPAGE){

    $scope.objs = {};

    $scope.code = '';
    $scope.officeid = '';

    //机构树
    mechanism.query({}, function(res){

      console.log(res);

      var dlq = transData(res, 'id', 'pId', 'nodes');  
      $scope.data = dlq;

    });

    /* 分页
     * ========================================= */
    $scope.maxSize = 2;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条
    
    $scope.load = function (officeid, officename) {
        
        var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage
        };

        para = angular.extend({'office.id' : officeid, 'office.name' : officename}, para);
        
        list.get(para, function(res){
            console.log(res);
            $scope.objs = res.list;
            $scope.bigTotalItems = res.count;
        });

    };
    $scope.load();

    function transData(a, idStr, pidStr, chindrenStr){    
        var r = [], 
            hash = {}, 
            id = idStr, 
            pid = pidStr, 
            children = chindrenStr, 
            i = 0, 
            j = 0, 
            len = a.length; 

        for(; i < len; i++){ 
            hash[a[i][id]] = a[i];
        }

        for(; j < len; j++){    
            var aVal = a[j], 
                hashVP = hash[aVal[pid]];

            if(hashVP){    
                !hashVP[children] && (hashVP[children] = []);    
                hashVP[children].push(aVal);    
            }else{
                r.push(aVal);
            }
        }    
        return r;    
    }    


    $scope.getit = function(obj){
      $scope.code = obj.$modelValue.code;
      $scope.officeid = obj.$modelValue.id;
      $scope.officename = obj.$modelValue.name;
      $scope.load($scope.officeid, $scope.officename);
    };


    //打开模态框
    $scope.create = function(){

        //alert(device_code);

        var modalInstance = $uibModal.open({
          template: require('../views/createaccount.html'),
          controller: 'createaccount',
          resolve: {
            code : function(){
                return $scope.code;
            },
            officeid : function(){
                return $scope.officeid;
            },
            role : function(){
                return role;
            },
            // add : function(){
            //     return add;
            // },
            create : function(){
                return create;
            }
          }
        });

        modalInstance.result.then(function () {
          
          load();

        }, function () {
          //$log.info('Modal dismissed at: ' + new Date());
        });
    }


};