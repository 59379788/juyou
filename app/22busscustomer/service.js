var service = function($resource, BASEURL38985, SYS, $q, $http){
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
   var confirmauthority = BASEURL38985 + '/api/ac/sc/sysSign/updatesysSign';
   // 删除一级权限
   var deleteauthority = BASEURL38985 + '/api/as/sc/syssigndao/savesysSign';
   //一级商客账号列表
   var hostlists = BASEURL38985 + '/api/as/sc/syssigndao/getByAppid';


   //一元券销售品列表
   var vouchersalelist = BASEURL38985 + '/api/as/tc/vouchersale/list';
   //一元券销售品创建
   var vouchersalecreate = BASEURL38985 + '/api/as/tc/vouchersale/create';
   //商家列表
   var businesslist = BASEURL38985 + '/api/as/tc/vouchersale/businesslist';
   //类别列表
   var typelist = BASEURL38985 + '/api/as/sc/dict/dictbytypelist';
   // 获取类型
   var typelists = BASEURL38985 + '/api/us/mc/mertradetypedao/findByTypeList';
   //一元券订单列表
   var orderlist = BASEURL38985 + '/api/as/tc/voucherorder/orderlist';
   //一元券码信息
   var voucherinfo = BASEURL38985 + '/api/as/tc/voucherorder/voucherlist';
   //在线支付订单列表
   var usedorderlist = BASEURL38985 + '/api/as/tc/voucherorder/usedorderlist';
   
   /*******数据字典管理*******/
   //保存修改字典
   var dictionary = BASEURL38985 + '/api/as/mc/mertradetypedao/save';
   //字典列表
   var findtradetypelist = BASEURL38985 + '/api/as/mc/mertradetypedao/findtradetypelist';
   //获取字典信息
   var getInfoById = BASEURL38985 + '/api/as/mc/mertradetypedao/getInfoById';
   //删除字典信息
   var deldictionary = BASEURL38985 + '/api/as/mc/mertradetypedao/del';
   //获取type列表
   var findTypeList = BASEURL38985 + '/api/us/mc/mertradetypedao/findTypeList';

  // 查看活动申请人列表
  var findhelplist = BASEURL38985 + '/api/as/mc/meraskhelpdao/findhelplist';
  // 爱心活动列表
  var findactivityforadminlist = BASEURL38985 + '/api/as/mc/merloveactivedao/findactivityforadminlist';
  // 义卖，捐助列表
  var findrecordforadminlist = BASEURL38985 + '/api/as/mc/merloveactivityrecorddao/findrecordforadminlist';
  // 我要捐物
  var savedonate = BASEURL38985 + '/api/ac/mc/merloveactivityrecordserviceimpl/saveadmin';
  // 审核义捐
  var updateronationstate = BASEURL38985 + '/api/ac/mc/merloveactivityrecordserviceimpl/updateronationstate';

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
  // // 审核捐献记录
  // var updateronationstate = BASEURL38985 + '/api/as/mc/merloveactivityrecordserviceimpl/updateronationstate';
  // 求援审核
  var updatestate = BASEURL38985 + '/api/as/mc/meraskhelpdao/updatestate';
  // 新建活动
  var saveactivity = BASEURL38985 + '/api/ac/mc/merloveactivityserviceimpl/save';


  
  // 易买列表
  var findgoodscantlist = BASEURL38985 + '/api/ac/mc/mertradeserviceimpl/findgoodscantlist';
  // 审核易卖
  var updatetraddestate = BASEURL38985 + '/api/ac/mc/mertradeserviceimpl/updatetraddestate';
  // 商品列表
  var findgoodsforadminlist =  BASEURL38985 + '/api/as/mc/mergoodsinfodao/findgoodsforadminlist';
  // 添加商品到为你推荐
  var savegood = BASEURL38985 + '/api/as/mc/merrecommendforyoudao/insertrecommend';
  // 取消为你推荐
  var updatestateztoone = BASEURL38985 + '/api/as/mc/merrecommendforyoudao/delforyou';
  // 添加商品类型
  var savetype = BASEURL38985 + '/api/as/mc/mertradetypedao/save';


 

  // 查看全部说明
  var findExplainList = BASEURL38985 + '/api/as/mc/merexplaindao/findExplainList';
  // 查看单条说明
  var getAdminExplain = BASEURL38985 + '/api/as/mc/merexplaindao/getAdminExplain';
  // 保存说明
  var saveExplain = BASEURL38985 + '/api/as/mc/merexplaindao/saveExplain';
  // 修改说明
  var updateExplain = BASEURL38985 + '/api/as/mc/merexplaindao/updateExplain';
  // 删除说明
  var updateDelIns = BASEURL38985 + '/api/as/mc/merexplaindao/updateDel';
  

  // 评价列表
  var findReplyList = BASEURL38985 + '/api/us/rc/remreplydao/findReplyList';
  // 更改评价审核状态
  var updateStatus = BASEURL38985 + '/api/as/rc/remreplydao/updateStatus';

  // 积分商城商品列表
  var findSaleList = BASEURL38985 + '/api/as/mc/merintegralmal/findSaleList';
  // 积分商城商品详情
  var getInfoBySaleCode = BASEURL38985 + '/api/as/mc/merintegralmal/getInfoBySaleCode';
  // 保存商品
  var saveIntegralGood = BASEURL38985 + '/api/as/mc/merintegralmal/save';
  // 删除商品
  var updateIntegral = BASEURL38985 + '/api/as/mc/merintegralmal/updateDel';
  // 修改商品详情
  var updateMal = BASEURL38985 + '/api/as/mc/merintegralmal/updateMal';


  // 商客头条列表
  var headlinelist = BASEURL38985 + '/api/us/gc/news/findTitleInfolist';
  // 添加商客头条
  var saveheadline = BASEURL38985 + '/api/as/gc/news/saveinfo';
  // 删除头条
  var delheadline = BASEURL38985 + '/api/as/gc/news/del';
  // 头条详情
  var getContentsInfo = BASEURL38985 + '/api/as/gc/news/getContentsInfo';
  // 编辑头条
  var updateNews = BASEURL38985 + '/api/as/gc/news/updateNews';
  
  // 轮播图列表
  var findNewsRollinginfolist = BASEURL38985 + '/api/as/gc/rollingpicture/findNewsRollinginfolist';
  // 添加轮播图
  var saveNewsPhoto = BASEURL38985 + '/api/as/gc/rollingpicture/saveNewsPhoto';
  // 删除轮播图
  var delNewsPhoto = BASEURL38985 + '/api/as/gc/rollingpicture/del';
  // 根据id获取轮播图详情
  var getNewsRollingInfoById = BASEURL38985 + '/api/as/gc/rollingpicture/getNewsRollingInfoById';
  // 修改轮播图
  var updateRolling = BASEURL38985 + '/api/as/gc/rollingpicture/updateRolling';

  /****** 杀价帮 *******/

  //查询销售品（全部）
  var salelist = BASEURL38985 + '/api/as/tc/sale/alllist';
  // 活动列表
  var findManageActiveList = BASEURL38985 + '/api/as/ac/aactactive/findManageActiveList';
  // 查询活动
  var findCheckActiveList = BASEURL38985 + '/api/as/ac/aactactive/findCheckActiveList';
  // 创建活动
  var saveActive = BASEURL38985 + '/api/as/ac/aactactive/saveActive';
  // 编辑活动
  var updateActiveInfo = BASEURL38985 + '/api/as/ac/aactactive/updateActiveInfo';
  // 根据活动id查询活动详情接口
  var getActiveInfo = BASEURL38985 + '/api/as/ac/aactactive/getActiveInfo';
  // 开启活动
  var updateActiveStart = BASEURL38985 + '/api/as/ac/aactactive/updateActiveStart';
  // 结束活动
  var updateActiveEnd = BASEURL38985 + '/api/as/ac/aactactive/updateActiveEnd';
  // 参与用户列表
  var findJoinUserList = BASEURL38985 + '/api/as/ac/aactactive/findJoinUserList';
  // 查询用户列表接口
  var getJoinUser = BASEURL38985 + '/api/as/ac/aactactive/getJoinUser';
  // 奖品列表
  var findPrizeList = BASEURL38985 + '/api/as/ac/aactactive/findPrizeList';
  // 添加奖品
  var savePrize = BASEURL38985 + '/api/as/ac/aactactive/savePrize';
  // 删除奖品
  var updateDel = BASEURL38985 + '/api/as/ac/aactactive/updateDel';
  // 编辑奖品
  var updatePrize = BASEURL38985 + '/api/as/ac/aactactive/updatePrize';
  // // 奖品详情
  // var getPrize = BASEURL38985 + '/api/as/ac/aactactive/getPrize';
  // 中奖用户列表
  var findWinPrizeUserList = BASEURL38985 + '/api/as/ac/aactactive/findWinPrizeUserList';
  // 查询中奖用户
  var getWinPrizeUser = BASEURL38985 + '/api/as/ac/aactactive/getWinPrizeUser';
  // 根据奖品id获取奖品详情
  var getPrize = BASEURL38985 + '/api/as/ac/aactactive/getPrize';
  /****** 杀价帮 *******/

  /****** 看广告 *******/
  // 广告列表
  var findViewList = BASEURL38985 + '/api/as/gc/viewad/findViewList';
  // 添加广告
  var saveAd = BASEURL38985 + '/api/ac/gc/viewadService/saveView';
  // 删除广告
  var deletead = BASEURL38985 + '/api/as/gc/viewad/del';
  // 根据id获取广告详情
  var getViewInfoById = BASEURL38985 + '/api/as/gc/viewad/getViewInfoById';
  // 编辑广告
  var updateView = BASEURL38985 + '/api/ac/gc/viewadService/updateView';

  /****** 看广告 *******/

  /****** 热搜 *******/ 
  //热搜列表
  var findHotSearchList = BASEURL38985 + '/api/as/mc/merhotsearchdao/findHotSearchList';
  // 热搜详情
  var getHotSearchById = BASEURL38985 + '/api/as/mc/merhotsearchdao/getHotSearchById';
  // 编辑热搜
  var updateHotSearch = BASEURL38985 + '/api/as/mc/merhotsearchdao/updateHotSearch';
  // 删除热搜
  var deleteHotSearch = BASEURL38985 + '/api/as/mc/merhotsearchdao/updatedel';
  // 添加热搜
  var saveHotSearch = BASEURL38985 + '/api/as/mc/merhotsearchdao/save';
  /****** 热搜 *******/ 

  /****** 预约 *******/ 
  // 预约列表
  var findMakeAppointmentList = BASEURL38985 + '/api/as/mc/mermakeappointmentdao/findMakeAppointmentList';
  // 添加预约
  var insertMakeAppointment = BASEURL38985 + '/api/as/mc/mermakeappointmentdao/insertMakeAppointment';
  // 修改预约
  var updateMakeAppointment = BASEURL38985 + '/api/as/mc/mermakeappointmentdao/updateMakeAppointment';
  // 根据id获得详情
  var getMakeAppointmentById = BASEURL38985 + '/api/as/mc/mermakeappointmentdao/getMakeAppointmentById';
  // 删除
  var delMakeAppointment = BASEURL38985 + '/api/as/mc/mermakeappointmentdao/updateDel';
  // 预约人列表
  var findUserInfoList = BASEURL38985 + '/api/as/mc/mermakeappointmentdao/findUserInfoList';
  // 票种
  var ticketlist = BASEURL38985 + '/api/as/tc/salettype/list';

  /****** 预约 *******/ 

  /****** 添加商客账户管理 *******/ 
  var mechanism = SYS + '/a/sys/office/treeData';

  var list = SYS + '/a/sys/user/ajaxlist';

  var createmechanism = SYS + '/a/sys/office/ajaxsave';

  // 退款模块
  var orderbacklist = BASEURL38985 + "/api/as/tc/ticketorderback/orderbacklist";
  var orderback = BASEURL38985 + "/api/ac/tc/ticketOrderService/updatebackmoneybycode";
  
  // 积分提现申请列表
  var findOrdertTXList = BASEURL38985 + '/api/as/tc/ordertixian/findOrdertTXList';
  // 修改提现状态
  var updateTiXian = BASEURL38985 + '/api/as/tc/ordertixian/updateTiXian';

  // 资讯列表
  var findInformationList = BASEURL38985 + '/api/as/mc/merinformation/findInformationList';
  // 添加资讯
  var saveInformation = BASEURL38985 + '/api/as/mc/merinformation/saveInformation';
  // 详情
  var getInformation = BASEURL38985 + '/api/as/mc/merinformation/getInformation';
  // 编辑
  var updateinformation = BASEURL38985 + '/api/as/mc/merinformation/updateinformation';
  // 删除
  var delinformation = BASEURL38985 + '/api/as/mc/merinformation/updateDel';

  // 积分充值
  var getUserInfoList = BASEURL38985 + '/api/ac/tc/ticketOrderService/getUserInfoList';
  var saveRechargeIntegral = BASEURL38985 + '/api/ac/cc/coinintegral/saveRechargeIntegral';

  // 平台下一级商户列表
  var classAList = BASEURL38985 + '/a/sys/office/treeData';
  // 设置限定人数
  var saveLimit = BASEURL38985 + '/api/ac/tc/tktdealerapplyservice/saveLimit';
  // 查看人数
  var getlimit =  BASEURL38985 + '/api/as/tc/tktdealerapplydao/getLimit';

    return {
        //模型
        model : function(){
            return { 
                trip_info : ""
            };
        },

        triparray : [],

         //初始化信息
         init : function(){
           var trip = this.triparray[i];
                    trip.uploader = new FileUploader({
                        url: 'http://cl.juyouhx.com/oss.php/oss/webuploader1?topdir=line&selfdir=trip'
                    });
                    trip.uploader.dlq = trip;
                    trip.uploader.onSuccessItem = function(fileItem, response, status, headers) {
                        this.dlq.img = response.savename;
                    };
                    trip.uploader.filters.push({
                        name: 'imageFilter',
                        fn: function(item /*{File|FileLikeObject}*/, options) {
                            var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
                        }
                    });
                    return $resource(init, {}, {});
                  },

        //绑定图片控件。
        bindimgcom : function(){
                
        },    

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
        vouchersalelist : function(){
             return $resource(vouchersalelist, {}, {});
        },
        vouchersalecreate : function(){
             return $resource(vouchersalecreate, {}, {});
        },
        businesslist : function(obj){
            var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行  
            $http({method: 'GET', params: obj, url: businesslist}).then(
                function(data){
                    deferred.resolve(data.data);
                },
                function(data){
                    deferred.reject(data.data);
                });
            // success(function(data, status, headers, config) {  
            //     deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了  
            // }).  
            // error(function(data, status, headers, config) {  
            //     deferred.reject(data);   // 声明执行失败，即服务器返回错误  
            // });  
            return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API 
        },
        typelist : function(obj){
            var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行  
            $http({method: 'GET', params: obj, url: typelist}).then(
                function(data){
                    deferred.resolve(data.data);
                },
                function(data){
                    deferred.reject(data.data);
                });  
            // success(function(data, status, headers, config) {  
            //     deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了  
            // }).  
            // error(function(data, status, headers, config) {  
            //     deferred.reject(data);   // 声明执行失败，即服务器返回错误  
            // });  
            return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API 
        },
        typelists : function(){
             return $resource(typelists, {}, {});
        },
        orderlist : function(){
             return $resource(orderlist, {}, {});
        },
        voucherinfo : function(){
             return $resource(voucherinfo, {}, {});
        },
        usedorderlist : function(){
             return $resource(usedorderlist, {}, {});
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
        updateDelIns : function(){
             return $resource(updateDelIns, {}, {});
        },
        findactivityforadminlist : function(){
             return $resource(findactivityforadminlist, {}, {});
        },
        findinfobyidlist : function(){
             return $resource(findinfobyidlist, {}, {});
        },
        saverecord : function(){
             return $resource(saverecord, {}, {});
        },
        findReplyList : function(){
             return $resource(findReplyList, {}, {});
        },
        updateStatus : function(){
             return $resource(updateStatus, {}, {});
        },
        findrecordforadminlist : function(){
             return $resource(findrecordforadminlist, {}, {});
        },
        savedonate : function(){
             return $resource(savedonate, {}, {});
        },
        findgoodscantlist : function(){
             return $resource(findgoodscantlist, {}, {});
        },
        updatetraddestate : function(){
             return $resource(updatetraddestate, {}, {});
        },
        findgoodsforadminlist : function(){
             return $resource(findgoodsforadminlist, {}, {});
        },
        getAdminExplain : function(){
             return $resource(getAdminExplain, {}, {});
        },
        findSaleList : function(){
             return $resource(findSaleList, {}, {});
        },
        getInfoBySaleCode : function(){
             return $resource(getInfoBySaleCode, {}, {});
        },
        saveIntegralGood : function(){
             return $resource(saveIntegralGood, {}, {});
        },
        updateIntegral : function(){
             return $resource(updateIntegral, {}, {});
        },
        updateMal : function(){
             return $resource(updateMal, {}, {});
        },
        updatestateztoone : function(){
             return $resource(updatestateztoone, {}, {});
        },
        headlinelist : function(){
             return $resource(headlinelist, {}, {});
        },
        saveheadline : function(){
             return $resource(saveheadline, {}, {});
        },
        findNewsRollinginfolist : function(){
             return $resource(findNewsRollinginfolist, {}, {});
        },
        saveNewsPhoto : function(){
             return $resource(saveNewsPhoto, {}, {});
        },
        findManageActiveList : function(){
             return $resource(findManageActiveList, {}, {});
        },
        findCheckActiveList : function(){
             return $resource(findCheckActiveList, {}, {});
        },
        getActiveInfo : function(){
             return $resource(getActiveInfo, {}, {});
        },
        saveActive : function(){
             return $resource(saveActive, {}, {});
        },
        updateActiveInfo : function(){
             return $resource(updateActiveInfo, {}, {});
        },
        findJoinUserList : function(){
             return $resource(findJoinUserList, {}, {});
        },
        getJoinUser : function(){
             return $resource(getJoinUser, {}, {});
        },
        findPrizeList : function(){
             return $resource(findPrizeList, {}, {});
        },
        savePrize : function(){
             return $resource(savePrize, {}, {});
        },
        updateDel : function(){
             return $resource(updateDel, {}, {});
        },
        updatePrize : function(){
             return $resource(updatePrize, {}, {});
        },
        getPrize : function(){
             return $resource(getPrize, {}, {});
        },
        findWinPrizeUserList : function(){
             return $resource(findWinPrizeUserList, {}, {});
        },
        getWinPrizeUser : function(){
             return $resource(getWinPrizeUser, {}, {});
        },
        delheadline : function(){
             return $resource(delheadline, {}, {});
        },
        delNewsPhoto : function(){
             return $resource(delNewsPhoto, {}, {});
        },
        updateNews : function(){
             return $resource(updateNews, {}, {});
        },
        getContentsInfo : function() {
          return $resource(getContentsInfo, {}, {});
        },
        saveAd : function() {
          return $resource(saveAd, {}, {});
        },
        findViewList : function() {
          return $resource(findViewList, {}, {});
        },
        salelist : function() {
          return $resource(salelist, {}, {});
        },
        deletead : function() {
          return $resource(deletead, {}, {});
        },
        getNewsRollingInfoById : function() {
          return $resource(getNewsRollingInfoById, {}, {});
        },
        updateRolling : function() {
          return $resource(updateRolling, {}, {});
        },
        getViewInfoById : function() {
          return $resource(getViewInfoById, {}, {});
        },
        updateView : function() {
          return $resource(updateView, {}, {});
        },
        updateActiveStart : function() {
          return $resource(updateActiveStart, {}, {}); // 开启活动
        },
        updateActiveEnd : function() {
          return $resource(updateActiveEnd, {}, {}); // 结束活动
        },
        findHotSearchList : function() {
          return $resource(findHotSearchList, {}, {}); // 结束活动
        },
        getHotSearchById : function() {
          return $resource(getHotSearchById, {}, {}); // 结束活动
        },
        updateHotSearch : function() {
          return $resource(updateHotSearch, {}, {}); // 结束活动
        },
        deleteHotSearch : function() {
          return $resource(deleteHotSearch, {}, {}); // 结束活动
        },
        saveHotSearch : function() {
          return $resource(saveHotSearch, {}, {}); // 结束活动
        },
        dictionary : function(){
          return $resource(dictionary,{},{});
        },
        findtradetypelist : function(){
          return $resource(findtradetypelist,{},{});
        },
        getInfoById : function(){
          return $resource(getInfoById,{},{});
        },
        deldictionary : function(){
          return $resource(deldictionary,{},{});
        },
        findTypeList : function(){
          return $resource(findTypeList,{},{});
        },
        findMakeAppointmentList : function(){
          return $resource(findMakeAppointmentList,{},{});
        },
        insertMakeAppointment : function(){
          return $resource(insertMakeAppointment,{},{});
        },
        updateMakeAppointment : function(){
          return $resource(updateMakeAppointment,{},{});
        },
        getMakeAppointmentById : function(){
          return $resource(getMakeAppointmentById,{},{});
        },
        delMakeAppointment : function(){
          return $resource(delMakeAppointment,{},{});
        },
        findUserInfoList : function(){
          return $resource(findUserInfoList,{},{});
        },
        ticketlist : function(){
          return $resource(ticketlist,{},{});
        },
        mechanism : function(){
          return $resource(mechanism,{},{});
        },
        list : function(){
          return $resource(list,{},{});
        },
        createmechanism : function(){
          return $resource(createmechanism,{},{});
        },
        orderbacklist : function(){
            return $resource(orderbacklist, {}, {});
        },
        orderback : function(){
            return $resource(orderback, {}, {});
        },
        findOrdertTXList : function(){
            return $resource(findOrdertTXList, {}, {});
        },
        updateTiXian : function(){
            return $resource(updateTiXian, {}, {});
        },
        findInformationList : function(){
            return $resource(findInformationList, {}, {});
        },
        saveInformation : function(){
            return $resource(saveInformation, {}, {});
        },
        getInformation : function(){
            return $resource(getInformation, {}, {});
        },
        updateinformation : function(){
            return $resource(updateinformation, {}, {});
        },
        delinformation : function(){
            return $resource(delinformation, {}, {});
        },
        getUserInfoList : function(){
            return $resource(getUserInfoList, {}, {});
        },
        saveRechargeIntegral : function(){
            return $resource(saveRechargeIntegral, {}, {});
        },
        classAList : function(){
            return $resource(classAList, {}, {});
        },
        saveLimit : function(){
            return $resource(saveLimit, {}, {});
        },
        deleteauthority : function(){
            return $resource(deleteauthority, {}, {});
        },
        getlimit : function(){
            return $resource(getlimit, {}, {});
        }


    }
};
module.exports = service;