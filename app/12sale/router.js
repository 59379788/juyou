/**
 * 子模块路由
 * dlq
 */

var router = function($urlRouterProvider, $stateProvider){

 	$stateProvider

 	  .state('app.selling', {
        url: '/selling/:type',
        controller : 'selling',
        template: require('./views/selling.html'),
        resolve:{
            namelist : function(sellingservice){
                return sellingservice.namelist();
            },
            info : function(sellingservice){
                return sellingservice.info();
            },
            createorder : function(orderservice){
                return orderservice.createorder();
            }
        }
        
      })

      


};

module.exports = router;