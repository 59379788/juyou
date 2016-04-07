/**
 * 子模块service
 * dlq
 */
var service = function($resource, BASEURL38985, $q, $http){

    var create = BASEURL38985 + "/api/as/tc/place/create";

    var info = BASEURL38985 + "/api/as/tc/place/info";

    var update = BASEURL38985 + "/api/as/tc/place/update";

    
    return {
        create : function(){
            return $resource(create, {}, {});
        },
    	info : function(){
            return $resource(info, {}, {});
        },
        update : function(){
            return $resource(update, {}, {});
        }
       
    };

};

module.exports = service;