module.exports = function($scope, $state, attrlist){

	var para = {};

	attrlist.save(para, function(res){

     	console.log(res);

     	if(res.errcode !== 0)
     	{
     		alert("数据获取失败");
     		return;
     	}

     	$scope.objs = res.data;
    });


	$scope.create = function(){


		$state.go('app.tkttypeattrcreate');


	};

	$scope.edit = function(type_attr){

    	$state.go('app.tkttypeattredit', {'type_attr' : type_attr});

    };
	

};
