

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




module.exports = App;