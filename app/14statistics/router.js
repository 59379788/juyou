/**
 * 子模块路由
 * dlq
 */

var router = function($urlRouterProvider, $stateProvider){

 	$stateProvider

 	  .state('app.uselist', {
        url: '/uselist',
        controller : 'uselist',
        template: require('./views/uselist.html'),
        resolve:{
            list : function(orderservice){
                return orderservice.list();
            },
            getDate : function(utilservice){
                return utilservice.getDate;
            }
        }
        
      })

      


};

module.exports = router;