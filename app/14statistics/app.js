/**
 * 子模块入口
 * dlq
 */

var App = angular.module('statistics', []);

App.config(require('./router'));
App.factory('statisticsservice', require('./service'));

App.controller('uselist',require('./controllers/uselist'));
App.controller('statisticsviewlist',require('./controllers/viewlist'));
App.controller('statisticssale',require('./controllers/statisticssale'));
App.controller('statisticscompanylist',require('./controllers/statisticscompanylist'));
App.controller('statisticsgrouplist',require('./controllers/statisticsgrouplist'));
App.controller('statisticsgroupjqlist',require('./controllers/statisticsgroupjqlist'));
App.controller('useddetail',require('./controllers/useddetail'));
App.controller('statisticsdetail',require('./controllers/statisticsdetail'));
App.controller('distributor',require('./controllers/distributor'));
App.controller('staticonline',require('./controllers/staticonline'));
App.controller('countByCompny',require('./controllers/countByCompny'));


module.exports = App;