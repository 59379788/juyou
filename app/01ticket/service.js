/**
 * 子模块service
 * dlq
 */
var service = function($resource, BASEURL){

	var url = BASEURL + "/tktapi/uc/te";

    var checkid = url + "/queryService/byID";

    var checkcard = url + "/queryService/byCard";

    var checkcode = url + "/queryService/byCode";
    
    return {

    	checkid : function(){
            return $resource(checkid, {}, {});
        },
        checkcard : function(){
            return $resource(checkcard, {}, {});
        },
        checkcode : function(){
            return $resource(checkcode, {}, {});
        }
      
    };

};

module.exports = service;