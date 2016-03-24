/**
 * 子模块入口
 * dlq
 */

var App = angular.module('test', []);

App.config(require('./router'));

App.controller('cccc',require('./controller'));

module.exports = App;