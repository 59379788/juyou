module.exports = function($scope, $uibModal,
	checkcode, checkcard, checkid, useticketbyid, useticketbycode, useticketbycard){

	//票码
	$scope.code = "210302198308022412";

	//设备号
	$scope.device = "90010091004";

	//将要
  	var para = {};

  	//查票方法
	$scope.check = function(){

		var len = $scope.code.length;

		if(len === 0) return;

		//票码
		if(len === 8)
		{
			para = {"code" : $scope.code, "device" : $scope.device, "fun" : useticketbycode};
			checkcode.get(para, oper);
		}
		//身份证
		else if(len === 18)
		{
			para = {"ID" : $scope.code, "device" : $scope.device, "fun" : useticketbyid};
			checkid.get(para, oper);
		}
		//卡号
		else if(len === 12)
		{
			para = {"card" : $scope.code, "device" : $scope.device, "fun" : useticketbycard};
			checkcard.get(para, oper);
		}
		else
		{
			alert("位数错误");
		}

	};

	//打开模态框
	function openticketinfo(info){

		var modalInstance = $uibModal.open({
	      template: require('../views/ticketinfo.html'),
	      controller: 'ticketinfo',
	      resolve: {
	        info: function () {
	          return info;
	        },
	        para : function(){
	          return para;
	        }
	      }
	    });
	}

	//查票后的通用方法
	function oper(res) {
		console.log(res);

		if(res.errcode === 0)
		{
			openticketinfo(res.data.ticketList);
		}
		else
		{
			alert(res.errmsg);
		}
	}

};