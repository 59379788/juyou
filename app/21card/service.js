
var service = function($resource, BASEURL38985){
    // 卡池列表
    var cardpoollist = BASEURL38985 + '/api/as/uc/cardpooldao/findpoollist';
    // 删除卡
    //var deletecard = BASEURL38985 + '/api/as/gc/shakedevice/findlist';
    // 添加卡
    var addcard = BASEURL38985 + '/api/ac/uc/cardpoolserviceimpl/save';
    // 添加卡池
    var addcardpool = BASEURL38985 + '/api/as/uc/cardpooldao/save';
    // 释放卡池
    var releasecard = BASEURL38985 + '/api/ac/uc/cardpoolserviceimpl/releasecardpool';

    
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
        
    };

};

module.exports = service;