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
App.controller('usedorderlist',require('./controllers/usedorderlist'));
App.controller('usedorderinfo',require('./controllers/usedorderinfo'));

// 爱心义卖 易卖
App.controller('friendly',require('./controllers/friendly'));
App.controller('change',require('./controllers/change'));
App.controller('onshelf',require('./controllers/onshelf'));
App.controller('loveactionapply',require('./controllers/loveactionapply'));
App.controller('applyuserlist',require('./controllers/applyuserlist'));
App.controller('lovedonateapply',require('./controllers/lovedonateapply'));
App.controller('goodsforyou',require('./controllers/goodsforyou'));
App.controller('loveactionlist',require('./controllers/loveactionlist'));
App.controller('addgoodtype',require('./controllers/addgoodtype'));
App.controller('charitylist',require('./controllers/charitylist'));
App.controller('donatelist',require('./controllers/donatelist'));
App.controller('expandlist',require('./controllers/expandlist'));

// 说明
App.controller('instruction',require('./controllers/instruction'));
App.controller('instructionlist',require('./controllers/instructionlist'));
App.controller('addinstruction',require('./controllers/addinstruction'));

// 评价
App.controller('comment',require('./controllers/comment'));



module.exports = App;