module.exports = function($scope, $stateParams,userinfo){
    // 获取用户信息
    userinfo.save({}, function(res){ 
    	/*if (res.errcode !== 0) { 
    		alert(res.errmsg);
    		return;
    	}*/
    	console.log(res);
    	$scope.loginuser = res;
    });
    
    $scope.obj = { 
    	'sclink' : 'http://weixint.juyouhx.com?company_code=',
    	'link' :　'http://weixint.sylyx.cn/views/applytab/bmreg.html?company_code=',
    	'text' : '测试:',
    	'shengchan' :　'生产:'
    	
    };


};