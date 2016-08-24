module.exports = function($scope, $stateParams, $state, shakeevaluatequestion, shakeevaluatequestioninfo){

    $scope.obj = {};

    //问题id
    var id = $stateParams.id;

    if(id === '')   //新建
    {
        $scope.obj.category = '1';
        $scope.obj.sort = 0;
    }
    else    
    {
        angular.extend($scope.obj, {'id' : id});
        shakeevaluatequestioninfo.get({'id' : id}, function(res){
            console.log(res);
            if(res.errcode !== 0)
            {
                alert(res.errmsg);
                return;
            }
            $scope.obj = res.data;
        })
    }


    $scope.gogo = function(){

        console.log($scope.obj);

        if($scope.obj.question === undefined)
        {
            alert('问题必填');
            return;
        }

        shakeevaluatequestion.save($scope.obj, function(res){

            console.log(res);
            if(res.errcode !== 0)
            {
                alert(res.errmsg);
                return;
            }

            $state.go('app.shakeevaluatequestionlist');

        });

    };
    
};