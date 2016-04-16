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