module.exports = function($scope){

      $scope.labels = ["非常满意", "一般满意", "不满意"];
      $scope.data1 = [35, 10, 5];
      $scope.data2 = [40, 7, 3];



      $scope.toggle = function () {
          $scope.type = $scope.type === 'polarArea' ?
            'pie' : 'polarArea';
        };
    
    // $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"];
    // $scope.data1 = [300, 500, 100, 40, 120];
    // $scope.type = 'polarArea';

    // $scope.toggle = function () {
    //   $scope.type = $scope.type === 'polarArea' ?
    //     'pie' : 'polarArea';
    // };
};