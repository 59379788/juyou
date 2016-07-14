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

      .state('app.qunabackticketapplylist', {
        url: '/qunabackticketapplylist',
        controller : 'qunabackticketapplylist',
        template: require('./docking/qunabackticketapplylist.html'),
        resolve:{
            selectapplyOrderRefundByUserlist : function(dockingservice){
                return dockingservice.selectapplyOrderRefundByUserlist();
            },
            updateOrderRefundAgree : function(dockingservice){
                return dockingservice.updateOrderRefundAgree();
            },
            updateOrderRefundNotAgree : function(dockingservice){
                return dockingservice.updateOrderRefundNotAgree();
            }
        }
      })

      


};

module.exports = router;