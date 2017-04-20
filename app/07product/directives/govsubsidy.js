module.exports = function ($resource, $state, $http, $q) {

    return {

        restrict: 'AE',
        template: require('../views/govsubsidy.html'),
        replace: true,
        scope: {
            'saleobj': '=',
            'util': '=',
        },
        link: function (scope, elements, attrs) {

            scope.govobj = {};
            scope.isExistFlag = true;
            scope.code = null;

            scope.load = function () {
                $resource('/api/as/tc/sale/info', {}, {}).save({ 'id': scope.saleobj.id }, function (res) {
                    if (res.errcode !== 0) {
                        alert(res.errmsg)
                    }
                    scope.code = res.data.code;
                    scope.getgovsubsidy();
                });
            }
            scope.load()

            //查询政府补贴
            scope.getgovsubsidy = function () {
                $resource('/api/as/tc/salegovsubsidy/info', {}, {}).save({ 'govsubsidy_sale_code': scope.code }, function (res) {

                    if (res.errcode === 10003) {
                        scope.isExistFlag = false;
                    } else {
                        scope.govobj = res.data;
                    }

                });

            }

            scope.govcreate = function () {
                var para = {
                    'govsubsidy_sale_code': scope.code,
                    'govsubsidy_price': scope.govobj.govsubsidy_price
                };
                $resource('/api/as/tc/salegovsubsidy/create', {}, {}).save(para, function (res) {
                    if (res.errcode === 0) {
                        alert('ok');
                        scope.getgovsubsidy();
                    }
                    else {
                        alert(res.errmsg);
                    }
                });
            }

            scope.govupdate = function () {
                var para = {
                    'govsubsidy_sale_code': scope.code,
                    'govsubsidy_price': scope.govobj.govsubsidy_price
                };
                $resource('/api/as/tc/salegovsubsidy/update', {}, {}).save(para, function (res) {
                    if (res.errcode === 0) {
                        alert('ok');
                        scope.getgovsubsidy();
                    }
                    else {
                        alert(res.errmsg);
                    }
                });
            }


        }

    };

};

