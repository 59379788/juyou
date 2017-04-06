/**
 * 子模块service
 * dlq
 */
var service = function($resource, BASEURL38985, $q, $http){

    var list = BASEURL38985 + "/api/as/tc/placeview/list";

    var create = BASEURL38985 + "/api/as/tc/placeview/create";
    
    var info = BASEURL38985 + "/api/as/tc/placeview/info";

    var update = BASEURL38985 + "/api/as/tc/placeview/update";

    var slist = BASEURL38985 + "/api/as/tc/placeview/jlist";

    var city = BASEURL38985 + "/api/us/sc/city/citylist";

    var updateplacemerchant = BASEURL38985 + "/api/as/tc/placemerchant/update";
    // 商户信息详情
    var merchantinfo = BASEURL38985 + '/api/as/tc/placemerchant/info';
    // 更新商户表首页排序
    var gogosort = BASEURL38985 + '/api/as/tc/place/update';

    
    return {

        list : function(){
            return $resource(list, {}, {});
        },
    	create : function(){
            return $resource(create, {}, {});
        },
        info : function(){
            return $resource(info, {}, {});
        },
        update : function(){
            return $resource(update, {}, {});
        },
        updateplacemerchant : function(){
            return $resource(updateplacemerchant, {}, {});
        },
        merchantinfo : function(){
            return $resource(merchantinfo, {}, {});
        },
        gogosort : function(){
            return $resource(gogosort, {}, {});
        },
        slist : function(obj){
            var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行  
            $http({method: 'GET', params: obj, url: slist}).then(
                function(data){
                    deferred.resolve(data.data);
                },
                function(data){
                    deferred.reject(data.data);
                });
            // success(function(data, status, headers, config) {  
            //     deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了  
            // }).  
            // error(function(data, status, headers, config) {  
            //     deferred.reject(data);   // 声明执行失败，即服务器返回错误  
            // });  
            return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API 
        },
        city : function(obj){
            var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行  
            $http({method: 'GET', params: obj, url: city}).then(
                function(data){
                    deferred.resolve(data.data);
                },
                function(data){
                    deferred.reject(data.data);
                });
            // success(function(data, status, headers, config) {  
            //     deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了  
            // }).  
            // error(function(data, status, headers, config) {  
            //     deferred.reject(data);   // 声明执行失败，即服务器返回错误  
            // });  
            return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API 
        }
       
    };

};

module.exports = service;