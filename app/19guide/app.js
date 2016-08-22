/**
 * 子模块入口
 * dlq
 */

var App = angular.module('guide', []);

App.config(require('./router'));
App.factory('guideservice', require('./service'));

App.controller('shakedevicelist',require('./controllers/shakedevicelist'));
App.controller('shakedevice',require('./controllers/shakedevice'));
App.controller('shakeevaluatequestionlist',require('./controllers/shakeevaluatequestionlist'));
App.controller('shakeevaluatequestion',require('./controllers/shakeevaluatequestion'));



module.exports = App;