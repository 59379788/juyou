module.exports = function($scope, getWeekLottey, lotteyUserinfo, saveUserinfo){

	$scope.lottry = {
		'sevenstart' : '',
		'period' : ''
	};

	$scope.user = {
		'username' : '',
		'lotter' : '',
		'mobile' : '',
		'period' : ''
	};

	$scope.btn = {
		'periodtxt' : false,
		'query' : false,
		'confirm' : true
	};

	$scope.querylottry = function(){
		//alert($scope.lottry.number);
		if ($scope.lottry.sevenstart.length !== 7) {
			alert('七星彩号码不正确，请输入正确七星彩号码');
			return;
		}
		console.log($scope.lottry);
		getWeekLottey.save($scope.lottry, function(res){
			// 点击查询之后确定按钮变为可用状态
			//document.getElementById("confirmBtu").disabled = false;

			console.log(res);
			
			if(res.errcode !== 0)
			{
				alert(res.errmsg);
				return;
			}
			
			$scope.btn.periodtxt = true;
			$scope.user.lotter = res.data.lotter;
			//console.log({'userid' : res.data.uid.uid});
		    lotteyUserinfo.save({'userid' : res.data.uid.uid}, function(res){
				console.log(res);
				if (res.errcode !== 0) {
					alert(res.errmsg);
					$scope.user = '';
					return;
				} 
				$scope.user.username = res.data.username;
				$scope.user.mobile = res.data.mobile;
				$scope.user.period = $scope.lottry.period;
				$scope.btn.confirm = false;
		    });

		});

	};
    
	$scope.confirm = function(){

		//alert('2222');
		var para = {
			'name' : $scope.user.username,
			'lottry' : $scope.user.lotter,
			'mobile' : $scope.user.mobile,
			'period' : $scope.user.period
		};
		saveUserinfo.save(para, function(res){
			console.log(res);
			if(res.errcode === 0)
			{
				alert('开奖成功!');
				return;
				
			} else {
				alert('开奖失败!');
				$scope.user = '';
				return;
			}    
     	});                
	};



	$scope.clear = function(){

		$scope.lottry = {
			'sevenstart' : '',
			'period' : ''
		};

		$scope.user = {
			'username' : '',
			'lotter' : '',
			'mobile' : '',
			'period' : ''
		};

		$scope.btn = {
			'periodtxt' : false,
			'query' : false,
			'confirm' : true
		};
	}

};