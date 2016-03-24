/**
 * 子模块路由
 * dlq
 */

var router = function($urlRouterProvider, $stateProvider){

 	$stateProvider

 	  .state('app.table', {
        url: '/table/:url',
        controller : 'cccc',
        template: require('./index.html')
      })

 	  

};

module.exports = router;