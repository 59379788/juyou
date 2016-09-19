module.exports = function($scope, $stateParams, $state, shakedevice, shakedeviceinfo, dictbytypelist,
    shakecompanyinfolist, shakegroupinfolist, getDate){

    $scope.obj = {};

    $scope.section = {};
	$scope.section.start = {};
	$scope.section.start.date = new Date();


	$scope.open = function(obj) {
		obj.opened = true;
	};

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
                getCompany($scope.obj.binding_type);
                getGroup($scope.obj.binding_company_code);
            }
            else    
            {
                shakedeviceinfo.get({'id' : id}, function(info){
                    if(info.errcode !== 0)
                    {
                        alert(info.errmsg);
                        return;
                    }
                    $scope.obj = info.data;
                    getCompany(info.data.binding_type)
                    getGroup(info.data.binding_company_code);
                })
            }
        }
        else
        {
            alert(res.errmsg);
        }
    });

    
    function getCompany(type){

        $scope.companyarr = [];

        shakecompanyinfolist.get({'binding_type' : type}, function(res){
            
            if(res.errcode !== 0)
            {
                alert(res.errmsg);
                return ;
            }

            $scope.companyarr = res.data;
            //console.log($scope.obj.binding_company_code);
            //$scope.obj.binding_company_code = res.data[0].binding_company_code;
        });
    }

    function getGroup(type){

        $scope.grouparr = [];

        shakegroupinfolist.get({'company_code' : type}, function(res){
            
            if(res.errcode !== 0)
            {
                alert(res.errmsg);
                return ;
            }

            $scope.grouparr = res.data;
            //console.log($scope.obj.binding_company_code);
            //$scope.obj.binding_company_code = res.data[0].binding_company_code;
        });
    }


    $scope.changeCompany = function(type){

        getCompany(type);
    }

    $scope.changeGroup = function(type){

        getGroup(type);
    }

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

        if($scope.obj.binding_company_code === undefined || $scope.obj.binding_company_code == null)
        {
            alert('设备所属机构必填');
            return;
        }

        if($scope.obj.binding_type == '1')
    	{
        	if($scope.obj.binding_code === undefined || $scope.obj.binding_code == null)
	        {
	            alert('设备绑定团名必填');
	            return;
	        }	
    	}

    	$scope.obj.binding_time = getDate($scope.section.start.date);
    	if($scope.obj.binding_code == null){
    		$scope.obj.binding_code = '0';
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