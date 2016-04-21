module.exports = function($scope, $uibModalInstance, info, para){

	// console.log('-------');
	// console.log(info);
	// console.log('-------');

	$scope.objs = info.ticketList;


	var fun = para.fun;

	delete para.fun;

	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};

	$scope.use = function(type, num, type_attr, goods_code){

		angular.extend(para, {"num" : num, "type" : type, "type_attr" : type_attr, "reqkey" : info.reqkey, 'goods_code' : goods_code});

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