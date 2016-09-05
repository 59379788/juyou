module.exports = function($scope, $state, shakeevaluategrouplist){

	shakeevaluategrouplist.get({}, function(res){
            console.log(res.data);
            if(res.errcode !== 0)
            {
                alert(res.errmsg);
                return;
            }
            $scope.objs = res.data;

        });

	$scope.edit = function(code)
    {
        $state.go('app.shakeevaluatetourist', {'code' : code});
    }






};