module.exports = function($scope, $stateParams, $state, shakedevice, shakedeviceinfo, dictbytypelist){

    $scope.obj = {};

    //机器id
    var id = $stateParams.id;

    dictbytypelist({'type' : 'general_evaluate_type'}).then(function(res) {
        console.log(res);
        if(res.errcode === 0)
        {
            $scope.typearr = res.data;

            if(id === '')   //新建
            {
                $scope.obj.binding_type = '1';
            }
            else    
            {
                angular.extend($scope.obj, {'id' : id});
                shakedeviceinfo.get({'id' : id}, function(res){
                    console.log(res);
                    if(res.errcode !== 0)
                    {
                        alert(res.errmsg);
                        return;
                    }
                    $scope.obj = res.data;
                })
            }
            
        }
        else
        {
            alert(res.errmsg);
        }
    });

    


    $scope.gogo = function(){

        console.log($scope.obj);

        if($scope.obj.code === undefined)
        {
            alert('设备编号必填');
            return;
        }

        if($scope.obj.name === undefined)
        {
            alert('设备名称必填');
            return;
        }

        if($scope.obj.binding_company_code === undefined)
        {
            alert('设备所属机构必填');
            return;
        }

        if($scope.obj.binding_code === undefined)
        {
            alert('设备绑定团号必填');
            return;
        }

        shakedevice.save($scope.obj, function(res){

            console.log(res);
            if(res.errcode !== 0)
            {
                alert(res.errmsg);
                return;
            }

            $state.go('app.shakedevicelist');

        });

    };
    
};