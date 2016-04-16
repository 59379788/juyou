module.exports = function($scope, $state, $stateParams, namelist, info, createorder){

    //类别
    var sale_category = $stateParams.type;

    $scope.show = false;

    $scope.obj = {};

    $scope.order = {};
    // $scope.order.name = 'dlq';
    // $scope.order.cardno = '210302198308022412';
    // $scope.order.mobile = '13840188285';
    // $scope.order.num = 3;

    $scope.order.payment_type = '8';

    //销售品树
    namelist.get({'sale_category' : sale_category}, function(res){

        console.log(res);

        var len = res.data.length,
            r = {},
            i = 0;

        for(; i < len; i++){ 

            var tmp = res.data[i];

            var o = {};
            o.id = tmp.id;
            o.code = tmp.sale_code;
            o.name = tmp.sale_name;

            if(!r.hasOwnProperty(tmp.place_code))
            {
                r[tmp.place_code] = {};
                r[tmp.place_code].name = tmp.place_name;
                r[tmp.place_code].nodes = []; 
            }

            r[tmp.place_code].nodes.push(o);
        }

        console.log(r);
        $scope.data = r;

    });


    $scope.getit = function(obj){

        if(obj.$modelValue === undefined) return;

        $scope.show = true;

        $scope.order.sale_code = obj.$modelValue.id;
        $scope.obj.name = obj.$modelValue.name;

        if(obj.$modelValue.hasOwnProperty('id'))
        {
            // info.get({'id' : obj.$modelValue.id}, function(res){

            //     console.log(res);
            //     if(res.errcode === 0)
            //     {
            //         $scope.show = true;
            //         $scope.obj = res.data;
            //         $scope.order.sale_code = obj.$modelValue.code;
            //     }
            //     else
            //     {
            //         $scope.show = false;
            //         alert(res.errmsg);
            //     }

            // });
        }
    };


    $scope.gogo = function(){

        console.log($scope.order);
        createorder.save($scope.order, function(res){

            console.log(res);

            if(res.errcode === 0)
            {
                alert('下单成功，请注意查收短信');
            }
            else
            {
                alert(res.errmsg);
            }

        });

    };

};
