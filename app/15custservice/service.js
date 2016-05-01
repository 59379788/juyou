/**
 * 子模块service
 * djp
 */
var service = function($resource, BASEURL38985){

    var userinfo = "/api/ac/uc/userService/getUserInfoByMobile";

    var oneuserinfo = "/api/as/uc/jyu/getjyuserinfo";

    var edituserinfo = "/api/ac/uc/userService/updateUserInfoByMobile";

    var cardA = BASEURL38985 + "/api/as/uc/jyu/getphycardlist";

    var cardB = BASEURL38985 + "/api/as/uc/jyu/getdigcardlist";

    var infoticket = BASEURL38985 + "/api/as/tc/ticketorder/forKefuOrderInfoByMobilelist";

    var redpackage = BASEURL38985 + "/api/us/uc/jyu/getredpackagelist";
    
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
        }
       
    };

};

module.exports = service;