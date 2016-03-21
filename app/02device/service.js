/**
 * 子模块service
 * dlq
 */
module.exports = function($resource, BASEURL38985){


    var typelist = BASEURL38985 + '/api/us/tc/device/watchdevicetickettypelist';

    //var devicelist = BASEURL38985 + '/api/us/tc/device/list';

    var devicelist = BASEURL38985 + '/api/us/tc/device/watchdevicelist';

    var setdevicetkttype = BASEURL38985 + '/api/as/tc/type/adminList';


    return {

        typelist : function(){
            return $resource(typelist, {}, {});
        },
        devicelist : function(){
            return $resource(devicelist, {}, {});
        },
        setdevicetkttype : function(){
            return $resource(typelist, {}, {});
        }
      
    };

};