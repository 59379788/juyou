module.exports = function($scope, shakegroupinfolist, shakecompanyinfolist, totalevaluatelist){

    $scope.colors = ['#45b7cd', '#ff6384', '#ff8e72', '#FF0088', '#FF0000', '#FF8800', '#FFFF00', '#77FF00'];

    var labels1 = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
    var labels2 = ['1号', '2号', '3号', '4号', '5号', '6号', '7号', '8号', '9号', '10号', '11号', '12号', '13号', '14号', '15号', '16号', '17号', '18号', '19号', '20号', '21号', '22号', '23号', '24号', '25号', '26号', '27号', '28号', '29号', '30号', '31号'];
    var labels3 = ['1时', '2时', '3时', '4时', '5时', '6时', '7时', '8时', '9时', '10时', '11时', '12时', '13时', '14时', '15时', '16时', '17时', '18时', '19时', '20时', '21时', '22时', '23时', '24时'];
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
        label: "全部旅行社",
        borderWidth: 1,
        type: 'bar'
      }
    ];




    $scope.obj = [];
    $scope.totalobjs = [];

    //设置默认值
    $scope.obj.type_month = '1';				
    $scope.obj.type_year = '2016';					
    $scope.obj.type_playtime_start = '1';		
    $scope.obj.type_playtime_end = '12';
    $scope.isable = '0';

    shakegroupinfolist.get({}, function(res){
            
        if(res.errcode !== 0)
        {
            alert(res.errmsg);
            return ;
        }

        $scope.grouparr = res.data;
    });

    shakecompanyinfolist.get({'binding_type' : '1'}, function(res){
        
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

		//组合出游时间参数
	    var start = $scope.obj.type_playtime_start;
		var end = $scope.obj.type_playtime_end;
		if(start.length == 1) start = '0' + start;
		if(end.length == 1) end = '0' + end;
		$scope.obj.binding_time_start = $scope.obj.type_year + '-' + start + '-01';
		$scope.obj.binding_time_end = $scope.obj.type_year + '-' + end + '-31';
		//$scope.obj.binding_company_code = '111';
    	console.log($scope.obj);
    	totalevaluatelist.get($scope.obj, function(res){
            //console.log(res.data);
	        if(res.errcode !== 0)
	        {
	            alert(res.errmsg);
	            return ;
	        }

	        $scope.totalobjs.push(res.data);

	        switch(res.data.type_month)
	        {
        		case '1' : $scope.labels = labels1; break;
        		case '2' : $scope.labels = labels2; break;
        		case '3' : $scope.labels = labels3; break;
	        }

	        var r = [];
	        for(var i=0; i<res.data.list.length; i++){
	        	r.push(res.data.list[i].sum);
	        }
	        $scope.data.push(r);
	        
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
    	//console.log($scope.obj);
    	totalevaluatelist.get($scope.obj, function(res){
            //console.log(res.data);
	        if(res.errcode !== 0)
	        {
	            alert(res.errmsg);
	            return ;
	        }

	        $scope.totalobjs.push(res.data);

	        var r = [];
	        for(var i=0; i<res.data.list.length; i++){
	        	r.push(res.data.list[i].sum);
	        }
	        $scope.data.push(r);

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





};