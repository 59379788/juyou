module.exports = function($scope, $uibModal, typelist, devicelist, add, del, $state){

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


	function load(){

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
	}
	load();



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
	      	},
	      	add : function(){
	      		return add;
	      	},
	      	del : function(){
	      		return del;
	      	}
	      }
	    });

	    modalInstance.result.then(function () {
	      
	      load();

	    }, function () {
	      //$log.info('Modal dismissed at: ' + new Date());
	    });
	}

	$scope.edit = function(id){

		$state.go('app.devicetktedit', {'id' : id});

	};


};