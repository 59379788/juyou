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
App.controller('shakeevaluategrouplist',require('./controllers/shakeevaluategrouplist'));
App.controller('shakeevaluatetourist',require('./controllers/shakeevaluatetourist'));
App.controller('shakequestioninfo',require('./controllers/shakequestioninfo'));
App.controller('shakeanswers',require('./controllers/shakeanswers'));
App.controller('evaluatechart',require('./controllers/evaluatechart'));
App.controller('evaluatechart1',require('./controllers/evaluatechart1'));
App.controller('evaluatechart2',require('./controllers/evaluatechart2'));
App.controller('evaluatechart3',require('./controllers/evaluatechart3'));

module.exports = App;