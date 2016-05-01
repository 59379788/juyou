/**
 * 子模块service
 * dlq
 */
var service = function($resource, BASEURL38985){

    var uselist = BASEURL38985 + '/api/as/tc/ticketorder/orderlist';

    var destoryDetail = BASEURL38985 + '/api/as/tc/ticket2/destorydetaillist';

    var viewdestorystatisticlist = BASEURL38985 + '/api/as/tc/ticket2/viewdestorystatisticlist';

    var orderstatisticslist = BASEURL38985 + '/api/as/tc/ticketorder/orderstatisticslist'

    return {
        uselist : function(){
            return $resource(uselist, {}, {});
        },
        destoryDetail : function(){
            return $resource(destoryDetail, {}, {});
        },
        viewdestorystatisticlist : function(){
            return $resource(viewdestorystatisticlist, {}, {});
        },
        orderstatisticslist : function(){
            return $resource(orderstatisticslist, {}, {});
        }
    };



};

module.exports = service;