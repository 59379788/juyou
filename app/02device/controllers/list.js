module.exports = function($scope, $uibModal, typelist, devicelist){

	var view = '0099';

	// var data = [
	// 	{
	// 		'type' : 1,
	// 		'state' : 1,
	// 		'remarks' : 'asdasdads',
	// 		'code' : '12344556',
	// 		'total' : 31
	// 	},
	// 	{
	// 		'type' : 1,
	// 		'state' : 1,
	// 		'remarks' : 'asdasdads',
	// 		'code' : '12344556',
	// 		'total' : 32
	// 	}
	// ];


	devicelist.get({'view' : view}, function(res){

		console.log(res);
		if(res.errcode === 0)
		{
			$scope.objs = res.data;
		}
		else
		{
			alert(res.errmsg);
		}

	});



	//打开模态框
	$scope.configurationticket = function(device_code){

		//alert(device_code);

		var modalInstance = $uibModal.open({
	      template: require('../views/tickettypelist.html'),
	      controller: 'tickettypelist',
	      resolve: {
	      	view : function(){
	      		return view;
	      	},
	      	device_code : function(){
	      		return device_code;
	      	},
	      	typelist : function(){
	      		return typelist;
	      	}
	      }
	    });

	    modalInstance.result.then(function (selectedItem) {
	      //$scope.selected = selectedItem;

	      console.log(selectedItem);

	    }, function () {
	      //$log.info('Modal dismissed at: ' + new Date());
	    });
	}




};