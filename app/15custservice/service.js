/**
 * 子模块service
 * djp
 */
var service = function($resource, BASEURL38985){

    var userinfo = BASEURL38985 + "/api/ac/uc/userService/getUserInfoByMobile";

    var oneuserinfo = BASEURL38985 + "/api/as/uc/jyu/getjyuserinfo";

    var edituserinfo = BASEURL38985 + "/api/ac/uc/userService/updateUserInfoByMobile";

    var createuserinfo = BASEURL38985 + "/api/uc/uc/userService/insertUserAuthKF";

    var cardA = BASEURL38985 + "/api/as/uc/jyu/getphycardlist";

    var cardB = BASEURL38985 + "/api/as/uc/jyu/getdigcardlist";

    var infoticket = BASEURL38985 + "/api/as/tc/ticketorder/forKefuOrderInfoByMobilelist";

    var redpackage = BASEURL38985 + "/api/us/uc/jyu/getredpackagelist";

    var updateUserAuthInfo = BASEURL38985 + "/api/ac/uc/userService/updateUserAuthInfo";

    var updateUserSubsidy = BASEURL38985 + "/api/ac/uc/userService/updateUserSubsidy";

    var orderlist = BASEURL38985 + "/api/as/uc/jyu/getOrderListForKList";

    var sendmessage = "http://ts.juyouhx.com/getsms/service/CW0088";

    var orderbacklist = BASEURL38985 + "/api/as/tc/ticketorderback/orderbacklist";

    var orderback = BASEURL38985 + "/api/as/tc/ticketorderback/backmoneybycode";

    var updateCardPass = BASEURL38985 + "/api/as/uc/jyu/updateCardPass";

    var carduserinfo = BASEURL38985 + "/api/ac/uc/userService/getUserInfoUseCardP";
    
    return {

        userinfo : function(){
            return $resource(userinfo, {}, {});
        },
        oneuserinfo : function(){
            return $resource(oneuserinfo, {}, {});
        },
        edituserinfo : function(){
            return $resource(edituserinfo, {}, {});
        },
        createuserinfo : function(){
            return $resource(createuserinfo, {}, {});
        },
        cardA : function(){
            return $resource(cardA, {}, {});
        },
        cardB : function(){
            return $resource(cardB, {}, {});
        },
        infoticket : function(){
            return $resource(infoticket, {}, {});
        },
        redpackage : function(){
            return $resource(redpackage, {}, {});
        },
        updateUserAuthInfo : function(){
            return $resource(updateUserAuthInfo, {}, {});
        },
        updateUserSubsidy : function(){
            return $resource(updateUserSubsidy, {}, {});
        },
        orderlist : function(){
            return $resource(orderlist, {}, {});
        },
        sendmessage : function(){
            return $resource(sendmessage, {}, {});
        },
        orderbacklist : function(){
            return $resource(orderbacklist, {}, {});
        },
        orderback : function(){
            return $resource(orderback, {}, {});
        },
        updateCardPass : function(){
            return $resource(updateCardPass, {}, {});
        },
        carduserinfo : function(){
            return $resource(carduserinfo, {}, {});
        }
       
    };

};

module.exports = service;