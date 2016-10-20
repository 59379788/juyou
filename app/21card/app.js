/**
 * 子模块入口
 * dlq
 */

var App = angular.module('card', []);

App.config(require('./router'));
App.factory('cardservice', require('./service'));
//卡池列表
App.controller('cardpoollist',require('./controllers/cardpoollist'));
//添加卡池信息、修改卡池信息
App.controller('addcardpool',require('./controllers/addcardpool'));
// 添加卡
App.controller('addcard',require('./controllers/addcard'));
App.controller('deletecard',require('./controllers/deletecard'));
//卡池详情
App.controller('releasecard',require('./controllers/releasecard'));
// 释放卡
App.controller('relief',require('./controllers/relief'));
// 修改卡信息
App.controller('resivecardinfo',require('./controllers/resivecardinfo'));
//卡产品列表
App.controller('cardproductlist',require('./controllers/cardproductlist'));
//添加，修改卡产品
App.controller('cardproduct',require('./controllers/cardproduct'));
//卡订单列表
App.controller('cardorderlist',require('./controllers/cardorderlist'));
//卡订单详情
App.controller('cardorderinfo',require('./controllers/cardorderinfo'));
//激活卡
App.controller('activationcard',require('./controllers/activationcard'));
//卡基本信息列表
App.controller('basecardlist',require('./controllers/basecardlist'));
// 记录发卡信息
App.controller('issuecard',require('./controllers/issuecard'));
// 下架弹出模态框
App.controller('offsale',require('./controllers/offsale'));
// 基本卡添加到卡池
App.controller('addtocardpool',require('./controllers/addtocardpool'));
// 设置批次号
App.controller('batchnumber',require('./controllers/batchnumber'));
// 制卡完成
App.controller('cardcomplete',require('./controllers/cardcomplete'));
// 状态改变
App.controller('unissued',require('./controllers/unissued'));
// 根据条件查询基本卡
App.controller('searchcard',require('./controllers/searchcard'));
// 拿卡人管理
App.controller('takecard',require('./controllers/takecard'));
module.exports = App;