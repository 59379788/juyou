/**
 * 子模块入口
 * dlq
 */

var App = angular.module('account', []);

App.config(require('./router'));
App.factory('accountservice', require('./service'));

App.controller('account',require('./controllers/account'));
App.controller('createaccount',require('./controllers/createaccount'));
App.controller('changepassword',require('./controllers/changepassword'));
App.controller('editaccount',require('./controllers/editaccount'));
App.controller('mechanism',require('./controllers/mechanism'));


module.exports = App;