/**
 * 子模块service
 * dlq
 */
var service = function($resource, BASEURL38985){

    var uselist = BASEURL38985 + '/api/as/tc/ticketorder/orderlist'

    return {
        uselist : function(){
            return $resource(uselist, {}, {});
        }
    };



};

module.exports = service;