module.exports = function($resource, $state){

	return {

		restrict : 'AE',
		template : require('../views/p_tickettype.html'),
		replace:true,
		scope:{
			// 'model' : '=',
			// 'util' : '=',
			// 'open' : '=',
		},
		link : function(scope, elements, attrs){



		}

	};
};

