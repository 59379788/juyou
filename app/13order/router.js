/**
 * 子模块路由
 * dlq
 */

var router = function($urlRouterProvider, $stateProvider){

 	$stateProvider

 	  .state('app.orderlist', {
        url: '/orderlist',
        controller : 'orderlist',
        template: require('./views/list.html'),
        resolve:{
            list : function(orderservice){
                return orderservice.list();
            },
            getDate : function(utilservice){
                return utilservice.getDate;
            },
            ticketlist : function(orderservice){
                return orderservice.ticketlist();
            },
            createBackOrder : function(orderservice){
                return orderservice.createBackOrder();
            },
            resend : function(orderservice){
                return orderservice.resend();
            },
            getRedCorridorOrderList : function(orderservice){
                return orderservice.getRedCorridorOrderList();
            },
            getRedCorridorResentMsg : function(orderservice){
                return orderservice.getRedCorridorResentMsg();
            },
            orderbacklist : function(orderservice){
                return orderservice.orderbacklist();
            }

        }
        
      })

      .state('app.allorderlist', {
        url: '/allorderlist',
        controller : 'allorderlist',
        template: require('./views/list.html'),
        resolve:{
            alllist : function(orderservice){
                return orderservice.alllist();
            },
            getDate : function(utilservice){
                return utilservice.getDate;
            }
        }
        
      })

      //查看订单的所有票信息
      .state('app.orderticketlist', {
        url: '/orderticketlist/:code',
        controller : 'orderticketlist',
        template: require('./views/orderticketlist.html'),
        resolve:{
            ticketlist : function(orderservice){
                return orderservice.ticketlist();
            },
            createBackOrder : function(orderservice){
                return orderservice.createBackOrder();
            }
            // getDate : function(utilservice){
            //     return utilservice.getDate;
            // }
        }
        
      })


      //查看订单的所有票信息
      .state('app.orderticketlistcode', {
        url: '/orderticketlist/:code',
        controller : 'orderticketlist',
        template: require('./views/orderticketlistcode.html'),
        resolve:{
            ticketlist : function(orderservice){
                return orderservice.ticketlist();
            }
            // getDate : function(utilservice){
            //     return utilservice.getDate;
            // }
        }
        
      })


      .state('app.orderbycode', {
        url: '/orderbycode',
        controller : 'orderbycode',
        template: require('./views/orderbycode.html'),
        resolve:{
            // list : function(orderservice){
            //     return orderservice.list();
            // },
            // getDate : function(utilservice){
            //     return utilservice.getDate;
            // }
        }
        
      })

      .state('app.grouporderlist', {
        url: '/grouporderlist',
        controller : 'grouplist',
        template: require('./views/grouplist.html'),
        resolve:{
            grouplist : function(orderservice){
                return orderservice.grouplist();
            },
            getDate : function(utilservice){
                return utilservice.getDate;
            }
        }
        
      })

      .state('app.allgrouporderlist', {
        url: '/grouporderalllist',
        controller : 'groupalllist',
        template: require('./views/grouplist.html'),
        resolve:{
            groupalllist : function(orderservice){
                return orderservice.groupalllist();
            },
            getDate : function(utilservice){
                return utilservice.getDate;
            }
        }
        
      })


};

module.exports = router;