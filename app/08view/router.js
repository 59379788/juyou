/**
 * 子模块路由
 * dlq
 */

var router = function($urlRouterProvider, $stateProvider){

 	$stateProvider

 	  .state('app.viewlist', {
        url: '/viewlist',
        controller : 'viewlist',
        template: require('./views/viewlist.html'),
        resolve:{
            // view : function(productservice){
            //     return productservice.slist;
            // },
            // list : function(productservice){
            //     return productservice.list();
            // }
        }
      })


      .state('app.createview', {
        url: '/createview',
        controller : 'createview',
        template: require('./views/viewmodel.html'),
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