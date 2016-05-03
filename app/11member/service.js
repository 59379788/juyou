/**
 * 子模块service
 * dlq
 */
var service = function($resource, BASEURL38985, $q, $http){

    var userinfo = BASEURL38985 + '/api/uc/uc/userService/getUserInfoByIdForChinaUnicom';

    var getuserinfobymobile = BASEURL38985 + 'api/uc/uc/userService/getUserInfoByMobile'

    return {
        userinfo : function(){
            return $resource(userinfo, {}, {});
        },
        getuserinfobymobile : function(){
            return $resource(getuserinfobymobile, {}, {});
        }
    };

};

module.exports = service;