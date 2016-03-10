/**
 * 子模块service
 * dlq
 */
var service = function($resource, BASEURL38985){

	//var url = BASEURL + "/tktapi/sc";

    var group = BASEURL38985 + '/api/us/sc/apidoc/apinamelist';//?group_id=1

    var api = BASEURL38985 + '/api/us/sc/apidoc/apiinfolist';//?api_id=1
    
    return {

    	group : function(){
            return $resource(group, {}, {});
        },
        api : function(){
            return $resource(api, {}, {});
        }
      
    };

};

module.exports = service;