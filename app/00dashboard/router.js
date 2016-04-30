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
     	}
      }
    })

};

module.exports = router;