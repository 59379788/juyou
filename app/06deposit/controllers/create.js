module.exports = function($scope, $state, create, talist){

  $scope.obj = {};
  $scope.obj.loan_limit_price = 0;
  $scope.obj.picket_line = 0;

  talist().then(function(res) {
    console.log(res);
      if(res.errcode === 0)
      {
        $scope.taarr = res.data;
        $scope.obj.seller_code=$scope.taarr[0].CODE;
      }
      else
      {
          alert(res.errmsg);
      }
  });

	$scope.gogo = function(){

      console.log($scope.obj);

      create.save($scope.obj, function(res){

          console.log(res);
          if(res.errcode === 0)
          {
              $state.go('app.depositlist');
          }
          else
          {
              alert(res.errmsg);
          }

      });

  };

    
};