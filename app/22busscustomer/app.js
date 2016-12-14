var App = angular.module('busscustomer', []);

App.config(require('./router'));
App.factory('busscustomerservice', require('./service'));

//申请列表
App.controller('skacountlist',require('./controllers/skacountlist'));
App.controller('creataccount',require('./controllers/creataccount'));
App.controller('get2',require('./controllers/get2'));
App.controller('supplierlist',require('./controllers/supplierlist'));
App.controller('supplyremark',require('./controllers/supplyremark'));
App.controller('assignauthority',require('./controllers/assignauthority'));

//一元券
App.controller('voucherorderlist',require('./controllers/voucherorderlist'));
App.controller('voucherorderinfo',require('./controllers/voucherorderinfo'));
App.controller('voucherinfo',require('./controllers/voucherinfo'));

module.exports = App;