/**
 * 子模块service
 * dlq
 */
var service = function($resource, BASEURL38985, SYS){

    //var list = BASEURL38985 + "/api/as/tc/placeview/list";

    //机构
    var mechanism = SYS + '/a/sys/office/treeData';

    //
    var list = SYS + '/a/sys/user/ajaxlist';

    var create = SYS + '/a/sys/user/ajaxsave';

    var role = SYS + '/a/sys/user/ajaxform'
    
    return {

        mechanism : function(){
            return $resource(mechanism, {}, {} );
        },
        list : function(){
            return $resource(list, {}, {} );
        },
        create : function(){
            return $resource(create, {}, {} );
        },
        role : function(){
            return $resource(role, {}, {} );
        }
       
    };

};

module.exports = service;