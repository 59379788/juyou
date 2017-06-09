/**
 * 子模块入口
 * dlq
 */

var App = angular.module('test', []);

App.config(require('./router'));

App.controller('cccc',require('./controller'));
App.controller('testProductList',require('./testProductList'));

module.exports = App;