/**
 * 子模块入口
 * dlq
 */

var App = angular.module('card', []);

App.config(require('./router'));
App.factory('cardservice', require('./service'));
//卡池列表
App.controller('cardpoollist',require('./controllers/cardpoollist'));
//添加卡池信息
App.controller('addcardpool',require('./controllers/addcardpool'));
// 添加卡
App.controller('addcard',require('./controllers/addcard'));
App.controller('deletecard',require('./controllers/deletecard'));
//释放卡
App.controller('releasecard',require('./controllers/releasecard'));
<<<<<<< HEAD
// 修改卡信息
App.controller('resivecardinfo',require('./controllers/resivecardinfo'));
=======
//卡产品列表
App.controller('cardproductlist',require('./controllers/cardproductlist'));
//添加，修改卡产品
App.controller('cardproduct',require('./controllers/cardproduct'));

>>>>>>> 42f0f36ab58d0bae98f8e07399ee85c0a29de980

module.exports = App;