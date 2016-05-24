/**
 * 子模块路由
 * dlq
 */

var router = function($urlRouterProvider, $stateProvider){

 	$stateProvider

    .state('app.dashboard', {
      url: '/dashboard',
      controller : 'dashboard',
      template: require('./views/main.html'),
      resolve : {
         noticelist:  function(dashboardservice){
           return dashboardservice.noticelist();
         },
         noticeinfo:  function(dashboardservice){
           return dashboardservice.noticeinfo();
         },
         userinfo:  function(dashboardservice){
          return dashboardservice.userinfo;
         },
         getSellerInfoByCode : function(depositservice){
          return depositservice.getSellerInfoByCode();
         }
      // controller : 'chart',
      // template: require('./views/chart.html'),
      // resolve : {
      //   orderstatisticslist : function(statisticsservice){
      //       return statisticsservice.orderstatisticslist();
      //   },
      //   getDate : function(utilservice){
      //       return utilservice.getDate;
      //   },
      //   dataScope : function(utilservice){
      //       return utilservice.dataScope;
      //   },
      //   viewlist : function(viewservice){
      //       return viewservice.slist;
      //   },
      //   salelist : function(productservice){
      //       return productservice.salelist();
      //   }
        // noticelist:  function(dashboardservice){
        //   return dashboardservice.noticelist();
        // },
        // noticeinfo:  function(dashboardservice){
        //   return dashboardservice.noticeinfo();
        // },
        // userinfo:  function(dashboardservice){
        //   return dashboardservice.userinfo;
        // }
      }
      
    })

};

module.exports = router;