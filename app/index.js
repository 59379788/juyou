/**
 * 项目入口
 * dlq
 */


var angular = require('angular');
require('angular-ui-router');
require('angular-resource');
require('./style/app.css');



//=================[ 子模块加载 ]===========================//

require('./01ticket/app');

//=================[ 子模块加载 ]===========================//


//=================[ 常量 ]================================//
angular.module('constant', [])
  .constant('BASEURL', 'http://115.28.145.50:38986');
//=================[ 常量 ]================================//


//=================[ 主模块 ]==============================//

var App = angular.module('juyouApp', [
    'ticket',
    'ui.router'
]);

App.config(['$urlRouterProvider', '$stateProvider', 
 	function ($urlRouterProvider, $stateProvider) {

 	// 默认地址
 	$urlRouterProvider.otherwise('/app/dashboard');

 	$stateProvider
 	  .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'app/99common/app.html'
    })
    .state('app.dashboard', {
      url: '/dashboard',
      title: 'Dashboard',
      templateUrl: 'app/00dashboard/views/main.html'
    })

}]);

//==================[ 主模块 ]=============================//

