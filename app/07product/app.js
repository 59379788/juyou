/**
 * 子模块入口
 * dlq
 */

var App = angular.module('product', []);

App.config(require('./router'));
App.factory('productservice', require('./service'));

App.controller('tkttype',require('./controllers/tkttype'));
App.controller('tkttypecreate',require('./controllers/tkttypecreate'));
App.controller('tkttypeedit',require('./controllers/tkttypeedit'));
App.controller('tkttypeattr',require('./controllers/tkttypeattr'));
App.controller('tkttypeattrcreate',require('./controllers/tkttypeattrcreate'));
App.controller('tkttypeattredit',require('./controllers/tkttypeattredit'));
App.controller('tktgoods',require('./controllers/tktgoods'));
App.controller('tktskgoods',require('./controllers/tktskgoods'));
App.controller('edittktskgoods',require('./controllers/edittktskgoods'));
App.controller('tktgoodscreate',require('./controllers/tktgoodscreate'));
App.controller('tktgoodsupdate',require('./controllers/tktgoodsupdate'));
App.controller('tktsale',require('./controllers/tktsale'));
App.controller('tktsalecreate',require('./controllers/tktsalecreate'));
App.controller('tktsaleupdate',require('./controllers/tktsaleupdate'));
App.controller('salecategory',require('./controllers/salecategory'));

App.controller('salecategorycreate',require('./controllers/salecategorycreate'));
App.controller('distribution',require('./controllers/distribution'));
App.controller('insurance',require('./controllers/insurance'));
App.controller('awardpolicy',require('./controllers/awardpolicy'));
App.controller('middlebusiness',require('./controllers/middlebusiness'));


App.controller('newproduct',require('./controllers/newproduct'));
App.directive('productbaseinfo',require('./directives/baseinfo'));
App.directive('producttickettype',require('./directives/tickettype'));
App.directive('productaffirm',require('./directives/affirm'));
App.directive('productintegral',require('./directives/integral'));

module.exports = App;