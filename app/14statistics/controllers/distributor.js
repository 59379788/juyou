module.exports = function($scope, orderstatisticscompanyhistorylist, getDate, talist){

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
    	
    	$scope.companys = [];

        var para = {
            start_time : getDate($scope.section.start.date),
            end_time : getDate($scope.section.end.date)
        }

        para = angular.extend($scope.searchform, para);

        console.log(para);

        orderstatisticscompanyhistorylist.save(para, function(res){

            console.log(res);

            if(res.errcode !== 0)
            {
                alert(res.errmsg);
                return ;
            }

            talist().then(function(res1) {
                if(res1.errcode === 0)
                {
                    //$scope.taarr = res1.data;
                    var taarr = res1.data;

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
		            var result = {};
		            angular.forEach(objs, function (value, key) {
		            	console.log(key);
		                var company_id_parents = value.parentsid;
		                var id = value.id;
		                if(!(company_id_parents === undefined || company_id_parents == ''))
		                {
		                    var tmparr = company_id_parents.split(',');

		                    var len = tmparr.length;
		                    var ta0 = '';   //0级社
		                    var ta1 = '';   //1级社

		                    if(len === 3)//一级社: 0,xxx,    xxx是顶级社
		                    {
		                        ta0 = tmparr[1];
		                        if(!result.hasOwnProperty(ta0))
		                        {
		                            result[ta0] = {};
		                        }

		                        if(!result[ta0].hasOwnProperty(id))
		                        {
		                        	result[ta0][id] = {
			                            'info' : value,
			                            'company' : []
			                        };
		                        }
		                        else	//优先处理了其子社，补全一级社信息，不能操作‘company’
		                        {
		                        	result[ta0][id]['info'] = value;
		                        }

		                    }
		                    //子级社：(二级)0,xxx,yyy,  or (三级)0,xxx,yyy,zzz,
		                    else if(len > 3) 
		                    {
		                        ta0 = tmparr[1];
		                        ta1 = tmparr[2];

		                        if(result[ta0] !== undefined)
		                        {
		                            if(!result[ta0].hasOwnProperty(ta1))
		                            {
		                            	var company_name = getTaInfo(taarr, ta1);
		                                result[ta0][ta1] = {
		                                    'info' : {
		                                        'id' : ta1,
		                                        'company_name' : company_name.NAME,
		                                        'saleobjs' : {}
		                                    },
		                                    'company' : []
		                                };
		                                
		                            }

		                            //result[ta0][ta1]['company'].push(value);
		                        }
		                        else// if(result[ta0] === undefined)
		                        {
		                        	result[ta0] = {};
		                        	var company_name = getTaInfo(taarr, ta1);
		                        	result[ta0][ta1] = {
		                        		'info' : {
	                                        'id' : ta1,
	                                        'company_name' : company_name.NAME,
	                                        'saleobjs' : {}
	                                    },
		                                'company' : []
		                        	};
		                        }

		                        result[ta0][ta1]['company'].push(value);
		                    }
		                    // else   //len < 3 //0级社
		                    // {

		                    // }
		                }
		            });
		            console.log('6666666666677788');
		            console.log(result);
		            console.log('6666666666699999111');

		            //return;


		            //var companys = [];
		            //key：顶级社
		            //value : 所有一级社对象
		            angular.forEach(result, function (value1, key1) {

		                //$scope.companys = value;

		                angular.forEach(value1, function (tainfo, taid) {

		                    //taid,一级社id
		                    //tainfo.info : 一级社信息
		                    //tainfo.company : 一级社的子社信息（数组）

		                    for(var i = 0; i < tainfo.company.length; i++)
		                    {
		                        merge(tainfo.info, tainfo.company[i]);
		                    }

		                    var c = tainfo.info;
		                    c.salearr = [];
		                    angular.forEach(c['saleobjs'], function (saleinfo, salecode) {
		                        c.salearr.push(saleinfo);
		                        saleinfo.pricesarr = [];
		                        angular.forEach(saleinfo['prices'], function (priceinfo, price) {
		                            saleinfo.pricesarr.push(priceinfo);
		                        });
		                    });

		                    $scope.companys.push(c);

		                });

		            });
		            console.log($scope.companys);

                }
                else
                {
                    alert(res1.errmsg);
                }
            });

            //$scope.objs = res.data;

        });
    }
    $scope.load();



    //将子分销商的销售情况合并到一级分销。obj1父节点，obj2子节点。
    function merge(obj1, obj2){

        var res = true;

        //obj2的父节点id不是obj1的id
        // if(obj1.id !== obj2.parentid)
        // {
        //     return false;
        // }

        //salecode:销售品编号，saleinfo:销售情况
        angular.forEach(obj2['saleobjs'], function (saleinfo, salecode) {
            //查询一级分销是否卖过该子分销的销售品
            //salecode,hasOwnProperty
            //var saleobj = obj1['saleobjs'][salecode];
            //一级分销没卖过的销售品
            if(!obj1['saleobjs'].hasOwnProperty(salecode))
            {
                obj1['saleobjs'][salecode] = {};
                obj1['saleobjs'][salecode] = angular.copy(saleinfo);
                //console.log(obj1['saleobjs'][salecode]);
            }
            //一级分销也卖过的销售品
            else
            {
                var saleobj1 = obj1['saleobjs'][salecode];
                var saleobj2 = angular.copy(saleinfo);
                //遍历子社的销售价格
                angular.forEach(saleobj2['prices'], function (priceinfo, price) {


                    //父节点没卖过这个价格
                    //var pprice = saleobj['prices'][price];
                    if(!saleobj1['prices'].hasOwnProperty(price))
                    {
                        saleobj1['prices'][price] = {};
                        saleobj1['prices'][price] = angular.copy(priceinfo);
                    }
                    //父节点也卖过这个价格
                    else
                    {
                        var pprice = saleobj1['prices'][price];

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


    function getTaInfo(taarr, id){

    	if(!angular.isArray(taarr))
    	{
    		return {};
    	}

    	for(var i = 0, j = taarr.length; i < j; i++)
    	{
    		var ta = taarr[i];

    		if(ta.id == id)
    		{
    			return ta;
    		}
    	}
    }

};