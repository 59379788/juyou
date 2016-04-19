/**
 * 子模块入口
 * dlq
 */

var App = angular.module('member', []);

App.config(require('./router'));
App.factory('memberservice', require('./service'));

App.controller('unicomuser',require('./controllers/unicomuser'));
// App.controller('doccreate',require('./controllers/module'));
// App.controller('doc',require('./controllers/doc'));
// App.controller('info',require('./controllers/info'));


module.exports = App;