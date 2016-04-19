module.exports = function($scope, $stateParams, goodsupdate, goodsinfo, viewlist, typelist, attrlistsel, goodsdetailcreate, goodsdetaillist, goodsdetaildelete, goodsstate){

	//$scope.goodsobjstate = 1;			//编辑状态
	//$scope.goodsobjdetailstate = 0;		//显示状态

	//基本信息 商品状态下拉
	//$scope.statearr = goodsstate;

	$scope.goodsobj = {};
	$scope.tkttypeobj = {};

	//基本信息 景区下拉
	viewlist().then(function(res) {
        if(res.errcode === 0)
        {
        	$scope.viewarr = res.data;
        }
        else
        {
            alert(res.errmsg);
        }
    });

    //详细信息 票种属性下拉
	attrlistsel().then(function(res) {
		console.log(res);
        if(res.errcode === 0)
        {
        	$scope.tktarr = res.data;
        	$scope.tkttypeobj.ticket_attr = $scope.tktarr[0].ticket_attr_id;
        	//console.log($scope.goodsobj.ticketattr);
        }
        else
        {
            alert(res.errmsg);
        }
    });

    goodsinfo.get({'id' : $stateParams.id}, function(res){
		console.log(res);

		if(res.errcode === 0)
		{
			$scope.goodsobj = res.data;
			var view = $scope.goodsobj.place_code;

			goodsdetail($scope.goodsobj.code);


			typelist.get({'view' : view}, function(res){
				console.log(res);
				if(res.errcode === 0){
					$scope.typearr = res.data;
					$scope.tkttypeobj.ticket_type=$scope.typearr[0].code;
				}else{
					alert(res.errmsg);
				}
			});

		}
		else
		{
			alert(res.errmsg);
		}
	});

	//详细信息 查询
	function goodsdetail(code) {
		goodsdetaillist.get({'goods_code' : code}, function(res){
			if(res.errcode === 0)
			{
				console.log(res.data);
				$scope.objs = res.data;
			}
			else
			{
				alert(res.errmsg);
			}
		});
	}


	//添加票种
	$scope.add = function(){

		if(!checkAdd($scope.tkttypeobj))
		{
			alert('不能添加重复票种！');
			return;
		}

		$scope.tkttypeobj.code = $scope.goodsobj.code;
		goodsdetailcreate.save($scope.tkttypeobj, function(res){
			console.log(res);
	     	if(res.errcode === 0)
	     	{
	     		goodsdetail($scope.goodsobj.code);
	     	}
     		else
			{
				alert(res.errmsg);
			}
	    });

	};


	function checkAdd(obj){

		if(!angular.isArray($scope.objs)) return false;

		for(var i = 0; i < $scope.objs.length; i++)
		{
			var tmp = $scope.objs[i];
			if(tmp.ticket_type === obj.ticket_type
			&& tmp.ticket_attr === obj.ticket_attr)
			{
				return false;
			}
		}

		return true;
	}


	//详细信息 删除
	$scope.del = function(id){
		goodsdetaildelete.get({'id' : id}, function(res){
			if(res.errcode === 0)
			{
				goodsdetail($scope.goodsobj.code);
			}
			else
			{
				alert(res.errmsg);
			}
		});
	}

    

    
	// //基本信息 上一页编辑获取信息
	// $scope.loadmain = function(){
		
	// }
	// $scope.loadmain();

	// //基本信息 保存
	// $scope.goodsgo = function(){
	// 	goodsupdate.save($scope.goodsobj, function(res){

	// 		if($scope.goodsobj.code === undefined || $scope.goodsobj.code == '')
	// 		{
	// 			alert('商品编号不能为空');
	// 			return;
	// 		}

	// 		if($scope.goodsobj.name === undefined || $scope.goodsobj.name == '')
	// 		{
	// 			alert('商品名称不能为空');
	// 			return;
	// 		}

	// 		var view = $scope.goodsobj.place_code;

	// 		if(res.errcode === 0)
	// 		{
	// 			$scope.goodsobjstate = 0;
	// 			$scope.goodsobjdetailstate = 1;
	// 			$scope.load($scope.goodsobj.code);
	// 			//详细信息 票种类型下拉
	// 		    typelist.get({'view' : view}, function(res){
	// 				if(res.errcode === 0){
	// 					$scope.typearr = res.data;
	// 					$scope.goodsobj.ticket_type=$scope.typearr[0].code;
	// 				}else{
	// 					alert(res.errmsg);
	// 				}
	// 			});
	// 		}
	// 		else
	// 		{
	// 			alert(res.errmsg);
	// 		}
	// 	});
	// };

	// //编辑改变状态
	// $scope.goodsedit = function(){
	// 	$scope.goodsobjstate = 1;
	// 	$scope.goodsobjdetailstate = 0;
	// 	$scope.loadmain();
	// };









	
};