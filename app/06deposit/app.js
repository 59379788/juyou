/**
 * 预存子模块入口
 * dlq
 */

var App = angular.module('deposit', []);

App.config(require('./router'));
App.factory('depositservice', require('./service'));


App.controller('depositlist',require('./controllers/list'));
App.controller('createdeposit',require('./controllers/create'));
App.controller('recharge',require('./controllers/recharge'));
App.controller('trackinfo',require('./controllers/trackinfo'));
App.controller('depositupdate',require('./controllers/update'));


module.exports = App;