/**
 * 子模块入口
 * dlq
 */

var App = angular.module('util', []);


App.factory('utilservice', require('./service'));


module.exports = App;