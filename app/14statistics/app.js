/**
 * 子模块入口
 * dlq
 */

var App = angular.module('statistics', []);

App.config(require('./router'));
App.factory('statisticsservice', require('./service'));

App.factory('Excel', function ($window) {
        var uri = 'data:application/vnd.ms-excel;base64,',
            template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
            base64 = function (s) { return $window.btoa(unescape(encodeURIComponent(s))); },
            format = function (s, c) { return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; }) };
        return {
            tableToExcel: function (tableId, worksheetName) {
                var table = $(tableId),
                    ctx = { worksheet: worksheetName, table: table.html() },
                    href = uri + base64(format(template, ctx));
                return href;
            }
        };
});

App.controller('uselist',require('./controllers/uselist'));
App.controller('statisticsviewlist',require('./controllers/viewlist'));
App.controller('statisticssale',require('./controllers/statisticssale'));
App.controller('statisticscompanylist',require('./controllers/statisticscompanylist'));
App.controller('statisticsgrouplist',require('./controllers/statisticsgrouplist'));
App.controller('statisticsgroupjqlist',require('./controllers/statisticsgroupjqlist'));
App.controller('useddetail',require('./controllers/useddetail'));
App.controller('statisticsdetail',require('./controllers/statisticsdetail'));
App.controller('distributor',require('./controllers/distributor'));
App.controller('staticonline',require('./controllers/staticonline'));
App.controller('countByCompny',require('./controllers/countByCompny'));


module.exports = App;