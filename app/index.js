/**
 * 项目入口
 * dlq
 */




var angular = require('angular');
require('angular-resource');
require('angular-ui-router');
require('angular-ui-bootstrap');
require('./style/app.css');


//=================[ 权限模块加载 ]===========================//

(require('./04permission/boot'))();

//=================[ 权限模块加载 ]===========================//



//=================[ 子模块加载 ]===========================//

require('./00dashboard/app');
require('./01ticket/app');
require('./02device/app');
require('./03doc/app');
require('./04permission/app');

//=================[ 子模块加载 ]===========================//


//=================[ 常量 ]================================//
angular.module('constant', [])
  .constant('BASEURL', 'http://115.28.145.50:38986')
  .constant('BASEURL38985', 'http://sit.juyouhx.com');
//=================[ 常量 ]================================//


//=================[ 主模块 ]==============================//

var App = angular.module('juyouApp', [
    'dashboard',
    'ticket',
    'device',
    'doc',
    'permission',
    'ui.bootstrap',
    'ui.router',
    'ngResource',
    'constant'
]);

App.config(['$urlRouterProvider', '$stateProvider', 
 	function ($urlRouterProvider, $stateProvider) {

 	// 默认地址
 	$urlRouterProvider.otherwise('/app/dashboard');

 	$stateProvider
 	  .state('app', {
      url: '/app',
      abstract: true,
      template : require('./99common/app.html')
    })

}]);

//==================[ 主模块 ]=============================//
