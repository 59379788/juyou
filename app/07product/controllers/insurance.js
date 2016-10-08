module.exports = function($scope, ins, inslist, createins, startins, stopins){

    
    $scope.insform = ins;
    
    
    /* 分页
     * ========================================= */
    $scope.maxSize = 5;             //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = 10        //每页显示几条
    
    $scope.load = function (obj) {
        
        var para = {
            ta:1, 
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage
        };
        
        angular.extend(para, obj);

        inslist(para).then(function(res) {
            
            //console.log(res);
        
            if(res.errcode === 0)
            {
                console.log(res.data.results);
                $scope.insarray = res.data.results;
            }
            else
            {
                alert("保险列表加载失败");
            }

        });

    };
    $scope.load();
    
    
    $scope.createins = function(){
        console.log($scope.insform);
        createins($scope.insform).then(function(res){
            console.log(res);
            if(res.errcode === 0)
            {
                //console.log(res.data.results);
                $scope.load();
            }
            else
            {
                alert("创建失败");
            }
        });
        
    };
    
    
    $scope.start = function(id){
        var para = {id:id};
        startins(para).then(function(res){
            console.log(res);
            if(res.errcode === 0)
            {
                $scope.load();
            }
            else
            {
                alert("操作失败");
            }
        });
    };
    
    
    $scope.stop = function(id){
        var para = {id:id};
        stopins(para).then(function(res){
            if(res.errcode === 0)
            {
                $scope.load();
            }
            else
            {
                alert("创建失败");
            }
        });
    };

  };
