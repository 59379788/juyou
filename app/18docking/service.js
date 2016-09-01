/**
 * 子模块service
 * dlq
 */
var service = function($resource, BASEURL38985){

	//廊道产品列表
    var corridorproductlist = BASEURL38985 + "/api/ac/tc/ticketRedCorridorService/getRedCorridorProdList";
	//廊道产品详情
    var corridorproductinfo = BASEURL38985 + "/api/ac/tc/ticketRedCorridorService/getRedCorridorProdDetail";

    //去哪儿退票申请列表
    var selectapplyOrderRefundByUserlist = BASEURL38985 + "/api/as/dc/qunar/selectapplyOrderRefundByUserlist";
    //去哪儿退票申请_同意
    var updateOrderRefundAgree = BASEURL38985 + "/api/as/dc/qunar/updateOrderRefundAgree";
    //去哪儿退票申请_不同意
    var updateOrderRefundNotAgree = BASEURL38985 + "/api/as/dc/qunar/updateOrderRefundNotAgree";
    
    //查询票联产品信息
    var getAgencyProductInfo = BASEURL38985 + "/api/ac/dc/huaxiapl/getAgencyProductInfo";
	//查询票联订单信息
    var getOrderSimInfo = BASEURL38985 + "/api/ac/dc/huaxiapl/getOrderSimInfo";
	//查询票联产品是否使用
    var agencyOrderUsed = BASEURL38985 + "/api/ac/dc/huaxiapl/agencyOrderUsed";
    
    return {

        corridorproductlist : function(){
            return $resource(corridorproductlist, {}, {});
        },
        corridorproductinfo : function(){
            return $resource(corridorproductinfo, {}, {});
        },
        selectapplyOrderRefundByUserlist : function(){
            return $resource(selectapplyOrderRefundByUserlist, {}, {});
        },
        updateOrderRefundAgree : function(){
            return $resource(updateOrderRefundAgree, {}, {});
        },
        updateOrderRefundNotAgree : function(){
            return $resource(updateOrderRefundNotAgree, {}, {});
        },
        getAgencyProductInfo : function(){
            return $resource(getAgencyProductInfo, {}, {});
        },
        getOrderSimInfo : function(){
            return $resource(getOrderSimInfo, {}, {});
        },
        agencyOrderUsed : function(){
            return $resource(agencyOrderUsed, {}, {});
        }
       
    };

};

module.exports = service;