/**
 * 子模块service
 * dlq
 */
var service = function($resource, BASEURL38985, $q, $http){

    //公告列表
    var noticelist = BASEURL38985 + "/api/as/tc/notice/list";

    //公告详情
    var noticeinfo = BASEURL38985 + "/api/as/tc/notice/info";

    var userinfo = BASEURL38985 + "/api/as/info";

   
    return {

        noticelist : function(){
            return $resource(noticelist, {}, {});
        },
        noticeinfo : function(){
            return $resource(noticeinfo, {}, {});
        },
        userinfo : function(){
          var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行  
          $http({method: 'GET', url: userinfo}).
          success(function(data, status, headers, config) {  
            deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了  
          }).  
          error(function(data, status, headers, config) {  
            deferred.reject(data);   // 声明执行失败，即服务器返回错误  
          });  
          return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API  
        //return $resource(createinsuranceapi, {}, {});
      }
       
    };

};

module.exports = service;