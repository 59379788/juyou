module.exports = function($scope, shakeanswerslist, openid, $uibModalInstance){
    
    shakeanswerslist.get({'openid':openid}, function(res){
            
        var tkt = new Object();
        var restkt = new Array();

        if(res.errcode !== 0)
        {
            alert("数据获取失败");
            return;
        }
        
        for(var i = 0, j = res.data.length; i < j; i++)
        {
            var tt = res.data[i];
            var v = tt.binding_code;
            if(!tkt.hasOwnProperty(v))
            {
                tkt[v] = new Object();
                tkt[v].answerarr = new Array();
                tkt[v].groupid = tt.binding_code;
                tkt[v].groupname = tt.group_name;
                tkt[v].grouptime = tt.binding_time;
            }
            
        	tkt[v].answerarr.push(tt);
            
        }

        for(var key in tkt)
        {
            var o = tkt[key];
            restkt.push(o);
        }

        console.log("------------");
        console.log(restkt);
        console.log("------------");

        $scope.objs = restkt;

    });

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

};