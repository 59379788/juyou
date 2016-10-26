module.exports = function($scope, $uibModal,
	checkcode, checkcard, checkid, checkgroupcode, useticketbyid, useticketbycode, 
	useticketbycard, useticketbygroupcode, devicenamelist, list,ITEMS_PERPAGE,devicelist){

	//票码
	$scope.code = "";

	//设备号
	$scope.device = "";
	$scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = 500;         //每页显示几条

    //景区列表
	$scope.load = function () {
        
        var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:200
        };

        // para = angular.extend($scope.searchform, para);
        
        list.save(para, function(res){

         	if(res.errcode !== 0)
         	{
         		alert("数据获取失败");
         		return;
         	}

         	$scope.objs = res.data.results;
         	$scope.obj = res.data.results[0].code;
            // $scope.bigTotalItems = res.data.totalRecord;
            $scope.tktmachine($scope.obj);
        });

    };
    $scope.load();

    //查询景区下属票机
    $scope.tktmachine = function(code){
    	devicelist.save({'view' : code }, function(res){
			if(res.errcode === 0)
			{
				$scope.devicearr = res.data;
				$scope.device = res.data[0].code;
			}
			else
			{
				alert(res.errmsg);
			}

		});
    };
    

	// devicenamelist.get({}, function(res){

	// 	console.log(res);
	// 	if(res.errcode === 0)
	// 	{
	// 		$scope.devicearr = res.data;
	// 		console.log(1111111111111);
	// 		console.log(res.data);
	// 		console.log(222222222222);
	// 		$scope.device = res.data[0].code;
	// 	}
	// 	else
	// 	{
	// 		alert(res.errmsg);
	// 	}


	// });

	//将要
  	var para = {};

  	var func = {};

  	//查票方法
	$scope.check = function(){

		var len = $scope.code.length;

		if(len === 0) return;

		//票码
		if(len === 8 || len === 9 || len === 10)
		{
			para = {"code" : $scope.code, "device" : $scope.device};
			func = useticketbycode;
			checkcode.get(para, oper);
		}
		//身份证
		else if(len === 18)
		{
			para = {"ID" : $scope.code, "device" : $scope.device};
			func = useticketbyid;
			checkid.get(para, oper);
		}
		//卡号
		else if(len === 16)
		{
			para = {"card" : $scope.code, "device" : $scope.device};
			func = useticketbycard;
			checkcard.get(para, oper);
		}
		else if(len === 7)
		{
			para = {"code" : $scope.code, "device" : $scope.device};
			func = useticketbygroupcode;
			checkgroupcode.get(para, oper);
		}
		else
		{
			alert("位数错误");
		}

	};

	//打开模态框
	function openticketinfo(info){

		var modalInstance = $uibModal.open({
	      template: require('../views/ticketinfo.html'),
	      controller: 'ticketinfo',
	      resolve: {
	        info: function () {
	          return info;
	        },
	        para : function(){
	          return para;
	        },
	        func : function(){
	          return func;
	        }
	      }
	    });
	}

	//查票后的通用方法
	function oper(res) {
		console.log(res);
		console.log(angular.toJson(res));
		console.log(angular.toJson(res,true));

		if(res.errcode === 0)
		{
			//用票码和团票码
			if(para.hasOwnProperty('code'))
			{
				res.data.ticketList = new Array();
				var obj = new Object();
				obj.count = res.data.ticketInfo.count;
				obj.type = res.data.ticketInfo.type;
				obj.type_name = res.data.ticketInfo.type_name;
				obj.type_attr_name = res.data.ticketInfo.type_attr_name;

				console.log(obj);

				res.data.ticketList.push(obj);
			}

			openticketinfo(res.data);
		}
		else
		{
			alert(res.errmsg);
		}
	}

};