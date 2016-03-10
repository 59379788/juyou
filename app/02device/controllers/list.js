module.exports = function($scope, $uibModal){

	var data = [
		{
			'type' : 1,
			'state' : 1,
			'remarks' : 'asdasdads',
			'code' : '12344556',
			'total' : 31
		},
		{
			'type' : 1,
			'state' : 1,
			'remarks' : 'asdasdads',
			'code' : '12344556',
			'total' : 32
		}
	];


	$scope.objs = data;


	//打开模态框
	$scope.configurationticket = function(){

		var modalInstance = $uibModal.open({
	      template: require('../views/tickettypelist.html'),
	      controller: 'tickettypelist',
	      resolve: {
	      	view : function(){
	      		return '0010';
	      	}
	      }
	    });
	}




};