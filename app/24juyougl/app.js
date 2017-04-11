var App = angular.module('juyougl', []);

App.config(require('./router'));
App.factory('juyouglservice', require('./service'));

//列表
App.controller('juyouappviewlist',require('./controllers/juyouappviewlist'));
App.controller('addplacehot',require('./controllers/addplacehot'));






module.exports = App;