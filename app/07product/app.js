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
// App.controller('doccreate',require('./controllers/module'));
// App.controller('doc',require('./controllers/doc'));
// App.controller('info',require('./controllers/info'));


module.exports = App;