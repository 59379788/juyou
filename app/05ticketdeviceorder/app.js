/**
 * 子模块入口
 * djp
 */

var App = angular.module('ticketdeviceorder', []);

App.config(require('./router'));
App.factory('ticketdeviceorderservice', require('./service'));

App.controller('refundticket',require('./controllers/refundticket'));
App.controller('deviceorder',require('./controllers/deviceorder'));
App.controller('selfcount',require('./controllers/selfcount'));
App.controller('teamcount',require('./controllers/teamcount'));
App.controller('teamreserve',require('./controllers/teamreserve'));
App.controller('againprint',require('./controllers/againprint'));

require('../style/refundticket.css');
require('../style/deviceorder.css');

module.exports = App;