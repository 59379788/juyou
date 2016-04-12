/**
 * 子模块入口
 * dlq
 */

var App = angular.module('account', []);

App.config(require('./router'));
App.factory('accountservice', require('./service'));

App.controller('account',require('./controllers/account'));
App.controller('createaccount',require('./controllers/createaccount'));
// App.controller('viewcreate',require('./controllers/viewcreate'));
// App.controller('info',require('./controllers/info'));


module.exports = App;