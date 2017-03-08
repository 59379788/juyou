module.exports = function($scope, $stateParams){

      $scope.tabs = [
    { title:'Dynamic Title 1', content:'Dynamic content 1' },
    { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
  ];

  $scope.alertMe = function() {
    setTimeout(function() {
      $window.alert('You\'ve selected the alert tab!');
    });
  };

  $scope.model = {
    name: 'Tabs'
  };


    var id = $stateParams.id;
    //产品对象，保存着产品的基本信息
    $scope.productobj = {
        'name' : '',
        'market_price' : 0,
        'guide_price' : 0,
        'cost_price' : 0,
    };
    //产品的票种信息
    $scope.ttypeobj = {
        'obj' : {},     //当前选择的票种
        'list' : [],    //选好的列表
    };
    
};