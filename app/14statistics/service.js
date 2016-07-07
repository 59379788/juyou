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

    var groupcountjqlist = BASEURL38985 + '/api/as/tc/grouporder/groupcountjqlist';

    var useddetaillist = BASEURL38985 + '/api/as/tc/ticket2/useddetaillist';

    var grouplxslist = BASEURL38985 + '/api/as/tc/ticket2/grouplxslist';

    var grouplxslist = BASEURL38985 + '/api/as/tc/ticket2/grouplxslist';
    //销售统计 月查询
    var orderstatisticscompanyhistorylist = BASEURL38985 + '/api/as/tc/ticketorder/orderstatisticscompanyhistorylist';
	//同业销售统计 月查询
    var orderstatisticshistorylist = BASEURL38985 + '/api/as/tc/ticketorder/orderstatisticshistorylist';


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
        },
        groupcountjqlist : function(){
            return $resource(groupcountjqlist, {}, {});
        },
        useddetaillist : function(){
            return $resource(useddetaillist, {}, {});
        },
        grouplxslist : function(){
            return $resource(grouplxslist, {}, {});
        },
        orderstatisticscompanyhistorylist : function(){
            return $resource(orderstatisticscompanyhistorylist, {}, {});
        },
        orderstatisticshistorylist : function(){
            return $resource(orderstatisticshistorylist, {}, {});
        }
    };



};

module.exports = service;