/**
 * 子模块入口
 * dlq
 */

var App = angular.module('view', []);

App.config(require('./router'));
App.factory('viewservice', require('./service'));

App.controller('viewlist',require('./controllers/viewlist'));
App.controller('viewedit',require('./controllers/viewedit'));
App.controller('viewcreate',require('./controllers/viewcreate'));



App.controller('storelist',require('./controllers/storelist'));
// App.controller('info',require('./controllers/info'));


module.exports = App;