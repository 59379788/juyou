/**
 * 子模块service
 * dlq
 */
var service = function($resource, BASEURL38985, $q, $http){

     //对接产品信息
    var dockingproduct = BASEURL38985 + "/api/uc/dc/supplyXiaojingService/createGetProductList";

    //查询景区下拉列表
    var viewlist = BASEURL38985 + "/api/as/tc/placeview/jlist";

    //查询景区列表
    var list = BASEURL38985 + "/api/as/tc/type2/typelist";

    //创建票种
    var tktcreate = BASEURL38985 + '/api/as/tc/type2/create';

    //票种信息
    var tktinfo = BASEURL38985 + '/api/as/tc/type2/info';

    //修改票种
    var tktupdate = BASEURL38985 + '/api/as/tc/type2/update';

    //票种列表
    var tktlist = BASEURL38985 + '/api/as/tc/type2/typelist';

    //创建属性
    var attrcreate = BASEURL38985 + '/api/as/tc/attr/create';

    //更新属性
    var attrupdate = BASEURL38985 + '/api/as/tc/attr/update';

    //属性信息
    var attrinfo = BASEURL38985 + '/api/as/tc/attr/info';

    //查询属性列表
    var attrlist = BASEURL38985 + '/api/as/tc/attr/list';

    //查询商品（全部）
    var goodslist = BASEURL38985 + '/api/as/tc/goods/alllist';

    //更新商品
    var goodsupdate = BASEURL38985 + '/api/as/tc/goods/update';

    //创建商品
    var goodscreate = BASEURL38985 + '/api/as/tc/goods/create';

    //查询商品（单条）
    var goodsinfo = BASEURL38985 + '/api/as/tc/goods/info';

    //创建商品详情
    var goodsdetailcreate = BASEURL38985 + '/api/as/tc/goodsdetail/create';

    //查询商品详情（对应商品）
    var goodsdetaillist = BASEURL38985 + '/api/as/tc/goodsdetail/list';

    //删除商品详情
    var goodsdetaildelete = BASEURL38985 + '/api/as/tc/goodsdetail/delete';

    //查询票种列表（对应景区）
    var typelist = BASEURL38985 + '/api/as/tc/goods/typelist';

    //根据商品code取id
    var sel_id = BASEURL38985 + '/api/as/tc/goods/sel_id';


    var goodsup = BASEURL38985 + '/api/ac/tc/changeGoodsStateService/updategoodsstateup';

    var goodsdown = BASEURL38985 + '/api/ac/tc/changeGoodsStateService/updategoodsstatedown';



    //查询销售品（全部）
    var salelist = BASEURL38985 + '/api/as/tc/sale/alllist';

    //更新销售品
    var saleupdate = BASEURL38985 + '/api/as/tc/sale/update';

    //创建销售品
    var salecreate = BASEURL38985 + '/api/as/tc/sale/create';

    //查询销售品（单条）
    var saleinfo = BASEURL38985 + '/api/as/tc/sale/info';

    //创建销售品详情
    var saledetailcreate = BASEURL38985 + '/api/as/tc/saledetail/create';

    //查询销售品详情（对应销售品）
    var saledetaillist = BASEURL38985 + '/api/as/tc/saledetail/list';

    //删除销售品详情
    var saledetaildelete = BASEURL38985 + '/api/as/tc/saledetail/delete';

    //根据销售品code取id
    var sale_id = BASEURL38985 + '/api/as/tc/sale/sel_id';

    //查询商品下拉列表（对应景区）
    var goodlist = BASEURL38985 + '/api/as/tc/sale/goodlist';

    //销售品类型
    var dictbytypelist = BASEURL38985 + '/api/as/sc/dict/dictbytypelist'

    //销售品上架
    var saleup = BASEURL38985 + '/api/ac/tc/salehService/setup';

    //销售品下架
    var saledown = BASEURL38985 + '/api/ac/tc/salehService/setdown';

    //添加销售品半价信息（对应销售品）
    var salehalfinsert = BASEURL38985 + '/api/as/tc/salehalf/create';

    //修改销售品半价信息（对应销售品）
    var salehalfupdate = BASEURL38985 + '/api/as/tc/salehalf/update';

    //查询销售品半价信息（对应销售品）
    var salehalfinfo = BASEURL38985 + '/api/as/tc/salehalf/info';



    //销售品类型
    var salecategorylist = BASEURL38985 + '/api/as/tc/salecategory/list';

    //销售品类型列表
    var salecategoryinsert = BASEURL38985 + '/api/as/tc/salecategory/insert';

    //销售品类型列表
    var salecategorydelete = BASEURL38985 + '/api/as/tc/salecategory/delete';


    //创建政府补贴
    var salegovsubsidycreate = BASEURL38985 + '/api/as/tc/salegovsubsidy/create';
    //修改政府补贴
    var salegovsubsidyupdate = BASEURL38985 + '/api/as/tc/salegovsubsidy/update';
    //政府补贴详情
    var salegovsubsidyinfo = BASEURL38985 + '/api/as/tc/salegovsubsidy/info';


    //创建居游补贴
    var salejuyousubsidycreate = BASEURL38985 + '/api/as/tc/salejuyousubsidy/create';
    //修改居游补贴
    var salejuyousubsidyupdate = BASEURL38985 + '/api/as/tc/salejuyousubsidy/update';
    //居游补贴详情
    var salejuyousubsidyinfo = BASEURL38985 + '/api/as/tc/salejuyousubsidy/info';
    
    //经销商列表
    var sellerList = BASEURL38985 + '/api/as/tc/ticketsaletarget/sellerList';
    //创建点买
    var tstcreate = BASEURL38985 + '/api/as/tc/ticketsaletarget/create';
    //可以销售
    var tststart = BASEURL38985 + '/api/as/tc/ticketsaletarget/updateStart';
    //禁止销售
    var tststop = BASEURL38985 + '/api/as/tc/ticketsaletarget/updateStop';


    //(不可卖)经销商列表
    var sellerListno = BASEURL38985 + '/api/as/tc/ticketsaletargetno/sellerList';
    //(不可卖)创建
    var tstcreateno = BASEURL38985 + '/api/as/tc/ticketsaletargetno/create';
    //(不可卖)可以
    var tststartno = BASEURL38985 + '/api/as/tc/ticketsaletargetno/updateStart';
    //(不可卖)禁止
    var tststopno = BASEURL38985 + '/api/as/tc/ticketsaletargetno/updateStop';


    //系统确认项接口
    //创建系统确认
    var affirmcreate = BASEURL38985 + '/api/as/tc/salesysaffirm/create';
    //查询
    var affirminfo = BASEURL38985 + '/api/as/tc/salesysaffirm/info';
    //更新
    var affirmupdate = BASEURL38985 + '/api/as/tc/salesysaffirm/update';

    //短信模版
    var smstmplist = BASEURL38985 + '/api/as/tc/salesmstemplate/list';

    //限时购
    var flashsalecreate = BASEURL38985 + '/api/as/tc/flashsale/create';
    var flashsaleinfo = BASEURL38985 + '/api/as/tc/flashsale/info';
    var flashsaleupdate = BASEURL38985 + '/api/as/tc/flashsale/update';
    
    //保险管理

    //添加一个保险
    var createinsuranceapi = BASEURL38985 + "/api/as/lc/insurance/add";
    
    //获取保险列表
    var queryinsuranceapi = BASEURL38985 + "/api/as/lc/insurance/talist";
    
    //获取可用保险列表
    var queryopeninsuranceapi = BASEURL38985 + "/api/as/lc/insurance/taopenlist";
    
    var startinsuranceapi = BASEURL38985 + "/api/as/lc/insurance/onshelf";
    
    var stopinsuranceapi = BASEURL38985 + "/api/as/lc/insurance/offshelf";

    //商客产品列表
    var skgoodslist = BASEURL38985 + '/api/as/tc/sale/saleNameByCompanyPriceList';

    //设置分销价格
    var saveprice = BASEURL38985 + '/api/as/tc/salecompanyprice/save';
    // 设置奖励政策
    var rewardprice = BASEURL38985 + '/api/as/tc/skrewardpricedao/saveRewardPrice';
    // 获取奖励列表
    var rewardlist = BASEURL38985 + '/api/as/tc/skrewardpricedao/findList';
    //删除列表
    var rewardlistdel = BASEURL38985 + '/api/as/tc/skrewardpricedao/delete';
    // 绑定中间商
    var middlebusiness = BASEURL38985 + '/api/as/tc/skbindingmiddlebusiness/saveMiddleBusiness';
    
    
    
    // 销售品积分列表
    var findsaleintegrallist = BASEURL38985 + '/api/as/tc/saleintegral/findsaleintegrallist';
    
    // 积分配置
    var saveSaleInteral = BASEURL38985 + '/api/uc/tc/ticketSaleIntegralService/saveSaleInteral';

    
    var updateTicketPeriod = BASEURL38985 + '/api/ac/tc/updateTicketPeriodService/updateTicketPeriod';

    //搜索销售品分润信息
    var findSaleFenRun = BASEURL38985 + '/api/as/tc/saleshangkeprice/getinfo';

    //销售品分润设置
    var saveSaleFenRun = BASEURL38985 + '/api/as/tc/saleshangkeprice/save';


    return {
         dockingproduct : function(){
            return $resource(dockingproduct, {}, {});
        },
        middlebusiness : function(){
            return $resource(middlebusiness, {}, {});
        },
        rewardprice : function(){
            return $resource(rewardprice, {}, {});
        },
        rewardlist : function(){
            return $resource(rewardlist, {}, {});
        },
        rewardlistdel : function(){
            return $resource(rewardlistdel, {}, {});
        },

    	tktcreate : function(){
            return $resource(tktcreate, {}, {});
        },
        tktinfo : function(){
            return $resource(tktinfo, {}, {});
        },
        tktlist : function(){
            return $resource(tktlist, {}, {});
        },
        tktupdate : function(){
            return $resource(tktupdate, {}, {});
        },
        attrcreate : function(){
            return $resource(attrcreate, {}, {});
        },
        attrupdate : function(){
            return $resource(attrupdate, {}, {});
        },
        attrinfo : function(){
            return $resource(attrinfo, {}, {});
        },
        attrlist : function(){
            return $resource(attrlist, {}, {});
        },
        goodslist : function(){
            return $resource(goodslist, {}, {});
        },
        skgoodslist : function(){
            return $resource(skgoodslist, {}, {});
        },
        saveprice : function(){
            return $resource(saveprice, {}, {});
        },
        goodsupdate : function(){
            return $resource(goodsupdate, {}, {});
        },
        goodscreate : function(){
            return $resource(goodscreate, {}, {});
        },
        goodsinfo : function(){
            return $resource(goodsinfo, {}, {});
        },
        goodsdetailcreate : function(){
            return $resource(goodsdetailcreate, {}, {});
        },
        goodsdetaillist : function(){
            return $resource(goodsdetaillist, {}, {});
        },
        goodsdetaildelete : function(){
            return $resource(goodsdetaildelete, {}, {});
        },
        goodsup : function(){
            return $resource(goodsup, {}, {});
        },
        goodsdown : function(){
            return $resource(goodsdown, {}, {});
        },
        sel_id : function(){
            return $resource(sel_id, {}, {});
        },
        salelist : function(){
            return $resource(salelist, {}, {});
        },
        saleupdate : function(){
            return $resource(saleupdate, {}, {});
        },
        salecreate : function(){
            return $resource(salecreate, {}, {});
        },
        saleinfo : function(){
            return $resource(saleinfo, {}, {});
        },
        saledetailcreate : function(){
            return $resource(saledetailcreate, {}, {});
        },
        saledetaillist : function(){
            return $resource(saledetaillist, {}, {});
        },
        saledetaildelete : function(){
            return $resource(saledetaildelete, {}, {});
        },
        sale_id : function(){
            return $resource(sale_id, {}, {});
        },
        goodlist : function(){
            return $resource(goodlist, {}, {});
        },
        dictbytypelist : function(obj){
            var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行  
            $http({method: 'GET', params: obj, url: dictbytypelist}).then(
                function(data){
                    deferred.resolve(data.data);
                },
                function(data){
                    deferred.reject(data.data);
                });
            // success(function(data, status, headers, config) {  
            //     deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了  
            // }).  
            // error(function(data, status, headers, config) {  
            //     deferred.reject(data);   // 声明执行失败，即服务器返回错误  
            // });  
            return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API 
        },
        salehalfinsert : function(){
            return $resource(salehalfinsert, {}, {});
        },
        salehalfupdate : function(){
            return $resource(salehalfupdate, {}, {});
        },
        salehalfinfo : function(){
            return $resource(salehalfinfo, {}, {});
        },
        saleup : function(){
            return $resource(saleup, {}, {});
        },
        saledown : function(){
            return $resource(saledown, {}, {});
        },
        saveSaleInteral : function(){
            return $resource(saveSaleInteral, {}, {});
        },
        findSaleFenRun : function(){
            return $resource(findSaleFenRun, {}, {});
        },
        saveSaleFenRun : function(){
            return $resource(saveSaleFenRun, {}, {});
        },
        findsaleintegrallist : function(){
            return $resource(findsaleintegrallist, {}, {});
        },
        viewlist : function(obj){
    		var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行  
			$http({method: 'GET', params: obj, url: viewlist}).then(
                function(data){
                    deferred.resolve(data.data);
                },
                function(data){
                    deferred.reject(data.data);
                });
			// success(function(data, status, headers, config) {  
			// 	deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了  
			// }).  
			// error(function(data, status, headers, config) {  
			// 	deferred.reject(data);   // 声明执行失败，即服务器返回错误  
			// });  
			return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API 
	    },
	    attrlistsel : function(obj){
    		var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行  
			$http({method: 'GET', params: obj, url: attrlist}).then(
                function(data){
                    deferred.resolve(data.data);
                },
                function(data){
                    deferred.reject(data.data);
                });
			// success(function(data, status, headers, config) {  
			// 	deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了  
			// }).  
			// error(function(data, status, headers, config) {  
			// 	deferred.reject(data);   // 声明执行失败，即服务器返回错误  
			// });  
			return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API 
	    },
	    typelist : function(){
    		return $resource(typelist, {}, {});
    	},
    	goodsstate : [
            {
                'statename' : '无效',
                'statecode' : '0'
            },
            {
                'statename' : '有效',
                'statecode' : '1'
            }
        ],
        salecategorylist : function(){
            return $resource(salecategorylist, {}, {});
        },
        salecategoryinsert : function(){
            return $resource(salecategoryinsert, {}, {});
        },
        salecategorydelete : function(){
            return $resource(salecategorydelete, {}, {});
        },
        salegovsubsidycreate : function(){
            return $resource(salegovsubsidycreate, {}, {});
        },
        salegovsubsidyupdate : function(){
            return $resource(salegovsubsidyupdate, {}, {});
        },
        salegovsubsidyinfo : function(){
            return $resource(salegovsubsidyinfo, {}, {});
        },
        salejuyousubsidycreate : function(){
            return $resource(salejuyousubsidycreate, {}, {});
        },
        salejuyousubsidyupdate : function(){
            return $resource(salejuyousubsidyupdate, {}, {});
        },
        salejuyousubsidyinfo : function(){
            return $resource(salejuyousubsidyinfo, {}, {});
        },
        
        makeArr : function(str){
            var obj = [];

            if(str === undefined || str.length === 0) return obj;

            var arr = str.split(',');
            for(var i = 0; i < arr.length; i++)
            {
                obj.push({'name' : arr[i]});
            }
            return obj;
        },

        makeStr : function(arr){
            
            if(!angular.isArray(arr)) return '';

            var arr1 = [];
            for(var i = 0; i < arr.length; i++)
            {
                arr1.push(arr[i].name);
            }
            return arr1.join(',');
        },


        sellerList : function(){
            return $resource(sellerList, {}, {});
        },
        tstcreate : function(){
            return $resource(tstcreate, {}, {});
        },
        tststart : function(){
            return $resource(tststart, {}, {});
        },
        tststop : function(){
            return $resource(tststop, {}, {});
        },

        sellerListno : function(){
            return $resource(sellerListno, {}, {});
        },
        tstcreateno : function(){
            return $resource(tstcreateno, {}, {});
        },
        tststartno : function(){
            return $resource(tststartno, {}, {});
        },
        tststopno : function(){
            return $resource(tststopno, {}, {});
        },

        affirmcreate : function(){
            return $resource(affirmcreate, {}, {});
        },
        affirminfo : function(){
            return $resource(affirminfo, {}, {});
        },
        affirmupdate : function(){
            return $resource(affirmupdate, {}, {});
        },
        updateTicketPeriod : function(){
            return $resource(updateTicketPeriod, {}, {});
        },
        smstmplist : function(){
            return $resource(smstmplist, {}, {});
        },
        flashsalecreate : function(){
            return $resource(flashsalecreate, {}, {});
        },
        flashsaleinfo : function(){
            return $resource(flashsaleinfo, {}, {});
        },
        flashsaleupdate : function(){
            return $resource(flashsaleupdate, {}, {});
        },
        insmodel : {
          
          title : "",
          platformprice : 0,
          stbprice : 0,
          description : ""
          
        },
        getOpenInsurance : function (obj) {
        var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行  
          $http({method: 'GET', params: obj, url: queryopeninsuranceapi}).then(
            function(data){
                deferred.resolve(data.data);
            },
            function(data){
                deferred.reject(data.data);
            });  
          // success(function(data, status, headers, config) {  
          //   deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了  
          // }).  
          // error(function(data, status, headers, config) {  
          //   deferred.reject(data);   // 声明执行失败，即服务器返回错误  
          // });  
          return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API  
      },
      createInsurance : function(obj){
          var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行  
          $http({method: 'POST', data: obj, url: createinsuranceapi}).then(
                function(data){
                    deferred.resolve(data.data);
                },
                function(data){
                    deferred.reject(data.data);
                });
          // success(function(data, status, headers, config) {  
          //   deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了  
          // }).  
          // error(function(data, status, headers, config) {  
          //   deferred.reject(data);   // 声明执行失败，即服务器返回错误  
          // });  
          return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API  
        //return $resource(createinsuranceapi, {}, {});
      },
      queryInsurance : function(obj){
          var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行  
          $http({method: 'GET', params: obj, url: queryinsuranceapi}).then(
            function(data){
                deferred.resolve(data.data);
            },
            function(data){
                deferred.reject(data.data);
            });  
          // success(function(data, status, headers, config) {  
          //   deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了  
          // }).  
          // error(function(data, status, headers, config) {  
          //   deferred.reject(data);   // 声明执行失败，即服务器返回错误  
          // });  
          return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API  
        //return $resource(queryinsuranceapi, {}, {});
      },
      startInsurance : function(obj){
          var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行  
          $http({method: 'GET', params: obj, url: startinsuranceapi}).then(
            function(data){
                deferred.resolve(data.data);
            },
            function(data){
                deferred.reject(data.data);
            });
          // success(function(data, status, headers, config) {  
          //   deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了  
          // }).  
          // error(function(data, status, headers, config) {  
          //   deferred.reject(data);   // 声明执行失败，即服务器返回错误  
          // });  
          return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API  
      },
      stopInsurance : function(obj){
          var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行  
          $http({method: 'GET', params: obj, url: stopinsuranceapi}).then(
            function(data){
                deferred.resolve(data.data);
            },
            function(data){
                deferred.reject(data.data);
            });
          // success(function(data, status, headers, config) {  
          //   deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了  
          // }).  
          // error(function(data, status, headers, config) {  
          //   deferred.reject(data);   // 声明执行失败，即服务器返回错误  
          // });  
          return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API  
      }
       
    };

};

module.exports = service;