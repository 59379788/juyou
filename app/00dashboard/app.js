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


module.exports = App;