//拦截器

var App = angular.module('intercept', []);
//alert('sadsadsadasas');
App.factory('httpInjector', require('./service'));

module.exports = App;