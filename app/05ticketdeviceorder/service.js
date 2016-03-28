/**
 * 子模块service
 * djp
 */
var service = function($resource){

	var url = "http://115.28.145.50:38985/api/us/tc";

   	var destorytotalbytypelist = url + "/devicequerycount/destorytotalbytypelist";

   	var grouptotalbytpyelist = url + "/devicequerycount/grouptotalbytpyelist";

   	var grouptotaltodaylist = url + "/devicequerycount/grouptotaltodaylist";

   	var grouptotaltomlist = url + "/devicequerycount/grouptotaltomlist";

   	var receliptlist = url + "/devicequerycount/receliptlist";

   	var receliptinfo = url + "/devicequerycount/receliptinfo";

   	var receliptprint = url + "/devicequerycount/receliptprint";

   	
    
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