/**
 * 子模块入口
 * dlq
 */

var App = angular.module('line', []);

App.config(require('./router'));
App.factory('lineservice', require('./service'));

App.controller('linelist',require('./controllers/linelist'));
App.controller('createline',require('./controllers/createline'));
App.controller('editline',require('./controllers/editline'));
App.controller('lineinfo',require('./controllers/lineinfo'));
App.controller('group',require('./controllers/group'));
App.controller('grouplist',require('./controllers/grouplist'));
App.controller('editgroup',require('./controllers/editgroup'));
App.controller('groupinfo',require('./controllers/groupinfo'));

module.exports = App;