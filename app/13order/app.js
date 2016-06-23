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
App.controller('grouplist',require('./controllers/grouplist'));
App.controller('groupjqlist',require('./controllers/groupjqlist'));
App.controller('grouplistinfo',require('./controllers/grouplistinfo'));
App.controller('groupalllist',require('./controllers/groupalllist'));
App.controller('orderinfo',require('./controllers/orderinfo'));
App.controller('backnum',require('./controllers/backnum'));


module.exports = App;