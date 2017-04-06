module.exports = function ($resource, $state, $http, $q) {

    return {

        restrict: 'AE',
        template: require('../views/productinfojuyousubsidy.html'),
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
                    scope.getjuyousubsidy();
                });
            }
            scope.load()

            //查询居游补贴
            scope.getjuyousubsidy = function () {
                $resource('/api/as/tc/salejuyousubsidy/info', {}, {}).save({ 'juyousubsidy_sale_code': scope.code }, function (res) {

                    if (res.errcode === 10003) {
                        scope.isExistFlag = false;
                    } else {
                        scope.juyouobj = res.data;
                    }

                });

            }

            scope.juyoucreate = function () {
                var para = {
                    'juyousubsidy_sale_code': scope.code,
                    'juyousubsidy_price': scope.juyouobj.juyousubsidy_price
                };
                $resource('/api/as/tc/salejuyousubsidy/create', {}, {}).save(para, function (res) {
                    if (res.errcode === 0) {
                        alert('ok');
                        scope.getjuyousubsidy();
                    }
                    else {
                        alert(res.errmsg);
                    }
                });
            }

            scope.juyouupdate = function () {
                var para = {
                    'juyousubsidy_sale_code': scope.code,
                    'juyousubsidy_price': scope.juyouobj.juyousubsidy_price
                };
                $resource('/api/as/tc/salejuyousubsidy/update', {}, {}).save(para, function (res) {
                    if (res.errcode === 0) {
                        alert('ok');
                        scope.getjuyousubsidy();
                    }
                    else {
                        alert(res.errmsg);
                    }
                });
            }


        }

    };

};

