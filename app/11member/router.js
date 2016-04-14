/**
 * 子模块路由
 * dlq
 */

var router = function($urlRouterProvider, $stateProvider){

 	$stateProvider

 	  .state('app.juyoumember', {
        url: '/unicomuser',
        controller : 'unicomuser',
        template: require('./views/unicomuser.html'),
        resolve:{
            userinfo : function(memberservice){
                return memberservice.userinfo();
            }
            ,
            getDate : function(utilservice){
                return utilservice.getDate;
            }
            // list : function(productservice){
            //     return productservice.list();
            // }
        }
        
      })

      


};

module.exports = router;