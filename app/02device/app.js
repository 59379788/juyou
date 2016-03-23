/**
 * 子模块入口
 * dlq
 */

var App = angular.module('device', []);

App.config(require('./router'));
App.factory('deviceservice', require('./service'));
App.controller('list',require('./controllers/list'));
App.controller('tickettypelist',require('./controllers/tickettypelist'));
App.controller('devicetktlist',require('./controllers/devicetktlist'));
App.controller('configurationticket',require('./controllers/configurationticket'));
App.controller('devicetktedit',require('./controllers/devicetktedit'));


module.exports = App;