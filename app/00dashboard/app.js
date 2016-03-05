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
//App.factory('service', require('./service'));



module.exports = App;