module.exports = function($scope){

    $scope.colors = ['#45b7cd', '#ff6384', '#ff8e72'];

    $scope.labels = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
    $scope.data = [
      [1000, 1200, 900, 400, 930, 800,1000, 1200, 900, 400, 930, 800],
      [28, 48, 40, 19, 86, 27, 28, 48, 40, 19, 86, 27],
      [280, 480, 400, 190, 860, 270, 280, 480, 400, 190, 860, 270]
    ];
    $scope.datasetOverride = [
      {
        label: "评价总量",
        borderWidth: 1,
        type: 'bar'
      },
      {
        label: "沈阳青年旅行社",
        borderWidth: 3,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        type: 'line'
      },
      {
        label: "沈阳名流旅行社",
        borderWidth: 3,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        type: 'line'
      }
    ];
};