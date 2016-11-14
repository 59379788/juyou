var service = function($resource, BASEURL38985, SYS){
   // 商客列表
   var customerlist = BASEURL38985 + '/api/as/tc/tktdealerapplydao/finddealerapplylist';
   // 通过审核
   var review = BASEURL38985 + '/api/as/tc/tktdealerapplydao/updatestate';
   // 拒绝审核
   var failed = BASEURL38985 + '/api/as/tc/tktdealerapplydao/updatestateno';
   // 二级商客角色
   var role = SYS + '/a/sys/user/ajaxform';
   // 创建角色
   var create = SYS + '/a/sys/user/ajaxsave';
   // 短信
   var message = BASEURL38985 + '/api/ac/tc/tktdealerapplyservice/updatesms';
   // 用户信息
   var userinfo = BASEURL38985 + "/api/as/info";
   // 	插入账号密码
   var insertnops = BASEURL38985 + '/api/as/tc/tktdealerapplydao/save';
   // 供应商列表
   var supplierlist = BASEURL38985 + '/api/as/tc/sksupplierapplydao/findSupplierApplyList';
   // 二级供应商申请确认
   var saveconfirm = BASEURL38985 + '/api/as/tc/sksupplierapplydao/saveConfirm';
   // 一级供应商申请（获取权限）
   var confirmauthority = BASEURL38985 + '/api/as/sc/syssigndao/savesysSign';
   //一级商客账号列表
   var hostlists = BASEURL38985 + '/api/as/sc/syssigndao/getByAppid';
    return {
        customerlist : function(){
             return $resource(customerlist, {}, {});
        },
        review : function(){
             return $resource(review, {}, {});
        },
        role : function(){
             return $resource(role, {}, {});
        },
        create : function(){
             return $resource(create, {}, {});
        },
        message : function(){
             return $resource(message, {}, {});
        },
        userinfo : function(){
             return $resource(userinfo, {}, {});
        },
        insertnops : function(){
             return $resource(insertnops, {}, {});
        },
        failed : function(){
             return $resource(failed, {}, {});
        },
        supplierlist : function(){
             return $resource(supplierlist, {}, {});
        },
        saveconfirm : function(){
             return $resource(saveconfirm, {}, {});
        },
        confirmauthority : function(){
             return $resource(confirmauthority, {}, {});
        },
        hostlists : function(){
             return $resource(hostlists, {}, {});
        }
    }
};
module.exports = service;