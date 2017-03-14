module.exports = function($resource, $state, $http, $q){

	return {

		restrict : 'AE',
		template : require('../views/p_flashsale.html'),
		replace:true,
		scope:{
			'saleobj' : '=',
			'util' : '=',
		},
		link : function(scope, elements, attrs){

			
		   
		}

	};
};

