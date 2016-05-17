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
         },
         talist : function(depositservice){
             return depositservice.talist;
         },
         recharge : function(depositservice){
             return depositservice.recharge();
         },
         trackinfo : function(depositservice){
             return depositservice.trackinfo();
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
         },
         talist : function(depositservice){
             return depositservice.talist;
         }

        }
      })

      .state('app.trackinfo', {
        url: '/trackinfo',
        controller: 'trackinfo',
        template: require('./views/trackinfo.html'),
        resolve:{
         // create : function(depositservice){
         //     return depositservice.create();
         // },
         // talist : function(depositservice){
         //     return depositservice.talist;
         // },
         trackinfo : function(depositservice){
             return depositservice.trackinfo();
         }

        }
      })




};

module.exports = router;