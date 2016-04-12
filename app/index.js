/**
 * 项目入口
 * dlq
 */


var angular = require('angular');
require('angular-resource');
require('angular-ui-router');
require('angular-ui-bootstrap');
require('angular-file-upload');
require('angular-ui-tree');

require('../node_modules/angular-ui-tree/dist/angular-ui-tree.css');
require('./style/app.css');



//=================[ 权限模块加载 ]===========================//

(require('./04permission/boot'))(jQuery);

//=================[ 权限模块加载 ]===========================//



//=================[ 子模块加载 ]===========================//

require('./00dashboard/app');
require('./01ticket/app');
require('./02device/app');
require('./03doc/app');
require('./04permission/app');
require('./05ticketdeviceorder/app');
require('./06deposit/app');
require('./07product/app');
require('./08view/app');
require('./09place/app');
require('./10account/app');



require('./97intercept/app');   //拦截器
require('./98test/app');
require('./99common/app');

//=================[ 子模块加载 ]===========================//


//=================[ 常量 ]================================//
angular.module('constant', [])
  .constant('BASEURL', 'http://115.28.145.50:38986')
  //.constant('BASEURL38985', 'http://sit.juyouhx.com');
  .constant('BASEURL38985', '')
  //权限
  .constant('SYS', '')
  //分页默认每页显示几条
  .constant('ITEMS_PERPAGE', 10)

  ;
//=================[ 常量 ]================================//


//=================[ 主模块 ]==============================//

var App = angular.module('juyouApp', [
    'dashboard',
    'ticket',
    'device',
    'doc',
    'ticketdeviceorder',
    'deposit',
    'product',
    'view',
    'place',
    'account',
    'test',
    'common',
    'permission',
    'intercept',
    'ui.bootstrap',
    'ui.router',
    'ngResource',
    'angularFileUpload',
    'ui.tree',
    'constant'
]);

App.config(['$urlRouterProvider', '$stateProvider', 
 	function ($urlRouterProvider, $stateProvider) {
 	// 默认地址
 	$urlRouterProvider.otherwise('/app/dashboard');

}])

//拦截器
.config(function($httpProvider) {
  $httpProvider.interceptors.push('httpInjector');
})

;

//==================[ 主模块 ]=============================//
