module.exports = function($stateParams, $scope, editteam, info){

    var teamid =  $stateParams.teamid;
    
    info.get({code:teamid}, function(res){
        
        if(res.errcode === 0)
        {
            $scope.teammodel = res.data;
        }

    });
    
    
    $scope.save = function(){
        
        $scope.teammodel.code = teamid;
        
        editteam.save($scope.teammodel, function(res){

            if(res.errcode === 0)
            {
                alert("修改成功");
            }

        });
        
        
    };
    
    
    
    
    
  };
