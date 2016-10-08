/**
 * 子模块入口
 * dlq
 */

var App = angular.module('sale', []);

App.config(require('./router'));
App.factory('sellingservice', require('./service'));

App.controller('selling',require('./controllers/selling'));
App.controller('sellinggroup',require('./controllers/sellinggroup'));
App.controller('sellinggroupcreate',require('./controllers/sellinggroupcreate'));
App.controller('sellinggroupupdate',require('./controllers/sellinggroupupdate'));
App.controller('sellingdetail',require('./controllers/sellingdetail'));
App.controller('saledetail',require('./controllers/saledetail'));
App.controller('sellinggroupinfo',require('./controllers/sellinggroupinfo'));
App.controller('sellinggroupsignup',require('./controllers/sellinggroupsignup'));
// App.controller('doccreate',require('./controllers/module'));
// App.controller('doc',require('./controllers/doc'));
// App.controller('info',require('./controllers/info'));
App.controller('autwintic',require('./controllers/autwintic'));


module.exports = App;