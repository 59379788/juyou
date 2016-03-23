/**
 * 子模块service
 * dlq
 */
module.exports = function($resource, BASEURL38985, $q, $http){

    var typelist = BASEURL38985 + '/api/us/tc/device/watchdevicetickettypelist';

    //var devicelist = BASEURL38985 + '/api/us/tc/device/list';

    var devicelist = BASEURL38985 + '/api/us/tc/device/watchdevicelist';

    var setdevicetkttype = BASEURL38985 + '/api/as/tc/type/adminList';

    var add = BASEURL38985 + '/api/us/tc/deviceauth/create';

    var del = BASEURL38985 + '/api/us/tc/deviceauth/delete';

    var info = BASEURL38985 + '/api/us/tc/device/info';

    //景区简表
    var slist = BASEURL38985 + "/api/us/tc/view/adminViewForTicketList";

    return {

        typelist : function(){
            return $resource(typelist, {}, {});
        },
        devicelist : function(){
            return $resource(devicelist, {}, {});
        },
        setdevicetkttype : function(){
            return $resource(typelist, {}, {});
        },
        add : function(){
            return $resource(add, {}, {});
        },
        del : function(){
            return $resource(del, {}, {});
        },
        info : function(){
            return $resource(info, {}, {});
        },
        slist : function(obj){
            var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行  
            $http({method: 'GET', params: obj, url: slist}).  
            success(function(data, status, headers, config) {  
                deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了  
            }).  
            error(function(data, status, headers, config) {  
                deferred.reject(data);   // 声明执行失败，即服务器返回错误  
            });  
            return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API 
        },
        devicetype : [
            {
                'name' : '检票机',
                'code' : 1
            },
            {
                'name' : '闸机',
                'code' : 2
            },
            {
                'name' : '手持查消票机',
                'code' : 3
            },
            {
                'name' : '办卡机',
                'code' : 4
            }
        ]
      
    };

};