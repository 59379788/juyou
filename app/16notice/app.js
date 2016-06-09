/**
 * 子模块入口
 * dlq
 */

var App = angular.module('notice', []);

App.config(require('./router'));
App.factory('noticeservice', require('./service'));

App.controller('noticelist',require('./controllers/noticelist'));
App.controller('noticeedit',require('./controllers/noticeedit'));
App.controller('noticecreate',require('./controllers/noticecreate'));


module.exports = App;