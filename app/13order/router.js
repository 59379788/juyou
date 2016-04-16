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
            }
            // info : function(sellingservice){
            //     return sellingservice.info();
            // },
            // createorder : function(orderservice){
            //     return orderservice.createorder();
            // }
        }
        
      })

      


};

module.exports = router;