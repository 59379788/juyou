module.exports = function($scope, $uibModal, dictbytypelist, shakecompanyinfolist, shakegroupinfolist, 
	getDate, shakeanswer, questionstatisticlist, peoplerebatelist, shakeevaluateanswerlist, ITEMS_PERPAGE){

    $scope.data1 = [];
    $scope.labels = [];



    //  $scope.toggle = function () {
    //      $scope.type = $scope.type === 'polarArea' ?
    //        'pie' : 'polarArea';
    //    };
    
    // $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"];
    // $scope.data1 = [300, 500, 100, 40, 120];
    // $scope.type = 'polarArea';

    // $scope.toggle = function () {
    //   $scope.type = $scope.type === 'polarArea' ?
    //     'pie' : 'polarArea';
    // };

    $scope.obj = {};
    $scope.peopleobj = {};
    $scope.xx = '';
    $scope.peoplestate = '1';

    $scope.usedate = '0';

    $scope.section = {};
	$scope.section.start = {};
	$scope.section.start.date = new Date();


	$scope.open = function(obj) {
		obj.opened = true;
	};

    dictbytypelist({'type' : 'general_evaluate_type'}).then(function(res) {
        //console.log(res);
        if(res.errcode === 0)
        {
            $scope.typearr = res.data;
            getCompany($scope.obj.binding_type);
        }
        else
        {
            alert(res.errmsg);
        }
    });

    shakegroupinfolist.get({}, function(res){
            
        if(res.errcode !== 0)
        {
            alert(res.errmsg);
            return ;
        }

        $scope.grouparr = res.data;
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
    		$scope.obj.binding_time = getDate($scope.section.start.date);
    	}else{
			$scope.xx = $scope.obj.binding_type;
			$scope.obj.binding_time = '';
    	}

        getCompany(type);
    }

    $scope.load = function(){
    	if($scope.usedate == '1'){
    		$scope.obj.binding_time = getDate($scope.section.start.date);
    	}else{
    		$scope.obj.binding_time = '';
    	}
    	//console.log($scope.obj);
    	questionstatisticlist.save($scope.obj, function(res){
	        var tkt = new Object();
	        var restkt = new Array();

	        //console.log(res);

	        if(res.errcode !== 0)
	        {
	            alert("数据获取失败");
	            return;
	        }
	        
	        for(var i = 0, j = res.data.length; i < j; i++)
	        {
	            var tt = res.data[i];
	            var v = tt.id;
	            if(tt.num != 0)
	        	{
		            if(!tkt.hasOwnProperty(v))
		            {
		                tkt[v] = new Object();
		                tkt[v].questionarr = new Array();
		                tkt[v].questioncode = tt.id;
		                tkt[v].questionname = tt.question;
		                tkt[v].data1 = new Array();
		                tkt[v].labels = new Array();
		            }
		            
		        	tkt[v].questionarr.push(tt);
		        	tkt[v].data1.push(tt.num);
		        	tkt[v].labels.push(tt.name);
	        	}
	            
	        }

	        for(var key in tkt)
	        {
	            var o = tkt[key];
	            restkt.push(o);
	        }

	        //console.log("------------");
	        //console.log(restkt);
	        //console.log("------------");

	        $scope.objs = restkt;

	    });

		/* 分页
	     * ========================================= */
	    $scope.maxSize = 5;            //最多显示多少个按钮
	    $scope.bigCurrentPage = 1;      //当前页码
	    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条

	    var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage
        };

        para = angular.extend($scope.obj, para);

		peoplerebatelist.save(para, function(res){
			//console.log(res);
			$scope.peoplestate = '1';
	        if(res.errcode !== 0)
	        {
	            alert("数据获取失败");
	            return;
	        }
	        if(res.data == "")
        	{
        		$scope.peoplestate = '0';
        	}
	        $scope.peopleobjs = res.data.results;
	        $scope.bigTotalItems = res.data.totalRecord;
		        
	    });

    }
    $scope.load();

    $scope.info = function(openid)
    {
        var modalInstance = $uibModal.open({
          template: require('../views/shakequestioninfo.html'),
          controller: 'shakequestioninfo',
          size: 'lg',
          resolve: {
            openid : function(){
                return openid;
            },
            shakeevaluateanswerlist : function(){
                return shakeevaluateanswerlist;
            } 
          }
        });
    }



};