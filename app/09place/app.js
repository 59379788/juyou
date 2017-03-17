/**
 * 子模块入口
 * dlq
 */

var App = angular.module('place', []);

App.config(require('./router'));
App.factory('placeservice', require('./service'));

App.controller('createplace',require('./controllers/create'));

App.directive('placebaseinfo',require('./directives/baseinfo'));
App.directive('placeview',require('./directives/view'));
App.directive('placestore',require('./directives/store'));

module.exports = App;