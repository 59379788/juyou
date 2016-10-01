module.exports = function($scope, shakecompanyinfolist, totalevaluatelist, getDate){

    $scope.colors = ['#45b7cd', '#ff6384', '#ff8e72', '#FF0088', '#FF0000', '#FF8800', '#FFFF00', '#77FF00'];
    
    /*$scope.data = [
      [1000, 1200, 900, 400, 930, 800,1000, 1200, 900, 400, 930, 800],
      [28, 48, 40, 19, 86, 27, 28, 48, 40, 19, 86, 27],
      [280, 480, 400, 190, 860, 270, 280, 480, 400, 190, 860, 270]
    ];*/
    $scope.data = [];
    /*$scope.datasetOverride = [
      {
        label: "评价总量",
        borderWidth: 1,
        type: 'bar'
      },
      {
        label: "沈阳青年旅行社",
        borderWidth: 3,
        //hoverBackgroundColor: "rgba(255,99,132,0.4)",
        //hoverBorderColor: "rgba(255,99,132,1)",
        type: 'line'
      },
      {
        label: "沈阳名流旅行社",
        borderWidth: 3,
        //hoverBackgroundColor: "rgba(255,99,132,0.4)",
        //hoverBorderColor: "rgba(255,99,132,1)",
        type: 'line'
      }
    ];*/
    $scope.datasetOverride = [
      {
        label: "全部景区",
        borderWidth: 1,
        type: 'bar'
      }
    ];




    $scope.obj = [];
    $scope.obj.binding_type = '2';
    $scope.totalobjs = [];

    //有效区间
    $scope.section = {};
    $scope.section.start = {};
    $scope.section.start.date = new Date();
    $scope.section.starttime = {};
    $scope.section.starttime.date = new Date();

    $scope.section.end = {};
    $scope.section.end.date = new Date();
    $scope.section.endtime = {};
    $scope.section.endtime.date = new Date();

    $scope.open = function(obj) {
        obj.opened = true;
    };

    //设置默认值
    $scope.obj.type_month = '1';				
    $scope.obj.type_year = '2016';					
    $scope.obj.type_playtime_start = '1';		
    $scope.obj.type_playtime_end = '12';
    $scope.obj.starthour = '08:00';		
    $scope.obj.endhour = '21:00';
    $scope.isable = '0';

    shakecompanyinfolist.get({'binding_type' : '2'}, function(res){
        
        if(res.errcode !== 0)
        {
            alert(res.errmsg);
            return ;
        }

        $scope.companyarr = res.data;
    });

    $scope.load = function() {
		$scope.data = [];
		$scope.totalobjs = [];

		//组合评价时间参数
		if($scope.obj.type_month == '1'){
			var start = $scope.obj.type_playtime_start;
			var end = $scope.obj.type_playtime_end;
			if(start.length == 1) start = '0' + start;
			if(end.length == 1) end = '0' + end;
			$scope.obj.create_time_start = $scope.obj.type_year + '-' + start + '-01';
			$scope.obj.create_time_end = $scope.obj.type_year + '-' + end + '-31';
		}else if($scope.obj.type_month == '2'){
			$scope.obj.create_time_start = getDate($scope.section.start.date);
			$scope.obj.create_time_end = getDate($scope.section.end.date);
		}else if($scope.obj.type_month == '3'){
			$scope.obj.create_time_start = getDate($scope.section.starttime.date) + ' ' + $scope.obj.starthour + ':00';
			$scope.obj.create_time_end = getDate($scope.section.endtime.date) + ' ' + $scope.obj.endhour + ':00';
		}
    	console.log($scope.obj);

    	totalevaluatelist.get($scope.obj, function(res){
            console.log(res.data);
	        if(res.errcode !== 0)
	        {
	            alert(res.errmsg);
	            return ;
	        }

	        $scope.totalobjs.push(res.data);
	        $scope.data.push(res.data.data);
	        $scope.labels = res.data.labels;
	        
	    });
    	
    }
    $scope.load();

    $scope.add = function() {
    	if($scope.obj.binding_company_code == undefined) return;
    	//console.log($scope.totalobjs);
    	if($scope.totalobjs.length != 1)
		{
			for(var i=0; i<=$scope.totalobjs.length-1; i++)
			{
				if($scope.totalobjs[i].lxscode == $scope.obj.binding_company_code)
				{
					alert("请不要重复追加");
					return;
				}
			}
		}
    	console.log($scope.obj);
    	totalevaluatelist.get($scope.obj, function(res){
            console.log(res.data);
	        if(res.errcode !== 0)
	        {
	            alert(res.errmsg);
	            return ;
	        }

	        $scope.totalobjs.push(res.data);
	        $scope.data.push(res.data.data);
	        $scope.labels = res.data.labels;

	        var para = {
	        	label : res.data.lxsname,
	        	borderWidth : 3,
	        	type: 'line'
	        };
	        $scope.datasetOverride.push(para);
	        
	    });
    }

    $scope.del = function(lxscode) {
    	for(var i=0; i<=$scope.totalobjs.length; i++)
		{
			if($scope.totalobjs[i].lxscode == lxscode)
			{
				$scope.totalobjs.splice(i, 1);
				$scope.data.splice(i, 1);
				$scope.datasetOverride.splice(i, 1);
			}
		}
    }

    $scope.changecompany = function() {
    	if($scope.obj.binding_company_code == null){
    		$scope.isable = '0';
		}else{
			$scope.isable = '1';
		}
    }

    $scope.changetype = function() {
    	if($scope.obj.type_month == '1'){
    		$scope.obj.type_year = '2016';					
		    $scope.obj.type_playtime_start = '1';		
		    $scope.obj.type_playtime_end = '12';
		}else if($scope.obj.type_month == '2'){
			$scope.section.start.date = new Date();
			$scope.section.end.date = new Date();
		}else if($scope.obj.type_month == '3'){
			$scope.section.starttime.date = new Date();
			$scope.section.endtime.date = new Date();
			$scope.obj.starthour = '08:00';		
    		$scope.obj.endhour = '21:00';
		}
    }





};