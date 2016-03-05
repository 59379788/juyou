/**
 * 子模块入口
 * dlq
 */

var App = angular.module('ticket', [
    'ui.router',
    'ngResource',
    'constant'
]);

App.config(require('./router'));
App.factory('service', require('./service'));
App.controller('check',require('./controllers/check'));


module.exports = App;