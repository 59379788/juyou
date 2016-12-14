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


App.controller('friendly',require('./controllers/friendly'));
App.controller('change',require('./controllers/change'));
App.controller('onshelf',require('./controllers/onshelf'));
App.controller('loveactionapply',require('./controllers/loveactionapply'));
App.controller('applyuserlist',require('./controllers/applyuserlist'));
App.controller('lovedonateapply',require('./controllers/lovedonateapply'));
App.controller('goodsforyou',require('./controllers/goodsforyou'));
App.controller('loveactionlist',require('./controllers/loveactionlist'));
App.controller('addgoodtype',require('./controllers/addgoodtype'));

module.exports = App;