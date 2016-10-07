module.exports = function($scope, search, sale_01, insertWinterTicketOrder, createOrder){

	//页面数据
	$scope.papersno = '';

	$scope.user = {};


	var txt = ['未实名', '实名制会员'];

	//可用
    $scope.btnstate = true;
    $scope.notrelbtnstate = true;
    $scope.relbtnstate = true;

	$scope.searchinfo = function () {

		$scope.user = {
			'mobile' : '',
			'name' : '',
			'what' : '',
			'juyou' : -999	//0不是居游用户，1是居游用户
		};

		search.save({ 'papersno': $scope.papersno}, function(res){
			console.log(res);

	       	if(res.errcode == 9999) {
	       		$scope.user.juyou = '0';
	       	}
	       	else if(res.errcode == 0)
	       	{
	       		$scope.user = {
					'mobile' : res.data.mobile,
					'name' : res.data.username,
					'what' : res.data.status,
					'whattxt' : txt[res.data.status],
					'juyou' : '1'
				};
	       	}
	       	else
	       	{
	       		alert(res.errmsg);
	       	}

		});

	};


	$scope.buynotrealname = function(){

		$scope.notrelbtnstate = false;

		insertWinterTicketOrder.save({'mobile':$scope.user.mobile}, function(res){

			console.log(res);

	        if (res.errcode !== 0) {
	       		alert(res.errmsg);
	       		$scope.notrelbtnstate = true;
	       		return;
	       	}

	       	alert('发送成功');

			clear();

			$scope.notrelbtnstate = true;

	    });

	};



	$scope.buyrealname = function(){

		$scope.relbtnstate = false;

		sale_01.save({'mobile':$scope.user.mobile}, function(res){

			console.log(res);

	        if (res.errcode !== 0) {
	       		alert(res.errmsg);
	       		$scope.relbtnstate = true;
	       		return;
	       	}

	       	alert('购买成功');

			clear();

			$scope.relbtnstate = true;

	    });

	};
	

	$scope.buy90 = function(){

		if($scope.user.mobile == '' || $scope.user.mobile == undefined )
		{
			alert('请收入手机号');
			return;
		}

		$scope.btnstate = false;

		console.log({
			'mobile' : $scope.user.mobile, 
			'cardno' : $scope.papersno, 
			'num' : 1, 
			'sale_code' : '1475207394349'
		});
		createOrder.save({
			'mobile' : $scope.user.mobile, 
			'cardno' : $scope.papersno, 
			'num' : 1, 
			'sale_code' : '1475207394349'
		}, function(res){

			console.log(res);

			if(res.errcode !== 0)
			{
				alert(res.errmsg);
				$scope.btnstate = true;
				return;
			}

			alert('购买成功');

			clear();

			$scope.btnstate = true;
		});


	};


	function clear()
	{
		$scope.papersno = '';

		$scope.user = {
			'mobile' : '',
			'name' : '',
			'what' : '',
			'juyou' : -999	//0不是居游用户，1是居游用户
		};
	}

	// $scope.flg ;
	// $scope.user ;
	// $scope.username;
	// $scope.realname;
	// $scope.searchinfo = function (cardno) {
 //       search.save({ 'papersno':cardno}, function(res){
 //       	console.log(res);
 //       	if (res.errcode !== 0) {
 //       		alert(res.errmsg);
 //       		return;
 //       	}
 //        if ( (res.errcode === 9999)&&(res.errmsg  === '无此用户！') ) {
 //        	user = 0;
 //        }else{
 //        	user = 1;
 //        }


 //        $scope.flg = res.data.status;
 //        $scope.username = res.data.username;
 //        if ($scope.flg == 1) {
 //        	name = res.data.username;;
 //        }else if ($scope.flg == 0) {
 //        	name = "未实名";
 //        }
 //        console.log(name);
 //    	});
 //    };


	// $scope.buyticrea = function (mobile) {
	//     sale_01.save( {'mobile':mobile}, function(res){

	//         if (res.errcode!==0) {
	//         	alert(errmsg);
	//         	return;
	//         }

	// 	});
 //    };


	// $scope.buyticreajia = function (mobile) {
	//     insertWinterTicketOrder.save({'mobile':mobile}, function(res){

	//         if (res.errcode !== 0) {
 //       		alert(errmsg);
 //       		return;
 //       	}

	// 	});
 //    };
};
