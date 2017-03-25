/**
 * 子模块service
 * dlq
 */
var service = function ($resource, BASEURL38985) {

    var create = BASEURL38985 + '/api/ac/tc/ticketOrderService/createOrder';
    //买补贴销售品订单
    var createSubsidyOrder = BASEURL38985 + '/api/ac/tc/ticketOrderSubsidyService/createOrder';

    var list = BASEURL38985 + '/api/as/tc/ticketorder/orderlist';

    var ticketlist = BASEURL38985 + '/api/as/tc/ticket2/orderticketlist';

    var alllist = BASEURL38985 + '/api/as/tc/ticketorder/orderalllist';

    var grouplist = BASEURL38985 + '/api/as/tc/grouporder/grouplist';

    var grouporderlist = BASEURL38985 + '/api/as/tc/grouporder/grouporderlist';

    var groupalllist = BASEURL38985 + '/api/as/tc/grouporder/groupalllist';

    var createBackOrder = BASEURL38985 + '/api/ac/tc/ticketOrderService/createBackOrder';

    var resend = BASEURL38985 + '/api/as/tc/ticketorder/resend';

    var relay = BASEURL38985 + '/api/as/tc/ticketorder/relay';

    //退票历史
    var orderbacklist = BASEURL38985 + '/api/as/tc/ticketorderback/orderbacklist';

    //外部订单信息
    //Red 廊道
    var getRedCorridorOrderList = BASEURL38985 + '/api/ac/tc/ticketRedCorridorService/getRedCorridorOrderList';
    //重发短信
    var getRedCorridorResentMsg = BASEURL38985 + '/api/ac/tc/ticketRedCorridorService/getRedCorridorResentMsg';
    //转发短信 廊道
    var getRedCorridorTrSendSms = BASEURL38985 + '/api/ac/tc/ticketRedCorridorService/getRedCorridorTrSendSms';


    //北京票联  红海滩廊道
    var getOrderSimInfo = BASEURL38985 + '/api/ac/dc/huaxiapl/getOrderSimInfo';
    
    //重发短信
    var agencyOrderRepeatECode = BASEURL38985 + '/api/ac/dc/huaxiapl/agencyOrderRepeatECode';

    //皇家极地海洋馆信息
    var getroyalocOrdersState = BASEURL38985 + '/api/ac/dc/royaloc/getOrdersState';

    //生效时间
    var updateTicketEffectTime = BASEURL38985 + '/api/as/tc/ticket2/updateTicketEffectTime';
    
    //供应商订单列表（分页）
    var supplyOrderList = BASEURL38985 + '/api/as/tc/ticketorder/supplyOrderList';

    //运营商订单列表（分页）
    var areaOrderList = BASEURL38985 + '/api/as/tc/ticketorder/areaOrderList';

    //分销商订单列表（分页）
    var marketOrderList = BASEURL38985 + '/api/as/tc/ticketorder/marketOrderList';

    //测试退票
    var testCreateBackOrder = BASEURL38985 + '/api/ac/tc/ticketOrderBackService/createBackOrder';





    return {

        createorder: function () {
            return $resource(create, {}, {});
        },
        createSubsidyOrder: function () {
            return $resource(createSubsidyOrder, {}, {});
        },
        list: function () {
            return $resource(list, {}, {});
        },
        alllist: function () {
            return $resource(alllist, {}, {});
        },
        ticketlist: function () {
            return $resource(ticketlist, {}, {});
        },
        grouplist: function () {
            return $resource(grouplist, {}, {});
        },
        grouporderlist: function () {
            return $resource(grouporderlist, {}, {});
        },
        groupalllist: function () {
            return $resource(groupalllist, {}, {});
        },
        createBackOrder: function () {
            return $resource(createBackOrder, {}, {});
        },
        resend: function () {
            return $resource(resend, {}, {});
        },
        getRedCorridorOrderList: function () {
            return $resource(getRedCorridorOrderList, {}, {});
        },
        getRedCorridorResentMsg: function () {
            return $resource(getRedCorridorResentMsg, {}, {});
        },
        orderbacklist: function () {
            return $resource(orderbacklist, {}, {});
        },
        relay: function () {
            return $resource(relay, {}, {});
        },
        getRedCorridorTrSendSms: function () {
            return $resource(getRedCorridorTrSendSms, {}, {});
        },
        getOrderSimInfo: function () {
            return $resource(getOrderSimInfo, {}, {});
        },
        agencyOrderRepeatECode: function () {
            return $resource(agencyOrderRepeatECode, {}, {});
        },
        getroyalocOrdersState: function () {
            return $resource(getroyalocOrdersState, {}, {});
        },
        updateTicketEffectTime: function () {
            return $resource(updateTicketEffectTime, {}, {});
        },
        supplyOrderList: function () {
            return $resource(supplyOrderList, {}, {});
        },
        areaOrderList: function () {
            return $resource(areaOrderList, {}, {});
        },
        marketOrderList: function () {
            return $resource(marketOrderList, {}, {});
        },
        testCreateBackOrder: function () {
            return $resource(testCreateBackOrder, {}, {});
        }

    };



};

module.exports = service;