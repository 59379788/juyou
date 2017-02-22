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


//宜卖宜卖
App.controller('should',require('./controllers/should'));
App.controller('vouchersalelist',require('./controllers/vouchersalelist'));
App.controller('vouchersalecreate',require('./controllers/vouchersalecreate'));
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
App.controller('changelist',require('./controllers/changelist'));

// 说明
App.controller('instruction',require('./controllers/instruction'));
App.controller('instructionlist',require('./controllers/instructionlist'));
App.controller('addinstruction',require('./controllers/addinstruction'));

// 评价
App.controller('comment',require('./controllers/comment'));

// 积分
App.controller('integral',require('./controllers/integral'));
App.controller('addintegralgoods',require('./controllers/addintegralgoods'));

// 商客头条
App.controller('headline',require('./controllers/headline'));
App.controller('addheadline',require('./controllers/addheadline'));

// 杀价帮
App.controller('bargain',require('./controllers/bargain'));
module.exports = App;