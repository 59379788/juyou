/**
 * 子模块入口
 * dlq
 */

var App = angular.module('order', []);

App.config(require('./router'));
App.factory('orderservice', require('./service'));

App.controller('orderlist',require('./controllers/list'));
App.controller('orderbycode',require('./controllers/orderbycode'));
App.controller('orderticketlist',require('./controllers/orderticketlist'));
App.controller('allorderlist',require('./controllers/allorderlist'));


module.exports = App;