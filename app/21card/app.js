/**
 * 子模块入口
 * dlq
 */

var App = angular.module('card', []);

App.config(require('./router'));
App.factory('cardservice', require('./service'));

module.exports = App;