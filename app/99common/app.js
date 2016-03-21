/**
 * 子模块入口
 * dlq
 */

var App = angular.module('common', []);

App.config(require('./router'));

App.factory('commonservice', require('./service'));

App.controller('appcontroller',require('./controllers/app'));
// App.controller('doccreate',require('./controllers/module'));
// App.controller('doc',require('./controllers/doc'));
// App.controller('info',require('./controllers/info'));


module.exports = App;