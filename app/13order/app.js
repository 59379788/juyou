/**
 * 子模块入口
 * dlq
 */

var App = angular.module('order', []);

App.config(require('./router'));
App.factory('orderservice', require('./service'));

App.controller('orderlist',require('./controllers/list'));
App.controller('orderbycode',require('./controllers/orderbycode'));
// App.controller('doc',require('./controllers/doc'));
// App.controller('info',require('./controllers/info'));


module.exports = App;