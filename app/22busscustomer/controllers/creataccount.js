module.exports = function($scope, $uibModalInstance,id,role,create,message){
  // console.log(id);
   // 获取角色列表
   role.save({},function(res){ 
   	console.log(res);
    $scope.objs = res.allRoles;
   });

    $scope.obj = {};
    // 登录名
    $scope.obj.loginName = '';
    // 姓名
    $scope.obj.name = '';
    var idobj = {};

   // 返回
   $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
   // ok
    $scope.ok = function(){

        if($scope.obj.loginName === '')
        {
            alert('用户名必填');
            return;
        }

        if($scope.obj.name === '')
        {
            alert('姓名必填');
            return;
        }

        $scope.obj.roleIdList = [];
        angular.forEach(idobj, function (value, key) {
            $scope.obj.roleIdList.push(key)
            console.log($scope.obj.roleIdList);
        });

        if($scope.obj.roleIdList.length === 0)
        {
            alert('请选择角色');
            return;
        }

        $scope.obj.no = $scope.obj.loginName;
        $scope.obj.loginName = $scope.obj.loginName;
        $scope.obj.newPassword = '000000';
        $scope.obj.confirmNewPassword = '000000';
      //  $scope.obj['company.id'] = officeid;
      //  $scope.obj['office.id'] = officeid;
      //  $scope.obj['company.id'] = '';
      //  $scope.obj['office.id'] = '';
        $scope.obj.loginFlag = '1';
        console.log($scope.obj);
        create.save($scope.obj, {}, function(res){

            console.log(res);

            $uibModalInstance.close();

        });
        // 发送短信验证码
            message.save({'id':id}, function(res){ 
               console.log({'id':id});
               console.log(res);
               if (res.errcode !== 0) { 
               	alert(res.errmsg);
               	return;
               } else { 
               	alert('发送短信验证码成功');

               }

            });
        


    };
    // 复选框
    $scope.selection = function($event, obj){

        console.log(obj);

        var checkbox = $event.target;
        
        if(checkbox.checked)
        {
            idobj[obj.id] = '';
        }
        else
        {
           delete idobj[obj.id];
        }

    };
};