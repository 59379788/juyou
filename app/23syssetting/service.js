/**
 * 子模块service
 * ml
 */
var service = function($resource, BASEURL38985){

    //添加或修改应用
    var sysappsave = BASEURL38985 + '/api/as/sc/sysapiurl/save';

    //删除应用
    var sysappdelete = BASEURL38985 + '/api/as/sc/sysapiurl/delete';

    //通过ID查找应用
    var sysappgetById = BASEURL38985 + '/api/as/sc/sysapiurl/getById';

    //获取应用列表应用
    var sysappgetUrlList = BASEURL38985 + '/api/as/sc/sysapiurl/getUrlList';

    //获取登录信息
    var userinfo = BASEURL38985 + "/api/as/info";
    
    return {
        sysappsave : function(){
            return $resource(sysappsave, {}, {});
        },
        sysappdelete : function(){
            return $resource(sysappdelete, {}, {});
        },
        sysappgetById : function(){
            return $resource(sysappgetById, {}, {});
        },
        sysappgetUrlList : function(){
            return $resource(sysappgetUrlList, {}, {});
        },
        userinfo : function(){
            return $resource(userinfo, {}, {});
        }
    }
};
module.exports = service;