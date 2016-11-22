module.exports = function($scope, talist, sellerList, code, tstcreate, tststart, tststop, title){

	$scope.obj = {
		'title' : title
	};


	talist().then(function(res) {
	    console.log(res);
		if(res.errcode === 0)
		{
			$scope.taarr = res.data;
			$scope.obj.seller_code=$scope.taarr[0].CODE;
		}
		else
		{
			alert(res.errmsg);
		}
	});

	function load(){
		sellerList.get({'sale_code' : code}, function(res){

			console.log(res);
			if(res.errcode === 0)
			{
				$scope.sellers = res.data;
			}
			else
			{
				alert(res.errmsg);
			}

		});
	}
	load();

	$scope.create = function(){
		tstcreate.save({'sale_code' : code, 'company_code' : $scope.obj.seller_code}, function(res){
			if(res.errcode === 0)
			{
				load();
			}
			else
			{
				alert(res.errmsg);
			}

		});
	};

	$scope.start = function(sellercode){
		tststart.save({'sale_code' : code, 'company_code' : sellercode}, function(res){
			if(res.errcode === 0)
			{
				load();
			}
			else
			{
				alert(res.errmsg);
			}
		});
	};

	$scope.stop = function(sellercode){
		tststop.save({'sale_code' : code, 'company_code' : sellercode}, function(res){
			if(res.errcode === 0)
			{
				load();
			}
			else
			{
				alert(res.errmsg);
			}
		});
	};
	
};