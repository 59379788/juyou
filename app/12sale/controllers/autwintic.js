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

	//校验身份证
	$scope.IdentityCodeValid = function(code){
		
			var city={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "};
	        var tip = "";
	        var pass= true;
	        
	        if(!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)){
	            tip = "身份证号格式错误";
	            pass = false;
	        }
	        
	       else if(!city[code.substr(0,2)]){
	            tip = "身份证地址编码错误";
	            pass = false;
	        }
	        else{
	            //18位身份证需要验证最后一位校验位
	            if(code.length == 18){
	                code = code.split('');
	                //∑(ai×Wi)(mod 11)
	                //加权因子
	                var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
	                //校验位
	                var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];
	                var sum = 0;
	                var ai = 0;
	                var wi = 0;
	                for (var i = 0; i < 17; i++)
	                {
	                    ai = code[i];
	                    wi = factor[i];
	                    sum += ai * wi;
	                }
	                var last = parity[sum % 11];
	                if(parity[sum % 11] != code[17]){
	                    tip = "身份证校验位错误";
	                    pass =false;
	                }
	            }
	        }
	        if(!pass) alert(tip);
	        return pass;
			
		
	}



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

		if ($scope.IdentityCodeValid($scope.papersno)) {
			$scope.relbtnstate = false;
			console.log(11111111111);
			console.log({'mobile':$scope.user.mobile, 'papersno' : $scope.papersno});
			console.log(2222222222);

			sale_01.save({'mobile':$scope.user.mobile, 'papersno' : $scope.papersno}, function(res){

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
		}else{
			return;
		}


		

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