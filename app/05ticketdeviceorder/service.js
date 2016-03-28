/**
 * 子模块service
 * djp
 */
var service = function($resource, BASEURL38985){

	var url = BASEURL38985 + "/api/us/tc/devicequerycount";

   	var destorytotalbytypelist = url + "/destorytotalbytypelist";

   	var grouptotalbytpyelist = url + "/grouptotalbytpyelist";

   	var grouptotaltodaylist = url + "/grouptotaltodaylist";

   	var grouptotaltomlist = url + "/grouptotaltomlist";

   	var receliptlist = url + "/receliptlist";

   	var receliptinfo = url + "/receliptinfo";

   	var receliptprint = url + "/receliptprint";

   	
    
    return {

        destorytotalbytypelist : function(){
        	return $resource(destorytotalbytypelist, {}, {});
        },
        grouptotalbytpyelist : function(){
        	return $resource(grouptotalbytpyelist, {}, {});
        },
        grouptotaltodaylist : function(){
        	return $resource(grouptotaltodaylist, {}, {});
        },
        grouptotaltomlist : function(){
        	return $resource(grouptotaltomlist, {}, {});
        },
        receliptlist : function(){
        	return $resource(receliptlist, {}, {});
        },
        receliptinfo : function(){
        	return $resource(receliptinfo, {}, {});
        },
        receliptprint : function(){
        	return $resource(receliptprint, {}, {});
        }
      
    };

};

module.exports = service;