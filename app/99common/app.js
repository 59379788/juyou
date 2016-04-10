/**
 * 子模块入口
 * dlq
 */

var App = angular.module('common', []);

App.config(require('./router'));

App.factory('commonservice', require('./service'));

App.controller('appcontroller',require('./controllers/app'));

module.exports = App;