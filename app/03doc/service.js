/**
 * 子模块service
 * dlq
 */
var service = function($resource, BASEURL38985){

	//var url = BASEURL + "/tktapi/sc";

    var group = BASEURL38985 + '/api/us/sc/apidoc/apinamelist';//?group_id=1

    var api = BASEURL38985 + '/api/us/sc/apidoc/apiinfolist';//?api_id=1

    var insert = BASEURL38985 + '/api/us/sc/apidoc/insert';

    var update = BASEURL38985 + '/api/us/sc/apidoc/update';

    var getinfo = BASEURL38985 + '/api/us/sc/apidoc/get';

    var del = BASEURL38985 + '/api/us/sc/apidoc/deleteByLogic';


    
    return {

    	group : function(){
            return $resource(group, {}, {});
        },
        api : function(){
            return $resource(api, {}, {});
        },
        insert : function(){
            return $resource(insert, {}, {});
        },
        update : function(){
            return $resource(update, {}, {});
        },
        getinfo : function(){
            return $resource(getinfo, {}, {});
        },
        del : function(){
            return $resource(del, {}, {});
        }
      
    };

};

module.exports = service;