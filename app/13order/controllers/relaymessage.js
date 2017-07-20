module.exports = function($scope, $uibModalInstance, code, relay, sale_belong, 
	getRedCorridorTrSendSms, agencyOrderRepeatECode){

	$scope.obj = {};
	$scope.obj.code = code;


	$scope.cancel = function(){

		$uibModalInstance.close();

	}

	$scope.gogo = function(){

		if($scope.obj.mobile === undefined || $scope.obj.mobile == '')
		{
			alert('手机号码不能为空');
			return;
		}

		if($scope.obj.mobile.length != '11')
		{
			alert('手机号码位数错误');
			return;
		}


		var fun;
		var para = {};
        if(sale_belong === 'juyou' || sale_belong === 'supply_piaofutong' ||  sale_belong.indexOf('supply_tstc') == 0  ||  sale_belong === 'supply_tongchenglvyou' || sale_belong === 'supply_zhiyoubao' || sale_belong === 'supply_xiaojing' || sale_belong === 'supply_ziwoyou')
        {
            fun = relay;
            para['code'] = $scope.obj.code;
            para['mobile'] = $scope.obj.mobile;
        }
        else if(sale_belong === 'langdao')
        {
            fun = getRedCorridorTrSendSms;
            para['code'] = $scope.obj.code;
            para['mobile'] = $scope.obj.mobile;
        }
        else if(sale_belong === 'huaxiapiaolian')
        {
        	fun = agencyOrderRepeatECode;
        	para['order_code'] = $scope.obj.code;
            para['ownerMobile'] = $scope.obj.mobile;
        }

		fun.save(para, function(res){

			if(res.errcode === 0)
			{
				alert('转发成功');
				$uibModalInstance.close();
			}
			else
			{
				alert(res.errmsg);
			}

		});

	}



};