module.exports = function($scope, $stateParams, goodsupdate, goodsinfo, viewlist, typelist, attrlistsel, goodsdetailcreate, goodsdetaillist, goodsdetaildelete){

	$scope.goodsobjstate = 1;	//编辑状态

	//景区下拉
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

    //票种属性下拉
	attrlistsel().then(function(res) {
        if(res.errcode === 0)
        {
        	$scope.tktarr = res.data;
        	$scope.goodsobj.ticketattr=$scope.tktarr[0].ticket_attr_id;
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
			var place_code = res.data.place_code;
			$scope.load(res.data.code);
			//票种类型下拉
			typelist.get({'view' : place_code.substring(1)}, function(res){
				if(res.errcode === 0){
					$scope.typearr = res.data;
					$scope.goodsobj.ticket_type=$scope.typearr[0].code;
				}else{
					alert(res.errmsg);
				}
			});
		}
	});

	$scope.goodsgo = function(){
		goodsupdate.save($scope.goodsobj, function(res){

			var view = $scope.goodsobj.place_code;

			if(res.errcode === 0)
			{
				$scope.goodsobjstate = 0;
				$scope.load($scope.goodsobj.code);
				//票种类型下拉
			    typelist.get({'view' : view.substring(1)}, function(res){
					if(res.errcode === 0){
						$scope.typearr = res.data;
						$scope.goodsobj.ticket_type=$scope.typearr[0].code;
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
	};

	$scope.goodsedit = function(){
		$scope.goodsobjstate = 1;
	};

	$scope.add = function(){

		goodsdetailcreate.save($scope.goodsobj, function(res){

	     	if(res.errcode === 0)
	     	{
	     		$scope.load($scope.goodsobj.code);
	     	}
     		else
			{
				alert(res.errmsg);
			}
	    });

	};

	$scope.load = function (code) {
		goodsdetaillist.get({'goods_code' : code}, function(res){
			if(res.errcode === 0)
			{
				$scope.objs = res.data;
			}
			else
			{
				alert(res.errmsg);
			}
		});
	}

	$scope.del = function(id){
		goodsdetaildelete.get({'id' : id}, function(res){
			if(res.errcode === 0)
			{
				$scope.load($scope.goodsobj.code);
			}
			else
			{
				alert(res.errmsg);
			}
		});
	}



	
};