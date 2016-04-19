/**
 * 子模块入口
 * dlq
 */

var App = angular.module('place', []);

App.config(require('./router'));
App.factory('placeservice', require('./service'));

//App.controller('createplace',require('./controllers/createplace'));
// App.controller('doccreate',require('./controllers/module'));
// App.controller('doc',require('./controllers/doc'));
// App.controller('info',require('./controllers/info'));


module.exports = App;