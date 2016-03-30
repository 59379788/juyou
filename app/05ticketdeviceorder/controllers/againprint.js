module.exports = function($scope, $stateParams, receliptlist, receliptinfo, receliptprint){

	$scope.device = '90010091004';	
	$scope.type = '210302198308022412';	

	$scope.query = function(){
		var len = $scope.type.length;
		if(!(len === 8 || len === 18)){
			alert("位数错误");
			return;
		}

		receliptlist.get({'device' : $scope.device, 'code' : $scope.type}, function(res){
			if(res.errcode === 0){
				$scope.objs = res.data;
			}else{
				alert(res.errmsg);
			}
		});
	};

	$scope.detail = function(id){
		receliptinfo.get({'id' : id}, function(res){
			var msg = "打印信息\r\n"+
				  "票种名称："+res.data.tkt_name+"\r\n"+
				  "所有票码："+res.data.ticket_list+"\r\n"+
				  "打印次数："+res.data.print_times+"\r\n"+
				  "创建时间："+res.data.create_time+"\r\n"+
				  "更新时间："+res.data.update_time+"\r\n";
			if(confirm(msg)){
				receliptprint.get({'id' : id}, function(res){
					if(res.errcode === 0){
						if(res.data.count === 1){
							alert("打印成功");
						}
					}else{
						alert(res.errmsg);
					}
				});
			}
		});
	};


};