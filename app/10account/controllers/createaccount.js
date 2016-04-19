module.exports = function($scope, $uibModalInstance, create, code, officeid, officename, role){

    //上级旅行社编号
    $scope.code = code;
    $scope.obj = {};
    var idobj = {};

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    role.get({}, function(res){

        console.log(res);

        $scope.objs = res.allRoles;

    });

    $scope.ok = function(){

        $scope.obj.no = $scope.obj.loginName;
        $scope.obj.loginName = code + $scope.obj.loginName;
        $scope.obj.newPassword = '000000';
        $scope.obj.confirmNewPassword = '000000';
        $scope.obj['company.id'] = officeid;
        $scope.obj['office.id'] = officeid;
        $scope.obj.loginFlag = '1';
        $scope.obj.roleIdList = [];

        angular.forEach(idobj, function (value, key) {
            $scope.obj.roleIdList.push(key)
        });

        if($scope.obj.roleIdList.length === 0)
        {
            alert('请选择角色');
            return;
        }

        create.save($scope.obj, {}, function(res){

            console.log(res);

            $uibModalInstance.close(officeid, officename);

        });

    };


    
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