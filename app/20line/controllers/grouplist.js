module.exports = function($scope, $state, ps, list, $stateParams, shangjia, xiajia, del, finish, stateArray){
    
    var lineid =  $stateParams.lineid;
    
    var title = $stateParams.title;
    $scope.lineid = lineid;
    $scope.title = title;
    

    $scope.stateArray = stateArray;
    
    $scope.editgroup = function(code)
    {
        $state.go('app.editgroup',{'code':code});
    }

    /* 分页
     * ========================================= */
    $scope.maxSize = 5;             //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = 10         //每页显示几条
    
    $scope.load = function () {
        var para = {
        //    ta:1, 
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage,
            line:lineid
        };
        list.save(para, function(res){
            
        console.log(res);

           if(res.errcode == 0)
           {
                console.log(res.data.results);
                $scope.teams = res.data.results;
                $scope.bigTotalItems = res.data.totalRecord;
           }
            
        });

    };
    $scope.load();
    
    $scope.shangjia = function(code){
        
        shangjia.get({code:code}, function(res){
            //console.log(res);
            if(res.errcode === 0){
                $scope.load();
            }else{
                alert("操作失败");
            }
        });
    };
    
    $scope.xiajia = function(code){
        
        xiajia.get({code:code}, function(res){
            //console.log(res);
            if(res.errcode === 0){
                $scope.load();
            }else{
                alert("操作失败");
            }
        });
    };
    
    $scope.delete = function(code){
        
        if (confirm("确认要删除团号为 ["+code+"] 的游团吗？ ")) {
            del.get({code:code}, function(res){
                //console.log(res);
                if(res.errcode === 0){
                    $scope.load();
                }else{
                    alert("删除失败");
                }
            });
        }
        
    };
    
    $scope.finish = function(code){
        
        finish.get({code:code}, function(res){
            //console.log(res);
            if(res.errcode === 0){
                $scope.load();
            }else{
                alert("操作失败");
            }
        });
    };
    
    
    
  };
