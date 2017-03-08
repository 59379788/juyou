module.exports = function($resource, $state){

	return {

		restrict : 'AE',
		template : require('../views/p_baseinfo.html'),
		replace:true,
		scope:{
			'model' : '=',
			// 'util' : '=',
			// 'open' : '=',
		},
		link : function(scope, elements, attrs){

			console.log(scope.model);

		}

	};
};

