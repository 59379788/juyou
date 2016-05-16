/**
 * 子模块service
 * dlq
 */
var service = function($resource, BASEURL38985){

    //获取全部商户数据
    var list = BASEURL38985 + '/api/as/tc/bmaccount/sellerInfoList';

    //获取商户数据通过code
	var getSellerInfoByCode = BASEURL38985 + '/api/as/tc/bmaccount/getSellerInfoByCode';

	//更新商户最大余额
	var update = BASEURL38985 + '/api/as/tc/bmaccount/updatebalance';

	//录入商户预存数据
	var create = BASEURL38985 + '/api/as/tc/bmaccount/insert';

	//查询充值记录
	var getSellerTrackInfoByCodeList = BASEURL38985 + '/api/as/tc/bmaccounttrack/getSellerTrackInfoByCodeList';
    
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
        getSellerTrackInfoByCodeList : function(){
            return $resource(getSellerTrackInfoByCodeList, {}, {});
        }
       
    };

};

module.exports = service;