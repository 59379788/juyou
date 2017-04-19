

var App = angular.module('ylb', []);

App.config(require('./router'));

//service
App.factory('ylbservice', require('./service'));

//Controllers
App.controller('categorylist', require('./controllers/categorylist'));
App.controller('articallist', require('./controllers/articallist'));
App.controller('dicclist', require('./controllers/dicclist'));
App.controller('addYlbCategory', require('./controllers/addYlbCategory'));
App.controller('addYlbDicc', require('./controllers/addYlbDicc'));
App.controller('addYlbArtical', require('./controllers/addYlbArtical'));




module.exports = App;