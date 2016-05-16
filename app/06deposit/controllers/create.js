module.exports = function($scope, $state, create){

	$scope.gogo = function(){

      create.save($scope.obj, function(res){

          console.log(res);
          if(res.errcode === 0)
          {
              //$uibModalInstance.close();
          }
          else
          {
              alert(res.errmsg);
          }

      });

  };

    
};