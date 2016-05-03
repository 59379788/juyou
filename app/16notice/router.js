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

      .state('app.noticecreate', {
        url: '/notice',
        controller : 'noticecreate',
        template: require('./notice/noticemodel.html'),
        resolve:{
            create : function(noticeservice){
                return noticeservice.create();
            }
        }
      })


      .state('app.noticeedit', {
        url: '/notice/:id',
        controller : 'noticeedit',
        template: require('./notice/noticemodel.html'),
        resolve:{
            myinfo : function(noticeservice){
                return noticeservice.myinfo();
            },
            update : function(noticeservice){
                return noticeservice.update();
            }
        }
      })

      


};

module.exports = router;