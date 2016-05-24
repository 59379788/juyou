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

    //var role = SYS + '/a/sys/user/ajaxform'

    var changepassword = SYS + '/a/sys/user/ajaxmodifyPwd';

    var info = SYS + '/a/sys/user/ajaxform';

    var createmechanism = SYS + 'a/sys/office/save';
    
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
            return $resource(info, {}, {} );
        },
        changepassword : function(){
            return $resource(changepassword, {}, {} );
        },
        info : function(){
            return $resource(info, {}, {} );
        },
        createmechanism : function(){
            return $resource(createmechanism, {}, {} );
        }
       
    };

};

module.exports = service;