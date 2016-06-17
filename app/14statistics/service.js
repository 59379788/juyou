/**
 * 子模块service
 * dlq
 */
var service = function($resource, BASEURL38985){

    var uselist = BASEURL38985 + '/api/as/tc/ticketorder/orderlist';

    var destoryDetail = BASEURL38985 + '/api/as/tc/ticket2/destorydetaillist';

    var viewdestorystatisticlist = BASEURL38985 + '/api/as/tc/ticket2/viewdestorystatisticlist';

    var orderstatisticslist = BASEURL38985 + '/api/as/tc/ticketorder/orderstatisticslist';

    var orderstatisticscompanylist = BASEURL38985 + '/api/as/tc/ticketorder/orderstatisticscompanylist';

    var govsubsidygoodscodelist = BASEURL38985 + '/api/as/tc/salegovsubsidy/govsubsidygoodscodelist';

    var groupcountlist = BASEURL38985 + '/api/as/tc/grouporder/groupcountlist';


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
        },
        orderstatisticscompanylist : function(){
            return $resource(orderstatisticscompanylist, {}, {});
        },
        govsubsidygoodscodelist : function(){
            return $resource(govsubsidygoodscodelist, {}, {});
        },
        groupcountlist : function(){
            return $resource(groupcountlist, {}, {});
        }
    };



};

module.exports = service;