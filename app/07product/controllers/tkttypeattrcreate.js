module.exports = function($scope, attrcreate){

	//保存按钮
	$scope.gogo = function(){

		attrcreate.save($scope.objt, function(res){

			console.log(res);

			if(res.errcode === 0)
			{
				alert('保存成功');
			}
			else
			{
				alert(res.errmsg);
			}

		});

	};
	

};
