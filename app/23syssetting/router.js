/**
 * 子模块路由
 * ml
 */
var router = function($urlRouterProvider, $stateProvider){

 	$stateProvider

       //系统应用管理
      .state('app.sysappmanag', {
         url: '/sysappmanag',
         controller : 'sysappmanag',
         template: require('./views/sysappmanag.html'),
         resolve:{
            sysappsave : function(systemcenterservice){
               return systemcenterservice.sysappsave();
            },
            sysappdelete : function(systemcenterservice){
               return systemcenterservice.sysappdelete();
            },
            sysappgetById : function(systemcenterservice){
               return systemcenterservice.sysappgetById();
            },
            sysappgetUrlList : function(systemcenterservice){
               return systemcenterservice.sysappgetUrlList();
            },
            userinfo : function(dashboardservice){
               return dashboardservice.userinfo();
            }
         }
      })      

       //修改应用信息
      .state('app.infoedit', {
         url: '/infoedit/:id',
         controller : 'infoedit',
         template: require('./views/infoedit.html'),
         resolve:{
            sysappsave : function(systemcenterservice){
               return systemcenterservice.sysappsave();
            },
            sysappgetById : function(systemcenterservice){
               return systemcenterservice.sysappgetById();
            },
            userinfo : function(dashboardservice){
               return dashboardservice.userinfo();
            }
         }
      })       

       //新增应用
      .state('app.create', {
         url: '/create',
         controller : 'create',
         template: require('./views/infomodel.html'),
         resolve:{
            sysappsave : function(systemcenterservice){
               return systemcenterservice.sysappsave();
            },
            userinfo : function(dashboardservice){
               return dashboardservice.userinfo();
            }
         }
      })      
}

module.exports = router;