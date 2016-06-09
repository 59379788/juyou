/**
 * 子模块service
 * djp
 */
var service = function($resource, BASEURL38985){

    var mylist = BASEURL38985 + "/api/as/tc/notice/mylist";

    var myinfo = BASEURL38985 + "/api/as/tc/notice/myinfo";
    
    var create = BASEURL38985 + "/api/as/tc/notice/create";

    var update = BASEURL38985 + "/api/as/tc/notice/update";
    
    return {

        mylist : function(){
            return $resource(mylist, {}, {});
        },
    	myinfo : function(){
            return $resource(myinfo, {}, {});
        },
        create : function(){
            return $resource(create, {}, {});
        },
        update : function(){
            return $resource(update, {}, {});
        }
       
    };

};

module.exports = service;