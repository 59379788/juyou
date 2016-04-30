module.exports = function($scope, $state, $stateParams, namelist, info, createorder, IdentityCodeValid){

    //类别
    var sale_category = $stateParams.type;

    $scope.show = false;

    $scope.obj = {};

    $scope.order = {
        'name' : '',
        'cardno' : '',
        'mobile' : '',
        'num' : 0
    };
<<<<<<< HEAD
    // $scope.order.name = 'dlq';
    // $scope.order.cardno = '210302198308022412';
    // $scope.order.mobile = '13840188285';
    // $scope.order.num = 3;
=======
    /*$scope.order.name = 'dlq';
    $scope.order.cardno = '210302198308022412';
    $scope.order.mobile = '13840188285';
    $scope.order.num = 3;*/
>>>>>>> 5e4dbdc9c917f3c297ce7724935b1f9bc2f87c4b

    //$scope.order.payment_type = '8';

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
            o.guide_price = tmp.guide_price;
            o.market_price = tmp.market_price;

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

        //销售品编号，用于下单
        $scope.order.sale_code = obj.$modelValue.code;
        //销售品名称，用于显示
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

        //-------------- 参数验证 -----------------------//
        if(!check()) return ;
        //-------------- 参数验证 -----------------------//

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


    $scope.jian = function(){
        if(isNaN($scope.order.num)){
            $scope.order.num = 0;
            return;
        }
        $scope.order.num -= 1;
        if($scope.order.num - 1 < 0)
        {
            $scope.order.num = 0;
        }
    };

    $scope.jia = function(){
        if(isNaN($scope.order.num)){
            $scope.order.num = 0;
            return;
        }
        $scope.order.num += 1;
    };


    function check(){

        if($scope.order.cardno == '')
        {
            alert("请填写身份证");
            return false;
        }

        if(!IdentityCodeValid($scope.order.cardno))
        {
            if (!confirm("改身份证有误，要强制录入该身份证吗?")) {
                return false;
            }
        }

        if($scope.order.name == "")
        {
            alert("请填写姓名");
            return false;
        }
        
        if($scope.order.mobile == "")
        {
            alert("请填写购电话");
            return false;
        }

        if(isNaN($scope.order.num)){
            alert('购买数量请输入正确数字');
            $scope.order.num = 0;
            return false;
        }
        
        if($scope.order.num == "0")
        {
            alert("请填写购票数量");
            return false;
        }

        return true;
    }

};
