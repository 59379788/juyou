module.exports = function($scope, shakeevaluateanswerlist, openid){
    
    shakeevaluateanswerlist.get({'openid':openid}, function(res){
            console.log(res);
            if(res.errcode !== 0)
            {
                alert(res.errmsg);
                return;
            }
            $scope.objs = res.data;

        });
};