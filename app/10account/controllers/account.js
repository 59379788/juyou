module.exports = function($scope, $state, mechanism, $uibModal, create, 
    list, role, ITEMS_PERPAGE, info, createmechanism){

    $scope.objs = {};

    $scope.code = '';
    $scope.officeid = '';

    //当前的id
    $scope.currentid = '';
    $scope.currentcode = '';
    $scope.currentname = '';

    $scope.editshow = false;

    //机构树
    function mechanismtree(){
        mechanism.query({}, function(res){
          console.log(res);
          var dlq = transData(res, 'id', 'pId', 'nodes');  
          $scope.data = dlq;
          console.log($scope.data);
          $scope.currentid = $scope.data[0].id;
          $scope.currentcode = $scope.data[0].code;
          $scope.currentname = $scope.data[0].name;
          $scope.load($scope.data[0].id, $scope.data[0].name);
        });
    }
    mechanismtree();

    /* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条
    
    $scope.load = function (officeid, officename) {

        //if(officeid === undefined || officename === undefined) return;
        
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
        console.log(obj.$modelValue);
        if(obj.$modelValue.id === $scope.currentid)
        {
            $scope.editshow = true;
        }
        else
        {
            $scope.editshow = false;
        }
        $scope.code = obj.$modelValue.code;
        $scope.officeid = obj.$modelValue.id;
        $scope.officename = obj.$modelValue.name;
        $scope.load($scope.officeid, $scope.officename);
    };

    $scope.create = function(){
        createmodal();
    }

    $scope.edit = function(obj){
        editmodal(obj);
    }

    //创建新用户
    function createmodal()
    {
        var modalInstance = $uibModal.open({
          template: require('../views/createaccount.html'),
          controller: 'createaccount',
          resolve: {
            code : function(){
                return $scope.currentcode;
            },
            //部门id
            officeid : function(){
                return $scope.currentid;
            },
            //部门名称
            officename : function(){
                return $scope.currentname;
            },
            role : function(){
                return role;
            },
            create : function(){
                return create;
            }
          }
        });

        modalInstance.result.then(function (officeid, officename) {
          
          $scope.load(officeid, officename);

        }, function () {
          //$log.info('Modal dismissed at: ' + new Date());
        });
    }


    function editmodal(id){

        var modalInstance = $uibModal.open({
          template: require('../views/editaccount.html'),
          controller: 'editaccount',
          resolve: {
            id : function(){
                return id;
            },
            //部门id
            officeid : function(){
                return $scope.officeid;
            },
            //部门名称
            officename : function(){
                return $scope.officename;
            },
            role : function(){
                return role;
            },
            info : function(){
                return info;
            },
            create : function(){
                return create;
            }
          }
        });

        modalInstance.result.then(function (officeid, officename) {
          
          $scope.load(officeid, officename);

        }, function () {
          //$log.info('Modal dismissed at: ' + new Date());
        });

    }




    $scope.createstb = function () {
        
        var modalInstance = $uibModal.open({
          template: require('../views/mechanism.html'),
          controller: 'mechanism',
          resolve: {
            createmechanism : function(){
                return createmechanism;
            },
            create : function(){
                return create;
            }
          }
        });

        modalInstance.result.then(function () {
          
          //$scope.load(officeid, officename);
          mechanismtree();

        }, function () {
          //$log.info('Modal dismissed at: ' + new Date());
        });

    };


};