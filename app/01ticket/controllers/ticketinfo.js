module.exports = function($scope, $uibModalInstance, info, para){

	$scope.objs = info;

	var fun = para.fun;

	delete para.fun;

	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};

	$scope.use = function(type, num){

		angular.extend(para, {"num" : num, "type" : type});

		console.log(para);

		fun.get(para, function(res){

			console.log(res);

			if(res.errcode === 0)
			{
				alert("消票成功");
				$uibModalInstance.dismiss('cancel');
			}
			else
			{
				alert(res.errmsg);
			}

		});

	};
};