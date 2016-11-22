/**
 * 子模块入口
 * ml
 */

var App = angular.module('syssetting', []);

App.config(require('./router'));
App.factory('systemcenterservice', require('./service'));

App.controller('sysappmanag',require('./controllers/sysappmanag'));
App.controller('infoedit',require('./controllers/infoedit'));
App.controller('create',require('./controllers/create'));


module.exports = App;