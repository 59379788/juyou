/**
 * 子模块路由
 * dlq
 */

var router = function($urlRouterProvider, $stateProvider){

 	$stateProvider

 	  .state('app.createplace', {
        url: '/createplace',
        controller : 'createplace',
        views: {
            "place" : { template: require('./views/place.html') },
            "view"  : { template: require('./views/view.html') }
        },
        //template: require('./views/createplace.html'),
        resolve:{
            // view : function(productservice){
            //     return productservice.slist;
            // },
            // list : function(productservice){
            //     return productservice.list();
            // }
        }
        
      })

      


};

module.exports = router;