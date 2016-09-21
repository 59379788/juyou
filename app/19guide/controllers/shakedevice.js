module.exports = function($scope, $stateParams, $state, shakedevice, shakedeviceinfo, dictbytypelist,
    shakecompanyinfolist, shakegroupinfolist, getDate, savedevicerecode, userinfo){

    $scope.obj = {};
    $scope.isshow = '1';
    $scope.company_code = '';

    $scope.section = {};
	$scope.section.start = {};
	$scope.section.start.date = new Date();


	$scope.open = function(obj) {
		obj.opened = true;
	};

	//用户信息
	function isable()
	{
		userinfo().then(function(res) {
			$scope.company_code = res.company_code;
	        if(res.company_code != 'L0002')
	    	{
	    		$scope.isable = '1';
	    	}
	    });
	}
    

    //机器id
    var id = $stateParams.id;

    dictbytypelist({'type' : 'general_evaluate_type'}).then(function(res) {
        console.log(res);
        if(res.errcode === 0)
        {
            $scope.typearr = res.data;
            if(id === '')   //新建
            {
        		$scope.isable = '0';
                $scope.obj.binding_type = '1';
                getCompany($scope.obj.binding_type);
                getGroup($scope.obj.binding_company_code);
            }
            else    
            {
        		isable();
                shakedeviceinfo.get({'id' : id}, function(info){
                    if(info.errcode !== 0)
                    {
                        alert(info.errmsg);
                        return;
                    }
                    $scope.obj = info.data;
                    $scope.obj.binding_code = $scope.obj.binding_code.substr(0,$scope.obj.binding_code.indexOf('_'));
                    if($scope.obj.binding_type != '1'){
		            	$scope.isshow = '0';
		            }
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
    	if(type == '1'){
    		$scope.isshow = '1';
    		$scope.obj.binding_time = new Date();
    	}else{
    		$scope.isshow = '0';
    		$scope.obj.binding_time = '';
    	}
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

    	if($scope.obj.binding_code == null || $scope.obj.binding_code == ''){
    		$scope.obj.binding_code = $scope.obj.binding_company_code;
    		$scope.obj.binding_time = null;
    	}else{
    		$scope.obj.binding_code = $scope.obj.binding_code + '_' + getDate($scope.section.start.date);
    		$scope.obj.binding_time = getDate($scope.section.start.date);
    	}
        shakedevice.save($scope.obj, function(res){

            console.log(res);
            if(res.errcode !== 0)
            {
                alert(res.errmsg);
                return;
            }

            if(id != '' && $scope.company_code != 'L0002')
        	{
        		savedevicerecode.save($scope.obj, function(res){

		            console.log(res);
		            if(res.errcode !== 0)
		            {
		                alert("插入记录表失败");
		                return;
		            }

		        });

            }

            $state.go('app.shakedevicelist');

        });

    };
    
};