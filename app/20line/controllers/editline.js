module.exports = function($scope, line, $location, fun, editline, $stateParams, area, insurance, FileUploader){

    var lineid =  $stateParams.lineid;
    
    var uploader = $scope.uploader = new FileUploader({
        url: 'http://cl.juyouhx.com/oss.php/oss/webuploader1?topdir=aa&selfdir=bb'
    });
    
    // FILTERS
    uploader.filters.push({
        name: 'imageFilter',
        fn: function(item /*{File|FileLikeObject}*/, options) {
            var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
        }
    });
    
    uploader.onSuccessItem = function(fileItem, response, status, headers) {
        $scope.line.img = response.savename;
    };
    
    
    
    line.get({code : lineid}, function(res){
        
        angular.extend(res.data, fun);
        res.data.init();
        
        console.log(res.data);

        $scope.line = res.data;
        
        area.get({_type:"nonpage"}, function(res){

            //console.log(res);
            if(res.errcode === 0)
            {
                if($scope.line.type0array.length === 0)
                {
                    for(var i = 0, len = res.data.length; i < len; i++)
                    {
                        var tt = res.data[i];
                        if(tt.type === "0")
                        {
                            $scope.line.type0array.push(tt);
                        }
                        else if(tt.type === "1")
                        {
                            $scope.line.type1array.push(tt);
                        }
                        else if(tt.type === "2")
                        {
                            $scope.line.type2array.push(tt);
                        }
                    }
                }

                $scope.line.areaarray = $scope.line["type" + $scope.line.type + "array"];
            }
        });
        
        var para = {
            ta:"1",
            pageSize : 999
        };
        insurance(para).then(function(res) {

            //console.log(res);

            if(res.errcode === 0)
            {
                res.data.results.push({title:"无", id:"0", platformprice:0});
                $scope.line.insurancearray = res.data.results;
                for(var i = 0, j = $scope.line.insurancearray.length; i < j; i++)
                {
                    var ins = $scope.line.insurancearray[i];
                    if(ins.id === $scope.line.insurance)
                    {
                        $scope.line.insuranceprice = ins.platformprice;
                    }
                }
            }
            else
            {
                alert("保险列表加载失败");
            }
        });
        
        
    });
    
    
    
    
    $scope.save = function(){

        if($scope.line.market_price - $scope.line.discount_adult <= 0)
        {
            alert("请输入正确成人价格")
            return ;
        }

         if($scope.line.market_price_child - $scope.line.discount_child <= 0)
         {
             alert("请输入正确儿童价格")
             return ;
         }
        
        $scope.line.do();
        
        line.save($scope.line, function(res){
            console.log(res);
            if(res.errcode == 0)
            {
                alert("修改成功");
                $scope.line.init();
                
            }
            
        });
        
    };
    
  };
