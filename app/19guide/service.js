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

    var savedevicerecode = BASEURL38985 + '/api/as/gc/shakedevice/saverecode';

    var shakecompanyinfolist = BASEURL38985 + '/api/as/gc/shakecompany/companyInfoList';

    var shakegroupinfolist = BASEURL38985 + '/api/as/gc/shakecompany/groupInfoList';

    var userinfo = BASEURL38985 + "/api/as/info";

    //导游评价系统问题
    var shakeevaluatequestion = BASEURL38985 + '/api/as/gc/shakeevaluatequestion/save';
  
    var shakeevaluatequestionlist = BASEURL38985 + '/api/as/gc/shakeevaluatequestion/list';

    var shakeevaluatequestioninfo = BASEURL38985 + '/api/as/gc/shakeevaluatequestion/sel';
    
    var shakeevaluatequestiondel = BASEURL38985 + '/api/as/gc/shakeevaluatequestion/del';


    //导游评价系统
    var shakeevaluategroup = BASEURL38985 + '/api/as/gc/shakeevaluateanswer/coldlist';

    var shakeevaluatetouristlist = BASEURL38985 + '/api/as/gc/shakeevaluateanswer/openidByCodeList';

    var shakeevaluateanswerlist = BASEURL38985 + '/api/as/gc/shakeevaluateanswer/answerslist';

    var shakeevaluatecountlist = BASEURL38985 + '/api/as/gc/shakeevaluateanswer/answertypecountlist';

    var shakeanswers = BASEURL38985 + '/api/ac/gc/shakeEvaluateAnswerService/save';

    var shakeanswer = BASEURL38985 + '/api/as/gc/shakeevaluateanswer/getanswerlist';

    var shakegetquestion = BASEURL38985 + '/api/as/gc/shakeevaluatequestion/findquerybydevicelist';

    //评价系统图标分析
    var questionstatisticlist = BASEURL38985 + '/api/as/gc/shakestatistics/questionstatisticlist';

    var peoplerebatelist = BASEURL38985 + '/api/as/gc/shakestatistics/peoplerebatelist';

    //评价系统图标分析时间轴
    var totalevaluatelist = BASEURL38985 + '/api/ac/gc/ShakeEvaluateStatisticsService/evaluatechart1';

    //评价系统图标分析景区时间轴
    var totalevaluatejqlist = BASEURL38985 + '/api/ac/gc/ShakeEvaluateStatisticsService/evaluatechart2';

    //评价系统图标分析景区综合评价
    var questionhpllist = BASEURL38985 + '/api/ac/gc/ShakeEvaluateStatisticsService/evaluatechart3';


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
        savedevicerecode : function(){
            return $resource(savedevicerecode, {}, {});
        },
        shakecompanyinfolist : function(){
            return $resource(shakecompanyinfolist, {}, {});
        },
        shakegroupinfolist : function(){
            return $resource(shakegroupinfolist, {}, {});
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
        
        
        
        shakeevaluategroup : function(){
            return $resource(shakeevaluategroup, {}, {});
        },
        shakeevaluatetouristlist : function(){
            return $resource(shakeevaluatetouristlist, {}, {});
        },
        shakeevaluateanswerlist : function(){
            return $resource(shakeevaluateanswerlist, {}, {});
        },
        shakeevaluatecountlist : function(){
            return $resource(shakeevaluatecountlist, {}, {});
        },
        shakeanswers : function(){
            return $resource(shakeanswers, {}, {});
        },
        shakeanswer : function(){
            return $resource(shakeanswer, {}, {});
        },
        shakegetquestion : function(){
            return $resource(shakegetquestion, {}, {});
        },


        questionstatisticlist : function(){
            return $resource(questionstatisticlist, {}, {});
        },
        peoplerebatelist : function(){
            return $resource(peoplerebatelist, {}, {});
        },

        totalevaluatelist : function(){
            return $resource(totalevaluatelist, {}, {});
        },
        totalevaluatejqlist : function(){
            return $resource(totalevaluatejqlist, {}, {});
        },

        questionhpllist : function(){
            return $resource(questionhpllist, {}, {});
        }

    };

};

module.exports = service;