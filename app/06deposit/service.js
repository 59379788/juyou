/**
 * 子模块service
 * dlq
 */
var service = function($resource, BASEURL38985, $q, $http){

    //获取全部商户数据
    //var list = BASEURL38985 + '/api/as/tc/bmaccount/sellerInfoList';
    var list = BASEURL38985 + '/api/ac/tc/ticketBmAccountService/sellerInfoList';


    //获取商户数据通过code
	var getSellerInfoByCode = BASEURL38985 + '/api/as/tc/bmaccount/getSellerInfoByCode';

	//更新商户最大余额
	var update = BASEURL38985 + '/api/as/tc/bmaccount/updatebalance';

	//录入商户预存数据
	var create = BASEURL38985 + '/api/as/tc/bmaccount/insert';

	//查询充值记录
	var getSellerTrackInfoByCodeList = BASEURL38985 + '/api/as/tc/bmaccounttrack/getSellerTrackInfoByCodeList';

	//商户列表
	var talist = BASEURL38985 + '/api/as/sc/office/getofficelist';

	//充值
	var recharge = BASEURL38985 + '/api/ac/tc/ticketBmAccountService/updateRechargeBySellerCode';
    
    return {

    	list : function(){
            return $resource(list, {}, {});
        },
        getSellerInfoByCode : function(){
            return $resource(getSellerInfoByCode, {}, {});
        },
        update : function(){
            return $resource(update, {}, {});
        },
        create : function(){
            return $resource(create, {}, {});
        },
        trackinfo : function(){
            return $resource(getSellerTrackInfoByCodeList, {}, {});
        },
        talist : function(obj){
            var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行  
            $http({method: 'GET', params: obj, url: talist}).  
            success(function(data, status, headers, config) {  
                deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了  
            }).  
            error(function(data, status, headers, config) {  
                deferred.reject(data);   // 声明执行失败，即服务器返回错误  
            });  
            return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API 
        },
        recharge : function(){
            return $resource(recharge, {}, {});
        }
       
    };

};

module.exports = service;