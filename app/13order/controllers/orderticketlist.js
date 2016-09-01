module.exports = function($scope, $uibModalInstance, ticketlist, createBackOrder, obj, 
    getRedCorridorOrderList, $uibModal, orderbacklist, getOrderSimInfo){

    var code = obj.code;

    var fun;
    var viewname = '';

    if(obj.sale_belong === 'juyou')
    {
        fun = ticketlist;
    }
    else if(obj.sale_belong === 'langdao')
    {
        viewname = '红海滩廊道';
        fun = getRedCorridorOrderList;
    }
    else if(obj.sale_belong === 'huaxiapiaolian')
    {
        viewname = '红海滩廊道';
        fun = getOrderSimInfo;
    }

    console.log(obj);
    console.log(code);

    $scope.load = function () {
        fun.get({'order_code' : code}, function(res){

            console.log(res);

            /* 门票存储结构
             * ========================================= */
            var tkt = new Object();
            var restkt = new Array();

            //console.log(res);

            if(res.errcode !== 0)
            {
                alert("数据获取失败");
                return;
            }

            var arr = [];
            if(obj.sale_belong === 'juyou')
            {
                arr = res.data;
            }
            else if(obj.sale_belong === 'huaxiapiaolian')
            {
                arr = change_huaxiapiaolian(res.data.order);
            }
            else if(obj.sale_belong === 'langdao')
            {
                arr = change(res.data);
            }

            console.log(arr);

            //用景区编号作为存储结构的属性，值是数组
            for(var i = 0, j = arr.length; i < j; i++)
            {
                var tt = arr[i];
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


        //退票历史
        orderbacklist.get({'order_code' : code, 'pageSize':999}, function(res){

            console.log(res);
            if(res.errcode === 0)
            {
                $scope.backarr = res.data.results;
            }
            else
            {
                alert(res.errmsg);
            }

        });

    };
    $scope.load();


    


    $scope.back = function(obj1){

        console.log(obj1);

        if(obj.sale_belong === 'juyou')
        {
            juyouback(obj1);
        }
        else
        {
            getbacknum(obj1);
        }
    };


    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };



    function change(obj)
    {
        var arr = [];

        var msg = ' (总人数' + obj.inCount + 
                  ', 已使用人数' + obj.usedCount +
                  ', 退票人数' + obj.backCount + ') ';


        var newobj = {
            'back1' : obj.backCount,
            'code' : obj.credence,
            'goods_code' : obj.goodsId,
            //'id':
            'order_code' : obj.orderId,
            'order_name' : obj.goodsName  + msg,
            //'otime' : otime,
            // 'place_code' :
            'place_name' : viewname,
            'sequence' : 1,
            //'state' : '1',
            // 'type' :
            // 'type_attr' :
            'type_name' : obj.goodsName,
            'used1' : obj.usedCount,
            'inCount' : obj.inCount 
        };

        arr.push(newobj);
        return arr;
    }


    function change_huaxiapiaolian(obj){

        var arr = [];

        var msg = ' (总人数' + obj.firstNum + 
                  ', 已使用人数' + obj.productNum +
                  ', 退票人数' + obj.cancelNum + ') ';


        var newobj = {
            'back1' : obj.cancelNum,
            'code' : obj.ecode,
            'goods_code' : obj.productCode,
            //'id':
            'order_code' : obj.platOrderNo,
            'order_name' : obj.productName  + msg,
            //'otime' : otime,
            // 'place_code' :
            'place_name' : viewname,
            'sequence' : 1,
            //'state' : '1',
            // 'type' :
            // 'type_attr' :
            'type_name' : obj.productName,
            'used1' : obj.productNum,
            'inCount' : obj.productNum 
        };

        arr.push(newobj);
        return arr;

    }

    //居游退票
    function juyouback(obj)
    {
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
    }

    //其他退票需要确认数量
    function getbacknum(obj)
    {
        var modalInstance = $uibModal.open({
          template: require('../views/backnum.html'),
          controller: 'backnum',
          //size: 'lg',
          resolve: {
            code : function(){
                return code;
            },
            obj : function(){
                return obj;
            },
            createBackOrder : function(){
                return createBackOrder;
            }
          }
        });

        modalInstance.result.then(function () {
            $scope.load();
        }, function () {
          //$log.info('Modal dismissed at: ' + new Date());
        });
    }


};