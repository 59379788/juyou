/**
 * 子模块service
 * djp
 */
var service = function($resource, BASEURL38985){

    var userinfo = BASEURL38985 + "/api/ac/uc/userService/getUserInfoByMobile";

    var userinfobypapersno = BASEURL38985 + "/api/ac/uc/userService/getUserInfoByPapersno";

    var oneuserinfo = BASEURL38985 + "/api/as/uc/jyu/getjyuserinfo";

    var edituserinfo = BASEURL38985 + "/api/ac/uc/userService/updateUserInfoByMobile";

    var createuserinfo = BASEURL38985 + "/api/uc/uc/userService/insertUserAuthKF";

    var cardA = BASEURL38985 + "/api/as/uc/jyu/getphycardlist";

    var cardB = BASEURL38985 + "/api/as/uc/jyu/getdigcardlist";

    var infoticket = BASEURL38985 + "/api/as/tc/ticketorder/forKefuOrderInfoByMobilelist";

    var destoryticket = BASEURL38985 + "/tktapi/sc/destoryService/updateByCode";

    var redpackage = BASEURL38985 + "/api/us/uc/jyu/getredpackagelist";

    var updateUserAuthInfo = BASEURL38985 + "/api/ac/uc/userService/updateUserAuthInfo";

    var updateUserSubsidy = BASEURL38985 + "/api/ac/uc/userService/updateUserSubsidy";

    var orderlist = BASEURL38985 + "/api/as/uc/jyu/getOrderListForKList";

    var sendmessage = "http://ts.juyouhx.com/getsms/service/CW0088";

    var orderbacklist = BASEURL38985 + "/api/as/tc/ticketorderback/orderbacklist";

    var orderback = BASEURL38985 + "/api/ac/tc/ticketOrderService/updatebackmoneybycode";

    var updateCardPass = BASEURL38985 + "/api/as/uc/jyu/updateCardPass";

    var carduserinfo = BASEURL38985 + "/api/ac/uc/userService/getUserInfoUseCardP";

    var destoryticketrecord = BASEURL38985 + "/api/as/tc/ticketorder/destoryticketrecord";

    var registercount = BASEURL38985 + "/api/ac/uc/userActiveService/countCard";


    //七星彩查uid
    var getWeekLottey = BASEURL38985 + '/api/ac/ac/weekLotteryService/getWeekLottey';
    // 个人信息查询
    var lotteyUserinfo = BASEURL38985 + '/api/uc/uc/userService/getUserInfoById';
    // 保存中奖人信息
    var saveUserinfo = BASEURL38985 + '/api/ac/ac/winLotteryService/saveweeklottery';


    //查看激活码
    var getActiveCodeByMobile = BASEURL38985 + '/api/ac/uc/userActiveService/getActiveCodeByMobile';

    //查看票信息
    var getinfobyid = BASEURL38985 + '/api/as/tc/ticket2/getinfobyid';
    
    return {

        userinfo : function(){
            return $resource(userinfo, {}, {});
        },
        userinfobypapersno : function(){
            return $resource(userinfobypapersno, {}, {});
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
        destoryticket : function(){
            return $resource(destoryticket, {}, {});
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
        },
        destoryticketrecord : function(){
            return $resource(destoryticketrecord, {}, {});
        },
        registercount : function(){
            return $resource(registercount, {}, {});
        },
        getWeekLottey : function(){
            return $resource(getWeekLottey, {}, {});
        },

        lotteyUserinfo : function(){
            return $resource(lotteyUserinfo, {}, {});
        },

        saveUserinfo : function(){
            return $resource(saveUserinfo, {}, {});
        },
        getActiveCodeByMobile : function(){
             return $resource(getActiveCodeByMobile, {}, {});
        },
        getinfobyid : function(){
             return $resource(getinfobyid, {}, {});
        }

       
    };

};

module.exports = service;