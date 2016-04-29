/**
 * 子模块入口
 * dlq
 */

var App = angular.module('statistics', []);

App.config(require('./router'));
App.factory('statisticsservice', require('./service'));

App.controller('uselist',require('./controllers/uselist'));
App.controller('statisticsviewlist',require('./controllers/viewlist'));
// App.controller('doc',require('./controllers/doc'));
// App.controller('info',require('./controllers/info'));


module.exports = App;