/**
 * 子模块入口
 * dlq
 */

var App = angular.module('custservice', []);

App.config(require('./router'));
App.factory('custservice', require('./service'));

App.controller('userinfo',require('./controllers/userinfo'));
App.controller('cardA',require('./controllers/cardA'));
App.controller('cardB',require('./controllers/cardB'));
App.controller('infoticket',require('./controllers/infoticket'));
App.controller('edituserinfo',require('./controllers/edituserinfo'));
App.controller('redpackage',require('./controllers/redpackage'));
App.controller('orderlist',require('./controllers/orderlist'));


module.exports = App;