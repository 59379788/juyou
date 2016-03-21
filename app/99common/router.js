/**
 * 子模块路由
 * dlq
 */

var router = function($urlRouterProvider, $stateProvider){

 	$stateProvider

 	  $stateProvider
	 	.state('app', {
	      url: '/app',
	      abstract: true,
	      controller : 'appcontroller',
	      template : require('./views/app.html'),
	      resolve:{
        	permission : function(commonservice){
        		return commonservice.permission();
        	}
          }
	    })
 	  

};

module.exports = router;