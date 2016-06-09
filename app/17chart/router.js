/**
 * 子模块路由
 * dlq
 */

var router = function($urlRouterProvider, $stateProvider){

 	$stateProvider

        .state('app.salechart', {
            url: '/salechart',
            controller : 'salechart',
            template: require('./views/salechart.html'),
            resolve:{
                orderstatisticslist : function(statisticsservice){
                    return statisticsservice.orderstatisticslist();
                },
                getDate : function(utilservice){
                    return utilservice.getDate;
                },
                dataScope : function(utilservice){
                    return utilservice.dataScope;
                },
                salelist : function(productservice){
                    return productservice.salelist();
                }
            }
            
          })

};

module.exports = router;