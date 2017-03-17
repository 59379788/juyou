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


// ------------ 富文本编辑器 ----------------------//
//require('../node_modules/textangular/dist/textAngular-rangy.min');
require('../node_modules/textangular/dist/textAngular-sanitize.min');
require('../node_modules/textangular/dist/textAngular.min');
require('../node_modules/textangular/dist/textAngular.umd');
require('../node_modules/textangular/dist/textAngularSetup');
require('../node_modules/textangular/dist/textAngular.css');
// ------------ 富文本编辑器 ----------------------//


// ------------ 图表 ----------------------//
require('../node_modules/angular-chart.js/dist/angular-chart.min');
//require('../node_modules/angular-chart.js/dist/angular-chart.min.css');
// ------------ 图表 ----------------------//


require('../node_modules/angular-ui-tree/dist/angular-ui-tree.css');
require('./style/app.css');



//=================[ 权限模块加载 ]===========================//

(require('./04permission/boot'))(jQuery);

//=================[ 权限模块加载 ]===========================//


// ui-select start
require('ui-select');
require('../node_modules/ui-select/dist/select.min.css');
// ui-select end

// frapontillo.bootstrap-switch 依赖 bootstrap-switch
require('angular-bootstrap-switch');

// bootstrap-switch
require('bootstrap-switch');
require('../node_modules/bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.css');

// 日期汉化
require('../libs/angular-locale_zh');

// 弹出框
require('angularjs-toaster');
require('../node_modules/angularjs-toaster/toaster.min.css');
// require('angular-animate');


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
require('./11member/app');
require('./12sale/app');
require('./13order/app');
require('./14statistics/app');
require('./15custservice/app');
require('./16notice/app');
require('./17chart/app');
require('./18docking/app');
require('./19guide/app');
require('./20line/app');
require('./22busscustomer/app');
require('./21card/app');
require('./23syssetting/app');
require('./96util/app');
require('./97intercept/app');   //拦截器
require('./98test/app');
require('./99common/app');

//=================[ 子模块加载 ]===========================//


//=================[ 常量 ]================================//
angular.module('constant', [])
  .constant('BASEURL', '')
  //.constant('BASEURL', 'http://115.28.189.180:38987')
  //.constant('BASEURL', 'http://www.juyouhx.com')
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
    'member',
    'sale',
    'order',
    'statistics',
    'custservice',
    'notice',
    'chart',
    'docking',
    'guide',
    'line',
    'card',
    'busscustomer',
    'syssetting',
    'util',
    'test',
    'common',
    'permission',
    'intercept',
    'ui.bootstrap',
    'ui.router',
    'ngResource',
    'angularFileUpload',
    'ui.tree',
    'textAngular',
    'chart.js',
    'constant',
    'ui.select',
    'ngSanitize',
    'frapontillo.bootstrap-switch',
    'toaster', 
    // 'ngAnimate',
]);

App.config(['$urlRouterProvider', '$stateProvider', 
 	function ($urlRouterProvider, $stateProvider) {
 	// 默认地址
 	$urlRouterProvider.otherwise('/app/dashboard');

}])

//拦截器
.config(function($httpProvider, ChartJsProvider) {
  $httpProvider.interceptors.push('httpInjector');

  // Configure all charts
  ChartJsProvider.setOptions({
    colours: ['#97BBCD', '#DCDCDC', '#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
    responsive: true
  });
  // Configure all doughnut charts
  ChartJsProvider.setOptions('Doughnut', {
    animateScale: true
  });

})


//html过滤器
//用法<p class="form-control-static" ng-bind-html="viewobj.book_info | trustHtml"/>
.filter('trustHtml', function ($sce) {
    return function (input) {
        return $sce.trustAsHtml(input);
    }
})

//挂数据
//key1数据相等挂key2的数据
.filter('arrfilter', function () {
    return function (input, key1, key2, value) {
        var output = 0;

        if(!angular.isArray(input)) return output;

        for(var i = 0, j = input.length; i < j; i++)
        {
            var tmp = input[i];
            if(tmp[key1] == value)
            {
              output = tmp[key2];
            }
        }
        return output;
    };
})

;

//==================[ 主模块 ]=============================//
