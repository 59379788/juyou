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

      


};

module.exports = router;