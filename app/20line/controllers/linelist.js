module.exports = function($scope, $state, ps, $location, typearray, deleteline, area, $filter, fun, startline, stopline, publishTypearray){
    
    $scope.searchform = {};
    
    $scope.create = function()
    {
        $state.go('app.createline');
    }
    $scope.editline = function(lineid)
    {   
        $state.go('app.editline',{'lineid':lineid});
    }
    $scope.group = function()
    {
        $state.go('app.group');
    }
    $scope.grouplist = function(lineid,title)
    {
        $state.go('app.grouplist',{'lineid':lineid,'title':title});
    }
    $scope.lineinfo = function(lineid)
    {
        $state.go('app.lineinfo',{'lineid':lineid});
    }
    $scope.typearray1 = ["省内","国内","出境"];
    
    /* 地区下拉列表
     * ========================================= */
    area.get({_type:"nonpage"}, function(res){
        if(res.errcode === 0)
        {
           
            res.data.push({code:9999, id:9999, name:"全部"});
            $scope.areaarray = res.data; 
            $scope.searchform.area = 9999;
        }
    });
    $scope.statearray = fun.state;
    $scope.searchform.state = 9999;
    $scope.publishTypearray = publishTypearray;
    $scope.searchform.publishType = 9999;

    
    /* 分页
     * ========================================= */
    $scope.maxSize = 5;             //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = 7         //每页显示几条
    
    $scope.load = function () {
        
        var para = {
        //    ta:1, 
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage
        };
        
        var area = $scope.searchform.area;
        var keyword = $scope.searchform.keyword;
        var state = $scope.searchform.state;
        var publish_type = "1";//$scope.searchform.publishType;
        if(area !== 9999) para.area = area;
        if(state !== 9999) para.state = state + "";
        if(keyword !== undefined) para.keyword = keyword;
     //   if(publish_type !== 9999) para.publish_type = publish_type;
        
        ps.save(para, function(res){

           if(res.errcode == 0)
           {
                $scope.typearray = typearray;
                console.log(res.data.results);
                $scope.ps = res.data.results;
                $scope.bigTotalItems = res.data.totalRecord;
                return;
           }
           
            
        });

    };
    $scope.load();


    $scope.delete = function(code){

        if (confirm("确认要删除线路 ["+code+"] ？ ")) {
            deleteline.get({code : code}, function(res){
                if(res.errcode === 0){
                    $scope.load();
                }
                else{
                    alert("删除失败");
                }
            });
        }

    };
    
    
    $scope.start = function(code){
        
        if (confirm("启用该线路后将不能编辑，确定要启用吗 ？ ")) {
            startline.get({code:code}, function(res){
                if(res.errcode === 0){
                    $scope.load();
                }
                else{
                    alert("启用失败");
                }
            });
        }
    };
    
    $scope.stop = function(code){
        
        if (confirm("停用该线路后将不能报名，确定要停用吗 ？ ")) {
            stopline.get({code:code}, function(res){
                if(res.errcode === 0){
                    $scope.load();
                }
                else{
                    alert("停用失败");
                }
            });
        }
    };
    
//    $scope.search = function(){
//        
//        var area = $scope.searchform.area;
//        var keyword = $scope.searchform.keyword;
//        var state = $scope.searchform.state;
//        var publish_type = $scope.searchform.publishType;
//        
//        var obj = {};
//        
//        if(area !== 9999) obj.area = area;
//        if(state !== 9999) obj.state = state;
//        if(keyword !== undefined) obj.keyword = keyword;
//        if(publish_type !== 9999) obj.publish_type = publish_type;
//        
//        $scope.load(obj);
//    }
      
      
   

  };
