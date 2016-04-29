/**
 * 子模块service
 * djp
 */
var service = function($resource, BASEURL38985){

    var userinfo = "http://115.28.145.50:38985/api/uc/uc/userService/getUserInfoByMobile";

    var cardA = BASEURL38985 + "/api/as/uc/jyu/getphycard";

    var cardB = BASEURL38985 + "";

    var infoticket = BASEURL38985 + "/api/as/tc/ticketorder/forKefuOrderInfoByMobilelist";

    var order = BASEURL38985 + "";

    var redpackage = BASEURL38985 + "";
    
    return {

        userinfo : function(){
            return $resource(userinfo, {}, {});
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
        order : function(){
            return $resource(order, {}, {});
        },
        redpackage : function(){
            return $resource(redpackage, {}, {});
        }
       
    };

};

module.exports = service;