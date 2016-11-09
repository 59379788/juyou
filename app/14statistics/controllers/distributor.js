module.exports = function($scope, orderstatisticscompanyhistorylist, getDate){

    $scope.searchform = {};

    //有效区间
    $scope.section = {};
    $scope.section.start = {};
    $scope.section.start.date = new Date();

    $scope.section.end = {};
    $scope.section.end.date = new Date();

    $scope.open = function(obj) {
        obj.opened = true;
    };

    $scope.companys = [];

   
    $scope.load = function(){
        var para = {
            start_time : getDate($scope.section.start.date),
            end_time : getDate($scope.section.end.date)
        }

        para = angular.extend($scope.searchform, para);

        console.log(para);

        orderstatisticscompanyhistorylist.get(para, function(res){

            console.log(res);

            if(res.errcode !== 0)
            {
                alert(res.errmsg);
                return ;
            }

            $scope.objs = res.data;

            var objs = {};
            //分组：旅行社编号－销售品编号－价格－
            for(var i = 0; i < res.data.length; i++)
            {
                var tmp = res.data[i];
                var company_code = tmp.company_code;
                var sale_code = tmp.sale_code;
                var unit_price = tmp.unit_price;
                var company_name = tmp.company_name;

                var id = tmp.company_id;
                var parentsid = tmp.company_id_parents;
                var parentid = tmp.company_id_parent;


                if(!objs.hasOwnProperty(company_code))
                {
                    var o = objs[company_code] = {};
                    o['saleobjs'] = {};
                    o['id'] = id;
                    o['parentsid'] = parentsid;
                    o['parentid'] = parentid;
                    o['company_name'] = company_name;
                    o['saleobjs'][sale_code] = {};
                    o['saleobjs'][sale_code]['prices'] = {};
                    o['saleobjs'][sale_code]['prices'][unit_price] = tmp;
                }
                else
                {
                    var o = objs[company_code]['saleobjs'];
                    if(!o.hasOwnProperty(sale_code))
                    {
                        o[sale_code] = {};
                        o[sale_code]['prices'] = {};
                        o[sale_code]['prices'][unit_price] = tmp;
                    }
                    else
                    {
                        if(!o[sale_code]['prices'].hasOwnProperty(unit_price))
                        {
                            o[sale_code]['prices'][unit_price] = tmp;
                        }
                        else
                        {
                            o[sale_code]['prices'][unit_price]['back'] += tmp.back;
                            o[sale_code]['prices'][unit_price]['buy'] += tmp.buy;
                            o[sale_code]['prices'][unit_price]['total_back'] += tmp.total_back;
                            o[sale_code]['prices'][unit_price]['total_buy'] += tmp.total_buy;
                            o[sale_code]['prices'][unit_price]['used'] += tmp.used;
                        }
                    }
                }
            }

            console.log(objs);

            

            //把子分享商加到一级分销商里
            var res = {};
            angular.forEach(objs, function (value, key) {

                var company_id_parents = value.parentsid;
                if(!(company_id_parents === undefined || company_id_parents == ''))
                {
                    var pointer = res;
                    var tmparr = company_id_parents.split(',');

                    for(var j = 0; j < tmparr.length; j++)
                    {
                        var tmpj = tmparr[j];
                        console.log(tmpj);
                        if(tmpj == 0 || tmpj == '') continue;
                        if(!pointer.hasOwnProperty(tmpj))
                        {
                            pointer[tmpj] = {};
                            pointer[tmpj]['company'] = [];
                        }
                        pointer = pointer[tmpj];
                    }
                    if(pointer['company'] !== undefined){
                        pointer['company'].push(value);
                    }
                }
            });
            console.log('66666666666');
            console.log(res);
            console.log('66666666666');

            //var companys = [];
            angular.forEach(res, function (value, key) {

                $scope.companys = value.company;

                angular.forEach(value, function (tainfo, taid) {

                    if(taid != 'company')
                    {
                        console.log(taid);

                        var flag = true;//卖票子社标记
                        //遍历已经卖票的一级社
                        for(var i = 0; i < $scope.companys.length; i++)
                        {
                            //一级社
                            var c = $scope.companys[i];
                            //一级社id
                            var id = c.id;

                            //将已经卖票的一级社子社追加到一级社里
                            if(id == taid)
                            {
                                c['sub'] = {};
                                c['sub'] = tainfo;
                                flag = false;
                                break;
                            }
                        }

                        if(flag)
                        {
                            var obj = {
                                'id' : taid,
                                'company_name' : 'hahaha',
                                'sub' : tainfo
                            };
                            $scope.companys.push(obj);
                            flag = true;
                        }
                    }
                    
                });

                // for(var i = 0; i < $scope.companys.length; i++)
                // {
                //     //一级社
                //     var c = $scope.companys[i];
                //     //一级社id
                //     var id = c.id;
                //     //一级社子社卖票了
                //     if(value.hasOwnProperty(id))
                //     {
                //         c['sub'] = {};
                //         c['sub'] = value[id];
                //     }
                //     //一级社没卖票
                //     else
                //     {

                //     }
                // }

            });
            console.log($scope.companys);



            for(var i = 0; i < $scope.companys.length; i++)
            {
                var company = $scope.companys[i];
                if(company.sub === undefined) continue;

                for(var j = 0; j < company.sub.length; j++)
                {
                    var sub = company.sub[j];
                    merge(company, sub);
                }

            }
            console.log($scope.companys);
            

            for(var i = 0; i < $scope.companys.length; i++)
            {
                var c = $scope.companys[i];
                c.salearr = [];
                angular.forEach(c['saleobjs'], function (saleinfo, salecode) {

                    c.salearr.push(saleinfo);

                    saleinfo.pricesarr = [];

                    angular.forEach(saleinfo['prices'], function (priceinfo, price) {

                        saleinfo.pricesarr.push(priceinfo);

                    });

                });

            }

            console.log($scope.companys);

            //$scope.companys = companys;
            // return ;


            // var objs = {};
            // for(var i = 0; i < res.data.length; i++)
            // {
            //     var tmp = res.data[i];
            //     var company_code = tmp.company_code
            //     var company_id_parents = tmp.company_id_parents;
            //     if(company_id_parents === undefined || company_id_parents == '') continue;

            //     //console.log(company_code_parent + '---' + company_code);

            //     var pointer = objs;
            //     var tmparr = company_id_parents.split(',');
            //     //console.log(tmparr);
            //     for(var j = 0; j < tmparr.length; j++)
            //     {
            //         var tmpj = tmparr[j]
            //         if(tmpj == 0 || tmpj == '') continue;
            //         if(!pointer.hasOwnProperty(tmpj))
            //         {
            //             pointer[tmpj] = {};
            //             pointer[tmpj]['company'] = [];
            //         }
            //         pointer = pointer[tmpj];
            //     }
            //     pointer['company'].push(tmp);
            // }
            // console.log(objs);



        });
    }
    $scope.load();



    //将子分销商的销售情况合并到一级分销。obj1父节点，obj2子节点。
    function merge(obj1, obj2){

        var res = true;

        //obj2的父节点id不是obj1的id
        if(obj1.id !== obj2.parentid)
        {
            return false;
        }

        //salecode:销售品编号，saleinfo:销售情况
        angular.forEach(obj2['saleobjs'], function (saleinfo, salecode) {
            //查询一级分销是否卖过该子分销的销售品
            var saleobj = obj1['saleobjs'][salecode];
            //一级分销没卖过的销售品
            if(saleobj === undefined)
            {
                saleobj = {};
                saleobj = saleinfo;
            }
            //一级分销也卖过的销售品
            else
            {
                //saleobj 父节点。
                angular.forEach(saleobj['prices'], function (priceinfo, price) {

                    //父节点没卖过这个价格
                    var pprice = saleobj['prices'][price];
                    if(pprice === undefined)
                    {
                        pprice = {};
                        pprice = priceinfo;
                    }
                    //父节点也卖过这个价格
                    else
                    {
                        // o[sale_code]['prices'][unit_price]['back'] += tmp.back;
                        // o[sale_code]['prices'][unit_price]['buy'] += tmp.buy;
                        // o[sale_code]['prices'][unit_price]['total_back'] += tmp.total_back;
                        // o[sale_code]['prices'][unit_price]['total_buy'] += tmp.total_buy;
                        // o[sale_code]['prices'][unit_price]['used'] += tmp.used;
                        pprice.back += priceinfo.back;
                        pprice.buy += priceinfo.buy;
                        pprice.total_back += priceinfo.total_back;
                        pprice.total_buy += priceinfo.total_buy;
                        pprice.used += priceinfo.used;
                    }

                });
            }

        });

        return res;
    }


    //
    function change(obj){

        

    }
};