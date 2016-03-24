/**
 * 子模块路由
 * dlq
 */

var router = function($urlRouterProvider, $stateProvider){

 	$stateProvider

    .state('app.dashboard', {
      url: '/dashboard',
      title: 'Dashboard',
      template: require('./views/main.html')
    })

};

module.exports = router;