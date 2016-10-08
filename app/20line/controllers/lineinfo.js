module.exports = function($scope, ps, fun, $stateParams, area, insurance, FileUploader){

    var lineid =  $stateParams.lineid;
    $scope.hide = true;
    var uploader = $scope.uploader = new FileUploader({
        url: 'http://cl.juyouhx.com/oss.php/oss/webuploader1?topdir=aa&selfdir=bb'
    });
    
    ps.get({code : lineid}, function(res){
        
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
            if(res.errcode === 0)
            {
                res.data.results.push({title:"无", id:"0", platformprice:0});
                $scope.line.insurancearray = res.data.results;
            }
            else
            {
                alert("保险列表加载失败");
            }
        });
        
        
    });
    
  };
