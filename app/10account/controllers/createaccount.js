module.exports = function($scope, $uibModalInstance, create, code, officeid, officename, role){

    //上级旅行社编号
    $scope.code = code;
    console.log(code);
    console.log(officeid);

    $scope.company = {};


    $scope.obj = {};
    $scope.obj.loginName = '';
    $scope.obj.name = '';
    var idobj = {};

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    role.get({}, function(res){

        console.log(res);



        $scope.objs = res.allRoles;
        $scope.company = res.company;

    });

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
        $scope.obj['company.id'] = officeid;
        $scope.obj['office.id'] = officeid;
        $scope.obj.loginFlag = '1';

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