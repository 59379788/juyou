module.exports = function($scope, $uibModalInstance, ticketlist, createBackOrder, obj, 
    getRedCorridorOrderList, getDate, $uibModal, orderbacklist, getOrderSimInfo, updateTicketEffectTime, str2date,
    //皇家海洋馆订单状态详情
    getroyalocOrdersState){

    // $scope.newdate;
    //console.log(obj);
    var code = obj.code;

    $scope.authority = true;
    $scope.middle ;
    $scope.order_unique_code = obj.order_unique_code;

    var fun;
    var viewname = '';

    if(obj.sale_belong === 'juyou' || obj.sale_belong === 'supply_piaofutong' ||  obj.sale_belong === 'supply_tstc' ||  obj.sale_belong === 'supply_tongchenglvyou' || obj.sale_belong === 'supply_zhiyoubao' || obj.sale_belong === 'supply_xiaojing')
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
    else if(obj.sale_belong === 'royaloc')
    {
        viewname = '皇家极地海洋馆';
        fun = getroyalocOrdersState;
    }

    //console.log(obj);
    //console.log(code);

    $scope.load = function () {
        if(!(obj.ticket_state == '9' || obj.ticket_state == '0')){
            fun.get({'order_code' : code}, function(res){

                //console.log(res);
                for (var i = res.data.length - 1; i >= 0; i--) {
                    res.data[i].take_effect_time = str2date(res.data[i].take_effect_time); 
                }

                // obj = res;
                // $scope.newdate = str2date(res.ticket_out_time);

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
                if(obj.sale_belong === 'juyou' || obj.sale_belong === 'supply_piaofutong' ||  obj.sale_belong === 'supply_tstc' ||  obj.sale_belong === 'supply_tongchenglvyou' || obj.sale_belong === 'supply_zhiyoubao' || obj.sale_belong === 'supply_xiaojing')
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
                else if(obj.sale_belong === 'royaloc')
                {
                    arr = change_royaloc(res.data);
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
                        tkt[v].newdate = tt.take_effect_time;
                    }
                    tkt[v].ticketarr.push(tt);
                }

                for(var key in tkt)
                {
                    var o = tkt[key];
                    restkt.push(o);
                }

                // console.log("------------");
                // console.log(restkt[0]);
                // console.log("------------");
                // for (var i = restkt.length - 1; i >= 0; i--) {
                //     restkt[i]
                // }
                $scope.objs = restkt;

            });
        }

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

        if(obj.sale_belong === 'juyou' || obj.sale_belong === 'supply_piaofutong' ||  obj.sale_belong === 'supply_tstc' ||  obj.sale_belong === 'supply_tongchenglvyou' || obj.sale_belong === 'supply_zhiyoubao' || obj.sale_belong === 'supply_xiaojing')
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
            'newdate' : obj.take_effect_time,
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
                  ', 已使用人数' + obj.usedNum +
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
            'used1' : obj.usedNum,
            'inCount' : obj.firstNum 
        };

        arr.push(newobj);
        return arr;

    }

    function change_royaloc(obj)
    {
        console.log(obj);

        var usedNum = 0;
        var backNum = 0;
        var buyNum = 1;
        

        //0  未消费
        if(obj.state == 0)
        {
            usedNum = 0;
            backNum = 0;
        }
        //1  已消费
        else if(obj.state == 1)
        {
            usedNum = 1;
            backNum = 0;
        }
        //2  已作废,退票
        else if(obj.state == 2)
        {
            usedNum = 0;
            backNum = 1;
        }
        //3  订单错误
        else if(obj.state == 3)
        {
            return [];
        }


        var arr = [];

        var msg = ' (总人数' + 1 + 
                  ', 已使用人数' + usedNum +
                  ', 退票人数' + backNum + ') ';


        var newobj = {
            'back1' : backNum,
            'code' : '',
            'goods_code' : '',
            //'id':
            'order_code' : '',
            'order_name' : '皇家极地海洋馆门票' + msg,
            //'otime' : otime,
            // 'place_code' :
            'place_name' : viewname,
            'sequence' : 1,
            //'state' : '1',
            // 'type' :
            // 'type_attr' :
            'type_name' : '皇家极地海洋馆门票',
            'used1' : usedNum,
            'inCount' : 1 
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
                if(res.data.result == '1'){
					alert('退票成功');
				} else if(res.data.result == '2') {
					alert('退票申请已提交，待审核');
				} else if(res.data.result == '3') {
					alert(res.data.remark_err);
				}
                // alert('退票成功');
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

    $scope.timechange = function(id,take_effect_time){

        updateTicketEffectTime.save({'id' : id, 'take_effect_time' : take_effect_time} ,function(res){
            console.log(res);

            if(res.errcode === 0)
            {
                alert('修改成功');
                $scope.authority = true;
                // $scope.load();
            }
            else
            {
                alert(res.errmsg);
            }
        });
    }

    $scope.open = function(obj) {
        obj.opened = true;
    };

    $scope.authchange = function(){
        $scope.authority = false;
    }

    

    $scope.mosaic = function(id,take_effect_time,date){

        $scope.front = getDate(take_effect_time);
        take_effect_time = $scope.front + ' ' + date.substring(11,19);
        console.log(take_effect_time);
        $scope.timechange(id,take_effect_time);
    };


};