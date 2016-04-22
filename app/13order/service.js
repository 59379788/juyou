/**
 * 子模块service
 * dlq
 */
var service = function($resource, BASEURL38985){

    var create = BASEURL38985 + '/api/ac/tc/ticketOrderService/createOrder';

    var list = BASEURL38985 + '/api/as/tc/ticketorder/orderlist';

    var ticketlist = BASEURL38985 + '/api/as/tc/ticket2/orderticketlist';

    var alllist = BASEURL38985 + '/api/as/tc/ticketorder/orderalllist';

    return {
        createorder : function(){
            return $resource(create, {}, {});
        },
        list : function(){
            return $resource(list, {}, {});
        },
        alllist : function(){
            return $resource(alllist, {}, {});
        },
        ticketlist : function(){
            return $resource(ticketlist, {}, {});
        }
    };



};

module.exports = service;