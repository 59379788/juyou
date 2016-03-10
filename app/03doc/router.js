/**
 * 子模块路由
 * dlq
 */

var router = function($urlRouterProvider, $stateProvider){

 	$stateProvider

 	  .state('app.doc', {
        url: '/doc/:type',
        controller : 'doc',
        template: require('./views/doc.html'),
        resolve:{
        	group : function(docservice){
        		return docservice.group();
        	}
        }
      })

	  .state('app.doc.info', {
        url: '/:api_id',
        controller : 'info',
        template: require('./views/info.html'),
        resolve:{
        	api : function(docservice){
        		return docservice.api();
        	}
     	}
      })

};

module.exports = router;