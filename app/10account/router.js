/**
 * 子模块路由
 * dlq
 */

var router = function($urlRouterProvider, $stateProvider){

 	$stateProvider

 	  .state('app.account', {
        url: '/account',
        controller : 'account',
        template: require('./views/account.html'),
        resolve:{
            mechanism : function(accountservice){
                return accountservice.mechanism();
            },
            create : function(accountservice){
                return accountservice.create();
            },
            list : function(accountservice){
                return accountservice.list();
            },
            role : function(accountservice){
                return accountservice.role();
            },
            info : function(accountservice){
                return accountservice.info();
            },
            createmechanism : function(accountservice){
                return accountservice.createmechanism();
            }
            
        }
      })

      .state('app.changepassword', {
        url: '/changepassword',
        controller : 'changepassword',
        template: require('./views/changepassword.html'),
        resolve:{
            changepassword : function(accountservice){
                return accountservice.changepassword();
            }
        }
      })


      // .state('app.editview', {
      //   url: '/view/:placeid',
      //   controller : 'viewedit',
      //   template: require('./views/viewmodel.html'),
      //   resolve:{
      //       placeinfo : function(placeservice){
      //           return placeservice.info();
      //       },
      //       placeupdate : function(placeservice){
      //           return placeservice.update();
      //       },
      //       viewinfo : function(viewservice){
      //           return viewservice.info();
      //       },
      //       viewupdate : function(viewservice){
      //           return viewservice.update();
      //       }
      //   }
      // })

      


};

module.exports = router;