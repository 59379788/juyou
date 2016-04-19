/**
 * 子模块service
 * dlq
 */
var service = function($resource, BASEURL38985){

	//var url = BASEURL + "/tktapi/sc";

    var group = BASEURL38985 + '/api/us/sc/apidoc/apinamelist';//?group_id=1


    
    return {

    	group : function(){
            return $resource(group, {}, {});
        }
       
    };

};

module.exports = service;