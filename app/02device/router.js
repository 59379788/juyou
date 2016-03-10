/**
 * 子模块路由
 * dlq
 */

var router = function($urlRouterProvider, $stateProvider){

 	$stateProvider

      .state('app.devicelist', {
        url: '/devicelist',
        title: 'devicelist',
        controller: 'list',
        template: require('./views/list.html')
      })

};

module.exports = router;