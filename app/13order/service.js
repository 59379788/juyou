/**
 * 子模块service
 * dlq
 */
var service = function($resource, BASEURL38985){

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

    return {

        createorder : function(){
            return $resource(create, {}, {});
        },
        createSubsidyOrder : function(){
            return $resource(createSubsidyOrder, {}, {});
        },
        list : function(){
            return $resource(list, {}, {});
        },
        alllist : function(){
            return $resource(alllist, {}, {});
        },
        ticketlist : function(){
            return $resource(ticketlist, {}, {});
        },
        grouplist : function(){
            return $resource(grouplist, {}, {});
        },
        grouporderlist : function(){
            return $resource(grouporderlist, {}, {});
        },
        groupalllist : function(){
            return $resource(groupalllist, {}, {});
        },
        createBackOrder : function(){
            return $resource(createBackOrder, {}, {});
        },
        resend : function(){
            return $resource(resend, {}, {});
        },
        getRedCorridorOrderList : function(){
            return $resource(getRedCorridorOrderList, {}, {});
        },
        getRedCorridorResentMsg : function(){
            return $resource(getRedCorridorResentMsg, {}, {});
        },
        orderbacklist : function(){
            return $resource(orderbacklist, {}, {});
        },
        relay : function(){
            return $resource(relay, {}, {});
        },
        getRedCorridorTrSendSms : function(){
            return $resource(getRedCorridorTrSendSms, {}, {});
        }

    };



};

module.exports = service;