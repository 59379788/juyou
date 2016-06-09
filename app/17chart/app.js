/**
 * 子模块入口
 * dlq
 */

var App = angular.module('chart', []);

App.config(require('./router'));
App.factory('chartservice', require('./service'));


App.controller('salechart',require('./controllers/salechart'));
// App.controller('orderbycode',require('./controllers/orderbycode'));
// App.controller('orderticketlist',require('./controllers/orderticketlist'));
// App.controller('allorderlist',require('./controllers/allorderlist'));
// App.controller('grouplist',require('./controllers/grouplist'));
// App.controller('groupalllist',require('./controllers/groupalllist'));
// App.controller('orderinfo',require('./controllers/orderinfo'));


module.exports = App;