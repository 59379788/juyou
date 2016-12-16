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

  //------商客app------//


  // 查看活动申请人列表
  var findhelplist = BASEURL38985 + '/api/as/mc/meraskhelpdao/findhelplist';
  // 爱心活动列表
  var findactivityforadminlist = BASEURL38985 + '/api/as/mc/merloveactivedao/findactivityforadminlist';
  // 爱心活动下的支出列表
  var findinfobyidlist = BASEURL38985 + '/api/as/mc/merloveactiveoutdao/findinfobyidlist';
  // 添加支出记录
  var saverecord = BASEURL38985 + '/api/ac/mc/merloveactivityoutservice/save';
  // 更改活动状态为已开始
  var updateactivitystateztoone = BASEURL38985 + '/api/as/mc/merloveactivedao/updateactivitystateztoone';
  // 更改活动状态为未通过
  var updateactivitystatetothree = BASEURL38985 + '/api/as/mc/merloveactivedao/updateactivitystatetothree';
  // 捐献记录申请列表
  var findloveactivercordlist = BASEURL38985 + '/api/us/mc/merloveactivityrecorddao/findloveactivercordlist';
  // 审核捐献记录
  var updateronationstate = BASEURL38985 + '/api/as/mc/merloveactivityrecordserviceimpl/updateronationstate';
  // 求援审核
  var updatestate = BASEURL38985 + '/api/as/mc/meraskhelpdao/updatestate';
  // 新建活动
  var saveactivity = BASEURL38985 + '/api/ac/mc/merloveactivityserviceimpl/save';
  // 添加商品到为你推荐
  var savegood = BASEURL38985 + '/api/as/mc/merrecommendforyoudao/insertrecommend';
  // 添加商品类型
  var savetype = BASEURL38985 + '/api/as/mc/mertradetypedao/save';


  // 查看商品上架申请列表
  var findtradelist = BASEURL38985 + '/api/us/mc/mertradedao/findtradelist';

  // 查看全部说明
  var findExplainList = BASEURL38985 + '/api/as/mc/merexplaindao/findExplainList';
  // 保存说明
  var saveExplain = BASEURL38985 + '/api/as/mc/merexplaindao/saveExplain';
  // 修改说明
  var updateExplain = BASEURL38985 + '/api/as/mc/merexplaindao/updateExplain';
  // 删除说明
  var updateDel = BASEURL38985 + '/api/as/mc/merexplaindao/updateDel';
  


  //------评价模块------//
  





  //------评价模块------//

  //------商客app------//



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
        },
        findhelplist : function(){
             return $resource(findhelplist, {}, {});
        },
        updateactivitystateztoone : function(){
             return $resource(updateactivitystateztoone, {}, {});
        },
        updateactivitystatetothree : function(){
             return $resource(updateactivitystatetothree, {}, {});
        },
        findloveactivercordlist : function(){
             return $resource(findloveactivercordlist, {}, {});
        },
        updateronationstate : function(){
             return $resource(updateronationstate, {}, {});
        },
        updatestate : function(){
             return $resource(updatestate, {}, {});
        },
        saveactivity : function(){
             return $resource(saveactivity, {}, {});
        },
        savegood : function(){
             return $resource(savegood, {}, {});
        },
        savetype : function(){
             return $resource(savetype, {}, {});
        },
        findtradelist : function(){
             return $resource(findtradelist, {}, {});
        },
        findExplainList : function(){
             return $resource(findExplainList, {}, {});
        },
        saveExplain : function(){
             return $resource(saveExplain, {}, {});
        },
        updateExplain : function(){
             return $resource(updateExplain, {}, {});
        },
        updateDel : function(){
             return $resource(updateDel, {}, {});
        },
        findactivityforadminlist : function(){
             return $resource(findactivityforadminlist, {}, {});
        },
        findinfobyidlist : function(){
             return $resource(findinfobyidlist, {}, {});
        },
        saverecord : function(){
             return $resource(saverecord, {}, {});
        }
        
    }
};
module.exports = service;