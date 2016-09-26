
var service = function($resource, BASEURL38985){
    // 卡池列表
var cardpoollist = BASEURL38985 + '/api/as/uc/cardpooldao/findpoollist';
    // 删除卡
    //var deletecard = BASEURL38985 + '/api/as/gc/shakedevice/findlist';
    // 添加卡
var addcard = BASEURL38985 + '/api/ac/uc/cardpoolserviceimpl/save';
    // 添加卡池
var addcardpool = BASEURL38985 + '/api/as/uc/cardpooldao/save';
    // 释放卡池里面的卡
var releasecard = BASEURL38985 + '/api/ac/uc/cardpoolserviceimpl/releasecardpoolupdate';
// 置为已用接口
var used = BASEURL38985 + '/api/as/uc/cardpoolinfodao/upcardstatusztotwo';
// 挂失接口
var lost = BASEURL38985 + '/api/ac/uc/cardpoolserviceimpl/reportcardupdate';
    
    return {
        cardpoollist : function(){
             return $resource(cardpoollist, {}, {});
        },
       // deletecard : function(){
        //     return $resource(deletecard, {}, {});
       // },
        addcard : function(){
             return $resource(addcard, {}, {});
        },

        addcardpool : function(){
             return $resource(addcardpool, {}, {});
        },
        releasecard : function(){
             return $resource(releasecard, {}, {});
        },
        used : function(){
             return $resource(used, {}, {});
        },
        lost : function(){
             return $resource(lost, {}, {});
        }
        
    };

};

module.exports = service;