module.exports = function($scope, $state, $stateParams, ticketlist, createBackOrder){

    var code = $stateParams.code;

    $scope.load = function () {
        ticketlist.get({'order_code' : code}, function(res){

            /* 门票存储结构
             * ========================================= */
            var tkt = new Object();
            var restkt = new Array();

            console.log(res);

            if(res.errcode !== 0)
            {
                alert("数据获取失败");
                return;
            }

            //用景区编号作为存储结构的属性，值是数组
            for(var i = 0, j = res.data.length; i < j; i++)
            {
                var tt = res.data[i];
                var v = tt.sequence;

                if(!tkt.hasOwnProperty(v))
                {
                    tkt[v] = new Object();
                    tkt[v].ticketarr = new Array();
                    tkt[v].sequence = tt.sequence;
                    tkt[v].name = tt.order_name;
                }
                tkt[v].ticketarr.push(tt);
            }

            for(var key in tkt)
            {
                var o = tkt[key];
                restkt.push(o);
            }


            // console.log("------------");
            // console.log(restkt);
            // console.log("------------");

            $scope.objs = restkt;

        });

    };
    $scope.load();


    $scope.back = function(obj){

        var flag = true;
        console.log(obj);
        for(var i = 0; i < obj.ticketarr.length; i++)
        {
            var tmp = obj.ticketarr[i];
            if(tmp.state !== '1')
            {
                flag = false;
            }
        }


        if(!flag)
        {
            alert('销售品中有已经使用的商品。');
            return;
        }

        console.log(obj);

        var para = {
            'order_code' : code,
            'sequence' : obj.sequence

        };

        if (!confirm("确定要退 " + obj.name + ' 中的第 ' + obj.sequence + ' 个吗？')) {
            return false;
        }

        createBackOrder.save(para, function(res){

            console.log(res);

            if(res.errcode === 0)
            {
                alert('退票成功');
                $scope.load();
            }
            else
            {
                alert(res.errmsg);
            }

        });
        


    };


};