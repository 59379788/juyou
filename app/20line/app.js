/**
 * 子模块入口
 * dlq
 */

var App = angular.module('line', []);

App.config(require('./router'));
App.factory('lineservice', require('./service'));

App.controller('20linelist',require('./controllers/linelist'));
App.controller('20createline',require('./controllers/createline'));
App.controller('20editline',require('./controllers/editline'));
App.controller('20lineinfo',require('./controllers/lineinfo'));
App.controller('20group',require('./controllers/group'));
App.controller('20grouplist',require('./controllers/grouplist'));
App.controller('20editgroup',require('./controllers/editgroup'));
App.controller('20groupinfo',require('./controllers/groupinfo'));

module.exports = App;