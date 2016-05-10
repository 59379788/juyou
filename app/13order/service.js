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

    var groupalllist = BASEURL38985 + '/api/as/tc/grouporder/groupalllist';

    var createBackOrder = BASEURL38985 + '/api/ac/tc/ticketOrderService/createBackOrder';

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
        groupalllist : function(){
            return $resource(groupalllist, {}, {});
        },
        createBackOrder : function(){
            return $resource(createBackOrder, {}, {});
        }

    };



};

module.exports = service;