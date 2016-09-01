/**
 * 子模块入口
 * dlq
 */

var App = angular.module('docking', []);

App.config(require('./router'));
App.factory('dockingservice', require('./service'));

App.controller('corridorproductlist',require('./controllers/corridorproductlist'));
App.controller('corridorproductdetail',require('./controllers/corridorproductdetail'));
App.controller('qunabackticketapplylist',require('./controllers/qunabackticketapplylist'));
App.controller('qunaexamineback',require('./controllers/qunaexamineback'));
App.controller('qunabackticketapplyinfo',require('./controllers/qunabackticketapplyinfo'));
App.controller('huaxiaplproduct',require('./controllers/huaxiaplproduct'));
App.controller('huaxiaplorder',require('./controllers/huaxiaplorder'));


module.exports = App;