/**
 * 子模块service
 * dlq
 */
var service = function($resource, BASEURL38985, $q, $http){

    //查询景区下拉列表
    var noticelist = BASEURL38985 + "/api/as/tc/notice/list";
    
    return {

        noticelist : function(){
            return $resource(noticelist, {}, {});
        }
       
    };

};

module.exports = service;