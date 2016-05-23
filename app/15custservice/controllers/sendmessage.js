module.exports = function($scope, sendmessage){

	$scope.searchform = {};
    
    $scope.load = function () {

    	var para = '{"body":{"mobile":"' + $scope.searchform.mobile + '"},"head":{}}';

        sendmessage.save(para, function(res){

         	console.log(res);
         	if(res.head.rtnCode !== '000000')
         	{
         		alert("数据获取失败");
         		return;
         	}

         	
         	for(var i=0; i<res.body.length; i++){

         		if(res.body[i].status == '0'){
	         		res.body[i].status = '有效';
	         	} else if(res.body[i].status == '1'){
	         		res.body[i].status = '失效';
	         	}

	         	if(res.body[i].sendStatus == '01'){
	         		res.body[i].sendStatus = '发送成功';
	         	} else if(res.body[i].sendStatus == '02'){
	         		res.body[i].sendStatus = '发送失败';
	         	}
         	}

         	$scope.objs = res.body;

        });

    };

};