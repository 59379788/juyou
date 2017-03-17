
var service = function($resource, BASEURL38985){
    //------------------ 卡基本信息 -----------------------//
    //添加卡段
    var insertCard = BASEURL38985 + '/api/ac/uc/cardBaseService/insertCard';
    //卡基本信息列表
    var cardbaselist = BASEURL38985 + 'api/uc/uc/cardBaseService/getAllCardInfo';
    // 设置批次号
    var batchnumber = BASEURL38985 + '/api/ac/uc/cardBaseService/updateNewCardBatch';
    // 修改制卡状态完成
    var changestatus = BASEURL38985 + '/api/ac/uc/cardBaseService/updateNewCardFinStatu';
    // 根据条件查询基本卡
    var searchcard = BASEURL38985 + '/api/ac/uc/cardBaseService/getCardBaseList';
    //------------------ 卡基本信息 -----------------------//

    
    //------------------ 卡池管理 -----------------------//
    // 卡池列表
    var cardpoollist = BASEURL38985 + '/api/as/uc/cardpooldao/findpoollist';
    // 删除卡
    //var deletecard = BASEURL38985 + '/api/as/gc/shakedevice/findlist';
    // 释放卡池
    //var releasecard = BASEURL38985 + '/api/ac/uc/cardpoolserviceimpl/releasecardpool';
    // 添加卡
    var addcard = BASEURL38985 + '/api/ac/uc/cardpoolserviceimpl/save';
    // 添加卡池
    var addcardpool = BASEURL38985 + '/api/ac/uc/cardpoolserviceimpl/savepool';
    // 释放卡池里面的卡
    var releasecard = BASEURL38985 + '/api/ac/uc/cardpoolserviceimpl/releasecardpoolupdate';
    // 卡池中卡的数量
    var cardinpool = BASEURL38985 + '/api/as/uc/cardpoolinfodao/getallhavegavebypool';
    // 卡池中卡列表
    var listinpool = BASEURL38985 + '/api/ac/uc/cardpoolserviceimpl/getcardlist';
    // 可添加到卡池的卡
    var unusedcard = BASEURL38985 + '/api/ac/uc/cardBaseService/getbacecardcanuse';
    // 能释放的卡
    var canrelease = BASEURL38985 + '/api/as/uc/cardpooldao/getcardcanreleaselist';
    // 卡池详情获取发卡目标
    var targetcard = BASEURL38985 + '/api/as/uc/cardpooldao/findgivetargtlist';
    //------------------ 卡池管理 -----------------------//


    //------------------ 修改卡状态 -----------------------//
    // 置为已用接口
    var used = BASEURL38985 + '/api/as/uc/cardpoolinfodao/upcardstatusztotwo';
    // 挂失接口
    var lost = BASEURL38985 + '/api/ac/uc/cardpoolserviceimpl/reportcardupdate';
    // 用卡号查询用户信息
    var cardnumuser = BASEURL38985 + '/api/as/uc/cardproductorder/getUserInfoByCardNo';
    //------------------ 修改卡状态 -----------------------//

    
    // 获取卡段
    var getcardlist = BASEURL38985 + '/api/as/uc/cardpoolinfodao/findcardcodebypoolcodelist';
 
    // 记录拿卡人信息
    var issuecard = BASEURL38985 + '/api/ac/uc/cardreleaseservice/save';
    // 获取拿卡人姓名
    var takecardlists = BASEURL38985 + '/api/as/uc/cardgiveouttargetdao/finduserslist';
    

    //----- 卡产品 -----------------------//
    //列表
    var cardproductlist = BASEURL38985 + '/api/as/uc/cardproduct/productList';
    //创建，修改卡产品
    var cardproduct = BASEURL38985 + '/api/ac/uc/cardproductservice/save';
    //卡产品信息
    var cardproductinfo = BASEURL38985 + '/api/as/uc/cardproduct/getbyid';
    //卡资源列表
    var cardresources = BASEURL38985 + '/api/as/uc/cardproductsubtable/tableInfoList';
    //添加资源
    var cardresourcesinsert = BASEURL38985 + '/api/as/uc/cardproductsubtable/insert';
    //删除资源
    var cardresourcesdel = BASEURL38985 + '/api/as/uc/cardproductsubtable/delete';
    //卡产品绑定的卡池列表
    var cardproduct_cardpoollist = BASEURL38985 + '/api/as/uc/cardproductsubpool/poolInfoList';
    // 卡池列表
    var cardpoollists = BASEURL38985 + '/api/as/uc/cardpooldao/findpoolslist';
    //添加卡池
    var cardproductpoolinsert = BASEURL38985 + '/api/as/uc/cardproductsubpool/insert';
    //删除卡池
    var cardproductpooldel = BASEURL38985 + '/api/as/uc/cardproductsubpool/delete';
    //卡产品绑定的票列表
    var cardproduct_ticketlist = BASEURL38985 + '/api/as/uc/cardproductsubticket/ticketInfoList';
    //添加票
    var cardproductticketinsert = BASEURL38985 + '/api/as/uc/cardproductsubticket/save';
    //删除票
    var cardproductticketdel = BASEURL38985 + '/api/as/uc/cardproductsubticket/delete';
    // 上架
    var onsale = BASEURL38985 + '/api/ac/uc/userProductService/shelves';
    // 下架
    var goodoffsale = BASEURL38985 + '/api/ac/uc/userProductService/setdown';
    //----- 卡产品 -----------------------//


    //----- 卡订单管理 -----------------------//
    //卡订单列表
    var cardproductorderlist = BASEURL38985 + '/api/us/uc/cardproductorder/cardProductOrderList';
    //卡订单详情
    var cardproductorderinfo = BASEURL38985 + '/api/us/uc/cardproductorder/cardProductOrderInfo';
    //----- 卡订单管理 -----------------------//

    

    //----- 激活卡 -----------------------//
    //根据电话查看用户信息
    var getUserInfoByMobile = BASEURL38985 + '/api/ac/uc/userService/getUserInfoByMobile';
    //根据卡号查看可以激活的产品
    var getProductByCardNoList = BASEURL38985 + '/api/as/uc/cardproductorder/getProductByCardNoList';
    //激活卡
    var createProductOrderByCardNo = BASEURL38985 + '/api/uc/uc/userCardProductOrderService/createProductOrderByCardNo';
    //----- 激活卡 -----------------------//
    
    

    

    //----- 拿卡人管理 -----------------------//
    // 拿卡人列表
    var takecardlist = BASEURL38985 + '/api/as/uc/cardgiveouttargetdao/finduserlist';
    // 保存拿卡人信息
    var savetakecarduser = BASEURL38985 + '/api/as/uc/cardgiveouttargetdao/save';
    // 删除拿卡人信息
    var deletetakecarduser = BASEURL38985 + '/api/ac/uc/cardreleaseservice/deluser';
    //----- 拿卡人管理 -----------------------//

    return {
    	insertCard : function(){
             return $resource(insertCard, {}, {});
        },
        cardpoollist : function(){
             return $resource(cardpoollist, {}, {});
        },
       // deletecard : function(){
        //     return $resource(deletecard, {}, {});
       // },
        addcard : function(){
             return $resource(addcard, {}, {});
        },

        addcardpool : function(){
             return $resource(addcardpool, {}, {});
        },
        releasecard : function(){
             return $resource(releasecard, {}, {});
        },
        used : function(){
             return $resource(used, {}, {});
        },
        lost : function(){
             return $resource(lost, {}, {});
        },
        getcardlist : function(){
             return $resource(getcardlist, {}, {});
        },
        cardproductlist : function(){
             return $resource(cardproductlist, {}, {});
        },
        cardpoollists : function(){
             return $resource(cardpoollists, {}, {});
        },
        cardproduct : function(){
             return $resource(cardproduct, {}, {});
        },
        cardproductinfo : function(){
             return $resource(cardproductinfo, {}, {});
        },
        cardresources : function(){
             return $resource(cardresources, {}, {});
        },
        cardresourcesinsert : function(){
             return $resource(cardresourcesinsert, {}, {});
        },
        cardresourcesdel : function(){
             return $resource(cardresourcesdel, {}, {});
        },
        cardproduct_cardpoollist : function(){
             return $resource(cardproduct_cardpoollist, {}, {});
        },
        cardproductpoolinsert : function(){
             return $resource(cardproductpoolinsert, {}, {});
        },
        cardproductpooldel : function(){
             return $resource(cardproductpooldel, {}, {});
        },
        cardproduct_ticketlist : function(){
             return $resource(cardproduct_ticketlist, {}, {});
        },
        cardproductticketinsert : function(){
             return $resource(cardproductticketinsert, {}, {});
        },
        cardproductticketdel : function(){
             return $resource(cardproductticketdel, {}, {});
        },
        onsale : function(){
             return $resource(onsale, {}, {});
        },
        goodoffsale : function(){
             return $resource(goodoffsale, {}, {});
        },
        
        cardnumuser : function(){
             return $resource(cardnumuser, {}, {});
        },
        issuecard : function(){
             return $resource(issuecard, {}, {});
        },
        cardinpool : function(){
             return $resource(cardinpool, {}, {});
        },
        listinpool : function(){
             return $resource(listinpool, {}, {});
        },
        cardbaselist : function(){
             return $resource(cardbaselist, {}, {});
        },
        getUserInfoByMobile : function(){
             return $resource(getUserInfoByMobile, {}, {});
        },
        getProductByCardNoList : function(){
             return $resource(getProductByCardNoList, {}, {});
        },
        createProductOrderByCardNo : function(){
             return $resource(createProductOrderByCardNo, {}, {});
        },
        cardproductorderlist : function(){
             return $resource(cardproductorderlist, {}, {});
        },
        cardproductorderinfo : function(){
             return $resource(cardproductorderinfo, {}, {});
        },
       
        statename:{ 
        	state:[
    			{name : "未使用" , code : '0' },
    			{name : "锁定" , code : '1' },
    			{name : "已使用" , code : '2' },
    			{name : "已失效" , code : '3' },
    			{name : "已释放" , code : '4' },
    			{name : "全部" , code : '' },
        	]
        },
        
        cardbaselist : function(){
             return $resource(cardbaselist, {}, {});
        },
        batchnumber : function(){
             return $resource(batchnumber, {}, {});
        },
        changestatus : function(){
             return $resource(changestatus, {}, {});
        },
        searchcard : function(){
             return $resource(searchcard, {}, {});
        },
        unusedcard : function(){
             return $resource(unusedcard, {}, {});
        },
        canrelease : function(){
             return $resource(canrelease, {}, {});
        },
        targetcard : function(){
             return $resource(targetcard, {}, {});
        },
        takecardlist : function(){
             return $resource(takecardlist, {}, {});
        },
        takecardlists : function(){
             return $resource(takecardlists, {}, {});
        },
        savetakecarduser : function(){
             return $resource(savetakecarduser, {}, {});
        },
        deletetakecarduser : function(){
             return $resource(deletetakecarduser, {}, {});
        }

    };

};

module.exports = service;