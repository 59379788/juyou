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
        //template: require('../99common/views/table.html'),
        resolve:{
            destoryDetail : function(statisticsservice){
                return statisticsservice.destoryDetail();
            },
            getDate : function(utilservice){
                return utilservice.getDate;
            }
        }
        
      })



      .state('app.statisticsviewlist', {
        url: '/statisticsviewlist',
        controller : 'statisticsviewlist',
        template: require('./views/viewlist.html'),
        //template: require('../99common/views/table.html'),
        resolve:{
            viewdestorystatisticlist : function(statisticsservice){
                return statisticsservice.viewdestorystatisticlist();
            },
            getDate : function(utilservice){
                return utilservice.getDate;
            }
        }
        
      })

      


};

module.exports = router;