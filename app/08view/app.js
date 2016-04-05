/**
 * 子模块入口
 * dlq
 */

var App = angular.module('view', []);

App.config(require('./router'));
App.factory('viewservice', require('./service'));

App.controller('viewlist',require('./controllers/viewlist'));
App.controller('createview',require('./controllers/createview'));
// App.controller('doc',require('./controllers/doc'));
// App.controller('info',require('./controllers/info'));


module.exports = App;