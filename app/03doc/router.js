/**
 * 子模块路由
 * dlq
 */

var router = function($urlRouterProvider, $stateProvider){

 	$stateProvider

 	  .state('app.docname', {
        url: '/docname',
        controller : 'name',
        template: require('./views/name.html'),
        resolve:{
        	insert : function(docservice){
        		return docservice.insert();
        	},
        	group : function(docservice){
        		return docservice.group();
        	}
        }
      })

 	  .state('app.doccreate', {
        url: '/doccreate/:api_id',
        controller : 'doccreate',
        template: require('./views/module.html'),
        resolve:{
        	api : function(docservice){
        		return docservice.api();
        	},
        	insert : function(docservice){
        		return docservice.insert();
        	},
        	update : function(docservice){
        		return docservice.update();
        	},
        	del : function(docservice){
        		return docservice.del();
        	}
        }
      })

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