/**
 * 子模块service
 * dlq
 */
module.exports = function($resource, BASEURL38985, $q, $http){

    var typelist = BASEURL38985 + '/api/as/tc/device/watchdevicetickettypelist';

    //var devicelist = BASEURL38985 + '/api/us/tc/device/list';

    var devicelist = BASEURL38985 + '/api/as/tc/device/watchdevicelist';

    //var setdevicetkttype = BASEURL38985 + '/api/as/tc/type/adminList';

    //添加票种权限
    var add = BASEURL38985 + '/api/as/tc/deviceauth/create';
    //删除票种权限
    var del = BASEURL38985 + '/api/as/tc/deviceauth/delete';

    var info = BASEURL38985 + '/api/as/tc/device/info';

    var update = BASEURL38985 + '/api/as/tc/device/update';

    var create = BASEURL38985 + '/api/as/tc/device/create';


    var remove = BASEURL38985 + '/api/as/tc/deviceauth/deleteall';

    //景区简表
    //var slist = BASEURL38985 + "/api/as/sa/placeview/jlist";

    //列表
    var tktlist = BASEURL38985 + '/api/as/tc/type2/settypelist';

    //票种设置-权限详情显示
    var typeauthinfo = BASEURL38985 + '/api/as/tc/typeauth/info';

    //票种设置-权限详情修改
    var typeauthupdate = BASEURL38985 + '/api/as/tc/typeauth/update';

    //票种设置-权限详情编辑节日列表
    var viewfestivallist = BASEURL38985 + '/api/as/tc/viewfestival/list';

    //票种设置-权限详情编辑节日新增
    var viewfestivalcreate = BASEURL38985 + '/api/as/tc/viewfestival/create';

    //票种设置-权限详情编辑节日删除
    var viewfestivaldel = BASEURL38985 + '/api/as/tc/viewfestival/delete';
    

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
        update : function(){
            return $resource(update, {}, {});
        },
        create : function(){
            return $resource(create, {}, {});
        },
        remove : function(){
            return $resource(remove, {}, {});
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
        ],
        tktlist : function(){
            return $resource(tktlist, {}, {});
        },
        typeauthinfo : function(){
            return $resource(typeauthinfo, {}, {});
        },
        typeauthupdate : function(){
            return $resource(typeauthupdate, {}, {});
        },
        viewfestivallist : function(){
            return $resource(viewfestivallist, {}, {});
        },
        viewfestivalcreate : function(){
            return $resource(viewfestivalcreate, {}, {});
        },
        viewfestivaldel : function(){
            return $resource(viewfestivaldel, {}, {});
        }
      
    };

};