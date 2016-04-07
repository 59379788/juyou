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
        url: '/view',
        controller : 'viewcreate',
        template: require('./views/viewmodel.html'),
        resolve:{
            placecreate : function(placeservice){
                return placeservice.create();
            },
            viewcreate : function(viewservice){
                return viewservice.create();
            }
        }
      })


      .state('app.editview', {
        url: '/view/:placeid',
        controller : 'viewedit',
        template: require('./views/viewmodel.html'),
        resolve:{
            placeinfo : function(placeservice){
                return placeservice.info();
            },
            placeupdate : function(placeservice){
                return placeservice.update();
            },
            viewinfo : function(viewservice){
                return viewservice.info();
            },
            viewupdate : function(viewservice){
                return viewservice.update();
            }
        }
      })

      


};

module.exports = router;