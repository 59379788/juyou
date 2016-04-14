module.exports = function($scope, $uibModalInstance, id, role, info, create, officeid, officename){

    $scope.obj = {};
    $scope.objs = [];
    var idobj = {};

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    role.get({'id' : id}, {}, function(res){

        console.log(res);

        $scope.objs = res.allRoles;



        // console.log($scope.objs);

        // info.get({'id' : id}, function(res){

        //     console.log(res);

            $scope.obj = res.user;
            $scope.obj.id = id;
            $scope.obj.oldLoginName = $scope.obj.loginName;
            $scope.obj.roleIdList = [];
            $scope.obj['company.id'] = res.company.id;
            $scope.obj['office.id'] = res.company.id; 

            console.log($scope.obj);

            //角色选择
            for(var i = 0; i < $scope.objs.length; i++)
            {
                var tmp = $scope.objs[i];
                tmp.iselected = 0;
                for(var j = 0; j < res.roleIdList.length; j++)
                {
                    if(res.roleIdList[j] == tmp.id)
                    {
                        tmp.iselected = 1;
                        idobj[tmp.id] = '';
                        break;
                    }
                }

            }

            //console.log($scope.objs);

        //});

    });

    

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

    $scope.ok = function(){

       

        console.log($scope.obj.roleIdList);

        angular.forEach(idobj, function (value, key) {
            $scope.obj.roleIdList.push(key);
        });

        if($scope.obj.roleIdList.length === 0)
        {
            alert('请选择角色');
            return;
        }

        console.log($scope.obj);

        create.save($scope.obj, {}, function(res){

            console.log(res);

            $uibModalInstance.close(officeid, officename);

        });

    };

};