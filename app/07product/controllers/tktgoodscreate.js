module.exports = function($scope, $state, goodscreate, viewlist, attrlistsel, typelist, goodsdetailcreate, goodsdetaillist, goodsdetaildelete, sel_id){

	$scope.goodsobj = {};
	$scope.goodsobjstate = 1;	//编辑状态

	//景区下拉
	viewlist().then(function(res) {
        if(res.errcode === 0)
        {
        	$scope.viewarr = res.data;
        	$scope.goodsobj.place_code=$scope.viewarr[0].code;
        	var view = $scope.goodsobj.place_code;
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
	var id;
	$scope.goodsgo = function(){

		goodscreate.save($scope.goodsobj, function(res){

			var view = $scope.goodsobj.place_code;

			if(res.errcode === 0)
			{
				$scope.goodsobjstate = 0;
				//通过商品code取id
				sel_id.get({'code' : $scope.goodsobj.code}, function(res){
					if(res.errcode === 0)
					{
						id = res.data.id;
					}
					else
					{
						alert(res.errmsg);
					}
				});
				
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
		$state.go('app.editgoods', {'id' : id});
	}

	$scope.add = function(){

		goodsdetailcreate.save($scope.goodsobj, function(res){

	     	if(res.errcode === 0)
	     	{
	     		$scope.load($scope.goodsobj.code);
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