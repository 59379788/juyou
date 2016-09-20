module.exports = function($scope, dictbytypelist, shakecompanyinfolist, shakegroupinfolist, getDate, shakeanswer){

	shakeanswer.get({}, function(res){
        console.log(res);
        if(res.errcode !== 0)
        {
            alert(res.errmsg);
            return;
        }
        var r = [];
        for(var i=0; i<res.data.length; i++){
        	r.push(res.data[i].name)
        }
		$scope.labels = r;
		console.log($scope.labels);
    });
      $scope.data1 = [35, 10, 5, 3];
      $scope.data2 = [40, 7, 3, 3];



      $scope.toggle = function () {
          $scope.type = $scope.type === 'polarArea' ?
            'pie' : 'polarArea';
        };
    
    // $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"];
    // $scope.data1 = [300, 500, 100, 40, 120];
    // $scope.type = 'polarArea';

    // $scope.toggle = function () {
    //   $scope.type = $scope.type === 'polarArea' ?
    //     'pie' : 'polarArea';
    // };

    $scope.obj = {};
    $scope.xx = '';

    $scope.usedate = '0';

    $scope.section = {};
	$scope.section.start = {};
	$scope.section.start.date = new Date();


	$scope.open = function(obj) {
		obj.opened = true;
	};

    dictbytypelist({'type' : 'general_evaluate_type'}).then(function(res) {
        console.log(res);
        if(res.errcode === 0)
        {
            $scope.typearr = res.data;
            getCompany($scope.obj.binding_type);
            getGroup($scope.obj.binding_company_code);
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
        });
    }


    $scope.changeCompany = function(type){
    	if($scope.obj.binding_type == '1'){
    		$scope.xx = '1';
    	}else{
			$scope.xx = $scope.obj.binding_type;
    	}

        getCompany(type);
    }

    $scope.changeGroup = function(type){

        getGroup(type);
    }
};