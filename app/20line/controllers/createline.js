module.exports = function($scope, ps, $location, line, area, insurance, FileUploader){
    
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

    area.get({_type:"nonpage"}, function(res){
        
        $scope.line = line;

        console.log(res);

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
            $scope.line.area = $scope.line.areaarray[0].code;
        }
        
        var para = {
            pageSize : 999
        };
        
        insurance(para).then(function(res) {
            
            if(res.errcode === 0)
            {
                //console.log(res.data.results);
                res.data.results.push({title:"无", id:"0", platformprice:0});
                $scope.line.insurance = "0";
                $scope.line.insurancearray = res.data.results;
            }
            else
            {
                alert("保险列表加载失败");
            }

        });
        
        $scope.line.days = 1;
        $scope.line.night = 0;
        
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
       
        console.log($scope.line);
        
        ps.save($scope.line, function(res){
            
            //console.log(res);
            
            if(res.errcode == 0)
            {
                alert("添加成功");
                //$location.path("/editline/" + res.data);
            }
            
        });
    };
  };