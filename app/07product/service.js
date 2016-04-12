/**
 * 子模块service
 * dlq
 */
var service = function($resource, BASEURL38985, $q, $http){

<<<<<<< HEAD
    //查询景区下拉列表
    var viewlist = BASEURL38985 + "/api/as/tc/type2/viewlist";
=======
	//var url = BASEURL + "/tktapi/sc";

    //var group = BASEURL38985 + '/api/us/sc/apidoc/apinamelist';//?group_id=1

    //景区简表
    //var slist = BASEURL38985 + "/api/as/tc/view/adminViewForTicketList";

    //查询景区列表
    var list = BASEURL38985 + "/api/as/tc/type2/typelist";
>>>>>>> juyou/master

    //创建票种
    var tktcreate = BASEURL38985 + '/api/as/tc/type2/create';

    //票种信息
    var tktinfo = BASEURL38985 + '/api/as/tc/type2/info';

    //修改票种
    var tktupdate = BASEURL38985 + '/api/as/tc/type2/update';

    //票种列表
    var tktlist = BASEURL38985 + '/api/as/tc/type2/typelist';

    //创建属性
    var attrcreate = BASEURL38985 + '';




    
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
	    tktlist : function(){
    		return $resource(tktlist, {}, {});
    	}

       
    };

};

module.exports = service;