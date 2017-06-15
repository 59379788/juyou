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
App.controller('backTicketApply',require('./controllers/backTicketApply'));
App.controller('backTickketApplyDetails',require('./controllers/backTickketApplyDetails'));


App.controller('newproduct',require('./controllers/newproduct'));
App.controller('productInfo',require('./controllers/productInfo'));
App.controller('splist',require('./controllers/splist'));
App.controller('aplist',require('./controllers/aplist'));
App.directive('productbaseinfo',require('./directives/baseinfo'));
App.directive('producttickettype',require('./directives/tickettype'));
App.directive('productaffirm',require('./directives/affirm'));
App.directive('productintegral',require('./directives/integral'));
App.directive('productflashsale',require('./directives/flashsale'));
App.directive('productshareprofit',require('./directives/shareprofit'));
App.directive('restrictrule',require('./directives/restrictrule'));
App.directive('imgtextinfo',require('./directives/imgtextinfo'));
App.directive('govsubsidy',require('./directives/govsubsidy'));
App.directive('juyousubsidy',require('./directives/juyousubsidy'));
App.directive('priceCalendar',require('./directives/priceCalendar'));
App.directive('priceSetting',require('./directives/priceSetting'));

App.directive('productinfobaseinfo',require('./directives/productinfobaseinfo'));
App.directive('productinfotickettype',require('./directives/productinfotickettype'));
App.directive('productinfoaffirm',require('./directives/productinfoaffirm'));
App.directive('productinfointegral',require('./directives/productinfointegral'));
App.directive('productinfoflashsale',require('./directives/productinfoflashsale'));
App.directive('productinfoshareprofit',require('./directives/productinfoshareprofit'));
App.directive('productinforestrictrule',require('./directives/productinforestrictrule'));
App.directive('productinfoimgtextinfo',require('./directives/productinfoimgtextinfo'));
App.directive('productinfogovsubsidy',require('./directives/productinfogovsubsidy'));
App.directive('productinfojuyousubsidy',require('./directives/productinfojuyousubsidy'));
App.directive('productinfoPriceCalendar',require('./directives/productinfoPriceCalendar'));


App.controller('skprofit',require('./controllers/skprofit'));
App.controller('updatePriceCalendar',require('./controllers/updatePriceCalendar'));
App.controller('customPriceCalendar',require('./controllers/customPriceCalendar'));


//预约列表
App.controller('appoint',require('./controllers/appointmentlist'));
App.controller('setAppoint',require('./controllers/setappointment'));
App.directive('appointBaseinfo',require('./directives/appointmentbaseinfo'));
App.directive('appointScreening',require('./directives/appointmentscreening'));
App.directive('appointTicket',require('./directives/appointmentticket'));
App.controller('customerList',require('./controllers/customerlist'));

module.exports = App;