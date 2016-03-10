/**
 * 子模块service
 * dlq
 */
var service = function($resource, BASEURL){

	var url = BASEURL + "/tktapi/sc";

    var checkid = url + "/queryService/byID";

    var checkcard = url + "/queryService/byCard";

    var checkcode = url + "/queryService/byCode";

    var checkgroupcode = url + "/queryService/byGroupCode";

   	var useticketbyid = url + "/destoryService/updateByID";

   	var useticketbycode = url + "/destoryService/updateByCode";

   	var useticketbycard = url + "/destoryService/updateByCard";

   	var useticketbygroupcode = url + "/destoryService/updateByGroupCode";

   	
    
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
        checkgroupcode : function(){
            return $resource(checkgroupcode, {}, {});
        },
        useticketbyid : function(){
        	return $resource(useticketbyid, {}, {});
        },
        useticketbycode : function(){
        	return $resource(useticketbycode, {}, {});
        },
        useticketbycard : function(){
        	return $resource(useticketbycard, {}, {});
        },
        useticketbygroupcode : function(){
        	return $resource(useticketbygroupcode, {}, {});
        }
      
    };

};

module.exports = service;