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
                    pointer['company'].push(value);
                }
            });
            console.log(res);

            var companys = [];
            angular.forEach(res, function (value, key) {

                companys = value.company;
                for(var i = 0; i < companys.length; i++)
                {
                    var c = companys[i];
                    var id = c.id;
                    if(value.hasOwnProperty(id))
                    {
                        c['sub'] = {};
                        c['sub'] = value[id];
                    }
                }

            });
            console.log(companys);
            return ;


            var objs = {};
            for(var i = 0; i < res.data.length; i++)
            {
                var tmp = res.data[i];
                var company_code = tmp.company_code
                var company_id_parents = tmp.company_id_parents;
                if(company_id_parents === undefined || company_id_parents == '') continue;

                //console.log(company_code_parent + '---' + company_code);

                var pointer = objs;
                var tmparr = company_id_parents.split(',');
                //console.log(tmparr);
                for(var j = 0; j < tmparr.length; j++)
                {
                    var tmpj = tmparr[j]
                    if(tmpj == 0 || tmpj == '') continue;
                    if(!pointer.hasOwnProperty(tmpj))
                    {
                        pointer[tmpj] = {};
                        pointer[tmpj]['company'] = [];
                    }
                    pointer = pointer[tmpj];
                }
                pointer['company'].push(tmp);
            }
            console.log(objs);



        });
    }
    $scope.load();



    //将子分销商的销售情况合并到一级分销。
    function merge(obj1, obj2){

        var res = false;

        //将子分销的复制一份
        var tmpobj2 = angular.copy(obj2);

        //obj2的父节点id不是obj1的id
        if(obj1.id !== obj2.parentid)
        {
            return res;
        }


        //key:销售品编号，value:销售情况
        angular.forEach(tmpobj2['saleobjs'], function (saleinfo, salecode) {
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
                angular.forEach(saleobj['saleobjs'], function (value, key) {

                });
            }



        });


        return res;
    }

};