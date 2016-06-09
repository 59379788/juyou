/**
 * 子模块service
 * dlq
 */
var service = function($resource, BASEURL38985, $q, $http){

    //var saleNameList = BASEURL38985 + '/api/as/tc/sale/saleNameList';

    var saleNameList = BASEURL38985 + '/api/as/tc/sale/saleNameBySubsidyList';

    var saleInfo = BASEURL38985 + '/api/as/tc/sale/saleInfo';
    
    var grouplist = BASEURL38985 + '/api/as/tc/grouporder/grouplist';

    var createOrder = BASEURL38985 + '/api/ac/tc/groupOrderService/createOrder';

    var groupsalelist = BASEURL38985 + '/api/as/tc/grouporder/groupsalelist';

    var groupsale = BASEURL38985 + '/api/as/tc/grouporder/groupsale';

    var update = BASEURL38985 + '/api/as/tc/grouporder/update';

    var updatedetail = BASEURL38985 + '/api/as/tc/grouporder/updatedetail';

    var groupdetail = BASEURL38985 + '/api/as/tc/grouporder/groupdetaillist';

    var groupone = BASEURL38985 + '/api/as/tc/grouporder/groupone';

    var userinfo = BASEURL38985 + "/api/as/info";

    var usersubsibyquery = BASEURL38985 + "/api/ac/uc/userService/getUserInfoByMobileP";

    var goodlist = BASEURL38985 + "/api/as/tc/grouporder/goodlist";

    var getattrbycode = BASEURL38985 + "/api/as/tc/grouporder/getattrbycode";

    var infolist = BASEURL38985 + "/api/as/tc/grouporder/infolist";

    var signup = BASEURL38985 + "/api/ac/tc/ticketGroupOrderService/createOrderInfo";
    
    var cancleGroup = BASEURL38985 + "/api/ac/tc/ticketGroupOrderService/cancleGroup";


    
    return {
        namelist : function(){
            return $resource(saleNameList, {}, {});
        },
        info : function(){
            return $resource(saleInfo, {}, {});
        },
        grouplist : function(){
            return $resource(grouplist, {}, {});
        },
        createOrder : function(){
            return $resource(createOrder, {}, {});
        },
        groupsalelist : function(obj){
    		var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行  
			$http({method: 'GET', params: obj, url: groupsalelist}).  
			success(function(data, status, headers, config) {  
				deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了  
			}).  
			error(function(data, status, headers, config) {  
				deferred.reject(data);   // 声明执行失败，即服务器返回错误  
			});  
			return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API 
	    },
        groupsale : function(){
            return $resource(groupsale, {}, {});
        },
        update : function(){
            return $resource(update, {}, {});
        },
        updatedetail : function(){
            return $resource(updatedetail, {}, {});
        },
        groupdetail : function(){
            return $resource(groupdetail, {}, {});
        },
        groupone : function(){
            return $resource(groupone, {}, {});
        },
        usersubsibyquery : function(){
            return $resource(usersubsibyquery, {}, {});
        },
        goodlist : function(){
            return $resource(goodlist, {}, {});
        },
        getattrbycode : function(){
            return $resource(getattrbycode, {}, {});
        },
        infolist : function(){
            return $resource(infolist, {}, {});
        },
        signup : function(){
            return $resource(signup, {}, {});
        },
        cancleGroup : function(){
            return $resource(cancleGroup, {}, {});
        },
        userinfo : function(){
          var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行  
          $http({method: 'GET', url: userinfo}).
          success(function(data, status, headers, config) {  
            deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了  
          }).  
          error(function(data, status, headers, config) {  
            deferred.reject(data);   // 声明执行失败，即服务器返回错误  
          });  
          return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API  
        //return $resource(createinsuranceapi, {}, {});
  		}
       
    };

};

module.exports = service;