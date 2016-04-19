/**
 * 子模块路由
 * dlq
 */

var router = function($urlRouterProvider, $stateProvider){

 	$stateProvider

 	  .state('app.platformdeposit', {
        url: '/platformdeposit',
        //controller : 'platformdeposit',
        template: require('./views/platformdeposit.html')
        // ,
        // resolve:{
        // 	insert : function(docservice){
        // 		return docservice.insert();
        // 	},
        // 	group : function(docservice){
        // 		return docservice.group();
        // 	}
        // }
      })


};

module.exports = router;