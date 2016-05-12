/**
 * 子模块入口
 * dlq
 */

var App = angular.module('dashboard', [
    'ui.router',
    'ngResource',
    'constant'
]);

App.config(require('./router'));
App.factory('dashboardservice', require('./service'));
App.controller('dashboard',require('./controllers/dashboard'));

App.controller('noticeinfo',require('./controllers/noticeinfo'));

App.controller('chart',require('./controllers/chart'));



module.exports = App;