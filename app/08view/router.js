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
            viewupdate : function(viewservice){
                return viewservice.update();
            },
            list : function(viewservice){
                return viewservice.list();
            }
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
            },
            city : function(viewservice){
                return viewservice.city;
            }
        }
      })


      // .state('app.editview', {
      //   url: '/view/:placeid',
      //   controller : 'viewedit',
      //   template: require('./views/viewmodel.html'),
      //   resolve:{
      //       placeinfo : function(placeservice){
      //           return placeservice.info();
      //       },
      //       placeupdate : function(placeservice){
      //           return placeservice.update();
      //       },
      //       viewinfo : function(viewservice){
      //           return viewservice.info();
      //       },
      //       viewupdate : function(viewservice){
      //           return viewservice.update();
      //       },
      //       city : function(viewservice){
      //           return viewservice.city;
      //       }
      //   }
      // })



      //商户列表
      .state('app.storelist', {
        url: '/storelist.html',
        controller : 'storelist',
        template: require('./views/storelist.html'),
        resolve:{
            viewupdate : function(viewservice){
                return viewservice.update();
            },
            list : function(viewservice){
                return viewservice.list();
            },
            updateplacemerchant : function(viewservice){
                return viewservice.updateplacemerchant();
            },
            merchantinfo : function(viewservice){
                return viewservice.merchantinfo();
            },
            gogosort : function(viewservice){
                return viewservice.gogosort();
            }
        }
      })

      


};

module.exports = router;