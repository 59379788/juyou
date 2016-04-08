/**
 * 子模块service
 * dlq
 */
var service = function($resource, BASEURL38985, $q, $http){

    var list = BASEURL38985 + "/api/as/tc/placeview/list";

    var create = BASEURL38985 + "/api/as/tc/placeview/create";
    
    var info = BASEURL38985 + "/api/as/tc/placeview/info";

    var update = BASEURL38985 + "/api/as/tc/placeview/update";


    
    return {

        list : function(){
            return $resource(list, {}, {});
        },
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