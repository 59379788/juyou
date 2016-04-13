/**
 * 子模块service
 * dlq
 */
var service = function($resource, BASEURL38985, $q, $http){

    //查询景区下拉列表
    var viewlist = BASEURL38985 + "/api/as/tc/type2/viewlist";

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




    
    return {

    	tktcreate : function(){
            return $resource(tktcreate, {}, {});
        },
        tktinfo : function(){
            return $resource(tktinfo, {}, {});
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
        sel_id : function(){
            return $resource(sel_id, {}, {});
        },
        viewlist : function(obj){
    		var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行  
			$http({method: 'GET', params: obj, url: viewlist}).  
			success(function(data, status, headers, config) {  
				deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了  
			}).  
			error(function(data, status, headers, config) {  
				deferred.reject(data);   // 声明执行失败，即服务器返回错误  
			});  
			return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API 
	    },
	    attrlistsel : function(obj){
    		var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行  
			$http({method: 'GET', params: obj, url: attrlist}).  
			success(function(data, status, headers, config) {  
				deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了  
			}).  
			error(function(data, status, headers, config) {  
				deferred.reject(data);   // 声明执行失败，即服务器返回错误  
			});  
			return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API 
	    },
	    typelist : function(){
    		return $resource(typelist, {}, {});
    	}

       
    };

};

module.exports = service;