/**
 * 预存子模块入口
 * dlq
 */

var App = angular.module('deposit', []);

App.config(require('./router'));
App.factory('depositservice', require('./service'));

// App.controller('name',require('./controllers/name'));
// App.controller('doccreate',require('./controllers/module'));
// App.controller('doc',require('./controllers/doc'));
// App.controller('info',require('./controllers/info'));
App.controller('depositlist',require('./controllers/list'));
App.controller('createdeposit',require('./controllers/list'));


module.exports = App;