/**
 * 子模块路由
 * dlq
 */

var router = function($urlRouterProvider, $stateProvider){

 	$stateProvider

 	  .state('app.corridorproductlist', {
        url: '/corridorproductlist',
        controller : 'corridorproductlist',
        template: require('./docking/corridorproductlist.html'),
        resolve:{
            corridorproductlist : function(dockingservice){
                return dockingservice.corridorproductlist();
            },
            corridorproductinfo : function(dockingservice){
                return dockingservice.corridorproductinfo();
            }
        }
      })

      


};

module.exports = router;