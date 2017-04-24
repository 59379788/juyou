module.exports = function($scope, $stateParams, $uibModal,confirmauthority,hostlists,deleteauthority,ITEMS_PERPAGE,toaster){
  
  $scope.info = {
       'appid':'shangke' 
  };
  var array = [];
  $scope.geylists = function () {
      hostlists.save($scope.info,function (res) {
          if (res.errcode !== 0) { 
            toaster.success({title: "", body:res.errmsg});
            return;
          } 
          console.log(res);
          var liststr = res.data.bind_company_code;
          array = liststr.split(',');
          $scope.objs = array;  
          console.log($scope.objs);
      })
  }
  $scope.geylists();
  
  $scope.searchinfo = { 
      'company_code' : ''
  };
  // 分配权限
  $scope.saveauthority = function(){
    if ($scope.searchinfo.company_code === '') {
        toaster.success({title: "", body:"请输入一级商客账号"});
        return; 
    }
    //   array.push($scope.searchinfo.bind_company_code);
    //   var str = array.join(",");
    //   confirmauthority.save({'appid' : 'shangke','company_code':str},function(res){
    //     console.log({'appid' : 'shangke','company_code':str});
    //       if (res.errcode !== 0) { 
    //         toaster.success({title: "", body:res.errmsg});
    //         return;
    //       } 
    //       toaster.success({title: "", body:"恭喜你成为一级商客!"});
    //   }); 
    confirmauthority.save({'appid' : 'shangke','company_code':$scope.searchinfo.company_code},function(res){
        console.log({'appid' : 'shangke','company_code':$scope.searchinfo.company_code});
        if (res.errcode !== 0) { 
            toaster.success({title: "", body:res.errmsg});
            return;
        } 
        toaster.success({title: "", body:"恭喜你成为一级商客!"});
        $scope.geylists();
    })

  };

  $scope.delete = function(obj){    
        if(confirm('确定要删除吗?')){
            var j = '';
            for(var i = 0; i < array.length; i++){
                if(obj == array[i]){
                    j = i;
                    array.splice(j,1);
                    // console.log(array);
                    var str = array.join(",");
                    console.log(str);
                }
            }   
            deleteauthority.save({'appid' : 'shangke','bind_company_code':str},function(res){
                console.log({'appid' : 'shangke','bind_company_code':str});
                if (res.errcode !== 0) { 
                    toaster.success({title: "", body:res.errmsg});
                    return;
                } 
                toaster.success({title: "", body:"删除成功!"});
                $scope.geylists();

            }); 
        } 
  };



};