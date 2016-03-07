/**
 * 子模块service
 * dlq
 */
var service = function($resource, BASEURL){

	var url = BASEURL + "/tktapi/uc/te";

    var checkid = url + "/queryService/byID";

    var checkcard = url + "/queryService/byCard";

    var checkcode = url + "/queryService/byCode";

   	var useticketbyid = url + "/destoryService/updateByID";

   	var useticketbycode = url + "/destoryService/updateByCode";

   	var useticketbycard = url + "/destoryService/updateByCard";
    
    return {

    	checkid : function(){
            return $resource(checkid, {}, {});
        },
        checkcard : function(){
            return $resource(checkcard, {}, {});
        },
        checkcode : function(){
            return $resource(checkcode, {}, {});
        },
        useticketbyid : function(){
        	return $resource(useticketbyid, {}, {});
        },
        useticketbycode : function(){
        	return $resource(useticketbycode, {}, {});
        },
        useticketbycard : function(){
        	return $resource(useticketbycard, {}, {});
        }
      
    };

};

module.exports = service;