/**
 * 子模块路由
 * djp
 */

var router = function($urlRouterProvider, $stateProvider){

 	$stateProvider

 	  .state('app.createnotice', {
        url: '/noticelist',
        controller : 'noticelist',
        template: require('./notice/noticelist.html'),
        resolve:{
            mylist : function(noticeservice){
                return noticeservice.mylist();
            },
            update : function(noticeservice){
                return noticeservice.update();
            }
        }
      })

      /*.state('app.createview', {
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
      })*/

      


};

module.exports = router;