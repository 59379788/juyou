/**
 * 子模块service
 * dlq
 */
var service = function($resource, BASEURL38985){

    //导游评价系统摇一摇设备
    var shakedevicelist = BASEURL38985 + '/api/as/gc/shakedevice/findlist';

    var shakedevice = BASEURL38985 + '/api/as/gc/shakedevice/save';

    var shakedeviceinfo = BASEURL38985 + '/api/as/gc/shakedevice/getone';

    var shakedevicedel = BASEURL38985 + '/api/as/gc/shakedevice/del';

    //导游评价系统问题
    var shakeevaluatequestion = BASEURL38985 + '/api/as/gc/shakeevaluatequestion/save';
  
    var shakeevaluatequestionlist = BASEURL38985 + '/api/as/gc/shakeevaluatequestion/list';

    var shakeevaluatequestioninfo = BASEURL38985 + '/api/as/gc/shakeevaluatequestion/sel';
    
    var shakeevaluatequestiondel = BASEURL38985 + '/api/as/gc/shakeevaluatequestion/del';

    //导游评价系统团列表
    var shakeevaluategrouplist = BASEURL38985 + '/api/as/gc/shakeevaluateanswer/coldlist';
    //游客
    var shakeevaluategrouptourist = BASEURL38985 + '/api/as/gc/shakeevaluateanswer/openidByCodeList';
        
    var shakeevaluateanswerlist = BASEURL38985 + '/api/as/gc/shakeevaluateanswer/answerslist';
    

    return {

        shakedevicelist : function(){
            return $resource(shakedevicelist, {}, {});
        },
        shakedevice : function(){
            return $resource(shakedevice, {}, {});
        },
        shakedeviceinfo : function(){
            return $resource(shakedeviceinfo, {}, {});
        },
        shakedevicedel : function(){
            return $resource(shakedevicedel, {}, {});
        },



        shakeevaluatequestion : function(){
            return $resource(shakeevaluatequestion, {}, {});
        },
        shakeevaluatequestionlist : function(){
            return $resource(shakeevaluatequestionlist, {}, {});
        },
        shakeevaluatequestioninfo : function(){
            return $resource(shakeevaluatequestioninfo, {}, {});
        },
        shakeevaluatequestiondel : function(){
            return $resource(shakeevaluatequestiondel, {}, {});
        },



        shakeevaluategrouplist : function(){
            return $resource(shakeevaluategrouplist, {}, {});
        },
        shakeevaluategrouptourist : function(){
            return $resource(shakeevaluategrouptourist, {}, {});
        },
        shakeevaluateanswerlist : function(){
            return $resource(shakeevaluateanswerlist, {}, {});
        }
        
    };

};

module.exports = service;