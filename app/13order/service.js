/**
 * 子模块service
 * dlq
 */
var service = function($resource, BASEURL38985){

    var create = BASEURL38985 + '/api/ac/tc/ticketOrderService/createOrder';

    var list = BASEURL38985 + '/api/as/tc/ticketorder/orderlist'

    return {
        createorder : function(){
            return $resource(create, {}, {});
        },
        list : function(){
            return $resource(list, {}, {});
        }
    };



};

module.exports = service;