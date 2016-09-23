/**
 * 子模块入口
 * dlq
 */

var App = angular.module('ticket', []);

App.config(require('./router'));
App.factory('ticketservice', require('./service'));

App.controller('login',require('./controllers/login'));
App.controller('check',require('./controllers/check'));
App.controller('ticketinfo',require('./controllers/ticketinfo'));
App.controller('testtest',require('./controllers/testtest'));


module.exports = App;