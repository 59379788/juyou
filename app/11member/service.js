/**
 * 子模块service
 * dlq
 */
var service = function($resource, BASEURL38985, $q, $http){

    var userinfo = BASEURL38985 + '/api/uc/uc/userService/getUserInfoByIdForChinaUnicom';

    return {
        userinfo : function(){
            return $resource(userinfo, {}, {});
        }
       
    };

};

module.exports = service;