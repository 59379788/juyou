/**
 * 子模块路由
 * dlq
 */

var router = function($urlRouterProvider, $stateProvider){

 	$stateProvider

 	  // .state('app.platformdeposit', {
    //     url: '/platformdeposit',
    //     //controller : 'platformdeposit',
    //     template: require('./views/platformdeposit.html')
    //     // ,
    //     // resolve:{
    //     // 	insert : function(docservice){
    //     // 		return docservice.insert();
    //     // 	},
    //     // 	group : function(docservice){
    //     // 		return docservice.group();
    //     // 	}
    //     // }
    //   })



      .state('app.depositlist', {
        url: '/depositlist',
        controller : 'depositlist',
        template: require('./views/list.html'),
        resolve:{
         list : function(depositservice){
             return depositservice.list();
         }
        }
      })

      .state('app.createdeposit', {
        url: '/createdeposit',
        controller : 'createdeposit',
        template: require('./views/deposit.html'),
        resolve:{
         create : function(depositservice){
             return depositservice.create();
         }
        }
      })


};

module.exports = router;