

var App = angular.module('ylb', []);

App.config(require('./router'));

//service
App.factory('ylbservice', require('./service'));

//Controllers
App.controller('categorylist', require('./controllers/categorylist'));
App.controller('viewarticallist', require('./controllers/viewarticallist'));
App.controller('dicclist', require('./controllers/dicclist'));
App.controller('addYlbCategory', require('./controllers/addYlbCategory'));
App.controller('addYlbDicc', require('./controllers/addYlbDicc'));
App.controller('addViewArtical', require('./controllers/addViewArtical'));
App.controller('categoryTree', require('./controllers/categoryTree'));
App.controller('trafficarticallist', require('./controllers/trafficarticallist'));
App.controller('addTrafficArtical', require('./controllers/addTrafficArtical'));
App.controller('otherarticallist', require('./controllers/otherarticallist'));
App.controller('foodlist', require('./controllers/foodlist'));
App.controller('accommodationlist', require('./controllers/accommodationlist'));
App.controller('leisurelist', require('./controllers/leisurelist'));
App.controller('shoplist', require('./controllers/shoplist'));
App.controller('travellist', require('./controllers/travellist'));
App.controller('addFoodArtical', require('./controllers/addFoodArtical'));
App.controller('addAccommodationArtical', require('./controllers/addAccommodationArtical'));
App.controller('addLeisureArtical', require('./controllers/addLeisureArtical'));
App.controller('addShopArtical', require('./controllers/addShopArtical'));
App.controller('addTravelArtical', require('./controllers/addTravelArtical'));
App.controller('historylist', require('./controllers/historylist'));
App.controller('addHistoryArtical', require('./controllers/addHistoryArtical'));





module.exports = App;