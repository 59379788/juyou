/**
 * 子模块入口
 * dlq
 */

var App = angular.module('docking', []);

App.config(require('./router'));
App.factory('dockingservice', require('./service'));

App.controller('corridorproductlist',require('./controllers/corridorproductlist'));
App.controller('corridorproductdetail',require('./controllers/corridorproductdetail'));
// App.controller('info',require('./controllers/info'));


module.exports = App;