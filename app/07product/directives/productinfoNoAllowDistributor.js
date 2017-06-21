module.exports = function ($resource, toaster) {
    return {
        restrict: 'E',
        template: require('../views/productinfoNoAllowDistributor.html'),
        replace: true,
        scope: {
            'saleobj': '=',
            'util': '=',
        },
        link: function ($scope, $element, $attrs) {
            $scope.dataArray = [];
            var para = {
                sale_code : $scope.saleobj.code
            }
            $resource('/api/as/tc/ticketsaletargetno/sellerList', {}, {}).save(para, function (res) {
                if (res.errcode !== 0) {
                    toaster.error({title:'', body:res.errmsg});
                    return;
                }
                $scope.dataArray = res.data;
            });

            $scope.$watch('dataArray', function (newValue) {
                if($scope.dataArray.length < 1){
				    $element.parent().parent().parent().hide();
                } else {
				    $element.parent().parent().parent().show();
                }
			}, true);
        }
    };
};

