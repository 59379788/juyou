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
            },
            createBackOrder : function(orderservice){
                return orderservice.createBackOrder();
            }
        }
      })

      .state('app.huaxiaplproduct', {
        url: '/huaxiaplproductlist',
        controller : 'huaxiaplproduct',
        template: require('./docking/huaxiaplproduct.html'),
        resolve:{
            getAgencyProductInfo : function(dockingservice){
                return dockingservice.getAgencyProductInfo();
            }
        }
      })

      .state('app.huaxiaplorder', {
        url: '/huaxiaplorder',
        controller : 'huaxiaplorder',
        template: require('./docking/huaxiaplorder.html'),
        resolve:{
            getOrderSimInfo : function(dockingservice){
                return dockingservice.getOrderSimInfo();
            },
            agencyOrderUsed : function(dockingservice){
                return dockingservice.agencyOrderUsed();
            }
        }
      })

      


};

module.exports = router;