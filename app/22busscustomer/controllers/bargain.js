module.exports = function($scope, $stateParams, $state, $uibModal, ITEMS_PERPAGE){
  $scope.seelist = function () {
    $state.go('app.bargainlist');
  };
  $scope.seeuser = function () {
    $state.go('app.bargainuser');
  };
  $scope.seewinuser = function () {
    $state.go('app.winuser');
  };
  
  // $scope.info = {
  //      'appid':'shangke' 
  // };
  // var array = [];
  // $scope.geylists = function () {
  //     hostlists.save($scope.info,function (res) {
  //         if (res.errcode !== 0) { 
  //           alert(res.errmsg);
  //           return;
  //         } 
  //         console.log(res);
  //         var liststr = res.data.bind_company_code;
  //         array = liststr.split(',');
  //         $scope.objs = array;  
  //     })
  // }
  // $scope.geylists();
  
  // $scope.searchinfo = { 
  //     'bind_company_code' : ''
  // };
  // // 分配权限
  // $scope.saveauthority = function(){
  //   if ($scope.searchinfo.bind_company_code === '') {
  //       alert('请输入一级商客账号！');
  //       return; 
  //   }
  //     array.push($scope.searchinfo.bind_company_code);
  //     var str = array.join(",");
  //     confirmauthority.save({'appid' : 'shangke','bind_company_code':str},function(res){
  //       console.log({'appid' : 'shangke','bind_company_code':str});
  //         if (res.errcode !== 0) { 
  //           alert(res.errmsg);
  //           return;
  //         } 
  //         alert('恭喜你,成为一级商客！');
  //     }); 
  // };



};